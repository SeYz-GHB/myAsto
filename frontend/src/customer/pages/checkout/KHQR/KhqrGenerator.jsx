import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QRDisplay from './QRDisplay';
import QRTimer from './QRTimer';
import QRExpired from './QRExpired';
import MessageBox from './MessageBox';
import { checkPaymentStatus } from '../../../../api/payment.api';

const KhqrGenerator = ({ resFromKHQR, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [pollPayment, setPollPayment] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  // Countdown timer
  useEffect(() => {
    if (!resFromKHQR?.qr_expiration) return;

    const calculateTimeLeft = () => {
      const expirationTime = new Date(resFromKHQR.qr_expiration).getTime();
      const now = Date.now();
      const diff = expirationTime - now;
      if (diff <= 0) return { expired: true };

      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      return { minutes, seconds, expired: false };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [resFromKHQR]);

  // Poll payment status
  useEffect(() => {
    const pollPayment = async () => {
      try {
        const res = await checkPaymentStatus(resFromKHQR.data.qr_md5, resFromKHQR.data.order_id);
        setPollPayment(res);

        if (res.success) {
          setMessage({ type: 'success', text: 'Payment successful! ✅' });
          clearInterval(pollInterval);
          setTimeout(() => navigate('/User-profile'), 3000);
        }
      } catch (err) {
        setMessage({
          type: 'error',
          text: err.response?.data.message || 'Failed to check payment transaction',
        });
      }
    };

    const pollInterval = setInterval(pollPayment, 3000);
    const timeout = setTimeout(() => clearInterval(pollInterval), 5 * 60 * 1000);

    return () => {
      clearInterval(pollInterval);
      clearTimeout(timeout);
    };
  }, [resFromKHQR?.data?.qr_md5, resFromKHQR?.data?.order_id]);

  const isExpired = timeLeft?.expired;

  if (!resFromKHQR)
    return (
      <article className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
          <p className="text-gray-600">Generating KHQR code...</p>
        </div>
      </article>
    );

  return (
    <article className="rounded-lg p-6 sm:p-8 max-w-md mx-4 relative">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close QR code"
        >
          <svg
            className="w-6 h-6 text-white cursor-pointer hover:scale-120 transform transition bg-red-600 rounded-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      <header className="text-center mb-6">
        <MessageBox message={message} />
      </header>

      <section className="bg-white rounded-3xl animation_form_popup" style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)' }}>
        {isExpired ? <QRExpired /> : <QRDisplay resFromKHQR={resFromKHQR} />}
      </section>

      {timeLeft && !isExpired && <QRTimer timeLeft={timeLeft} />}
    </article>
  );
};

export default KhqrGenerator;
