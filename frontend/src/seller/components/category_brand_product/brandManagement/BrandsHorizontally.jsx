import React, { useEffect, useState } from 'react';
import { getAllBrandsAPI } from '../../../../api/BrandProduct.api';
import '../../../../index.css';

const BrandsHorizontally = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', text: '' });
  const [brands, setBrands] = useState([]);

  const getBrands = async () => {
    try {
      setLoading(true);
      const data = await getAllBrandsAPI();
      setBrands(data.brands || []);
      setLoading(false);
    } catch (error) {
      setMsg({
        type: 'error',
        text: error.response?.data.message || 'Failed to fetch brands',
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  if (loading) {
    return <p className="text-gray-300 text-center py-8">Loading brands...</p>;
  }

  if (msg.type === 'error') {
    return <p className="text-red-500 text-center py-8">{msg.text}</p>;
  }

  if (brands.length === 0) {
    return <p className="text-gray-500 text-center py-8">No brands available.</p>;
  }

  // Duplicate brands for seamless scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="overflow-hidden w-full py-2 mb-5">
      <div className="flex animate-scroll items-center brands-carousel-track">
        {duplicatedBrands.map((b, idx) => (
          <div className="brand-item flex-shrink-0 px-4" key={idx}>
            <img
              src={b.image_url}
              alt={b.name || 'Brand'}
              className="brand-logo w-10 md:w-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsHorizontally;
