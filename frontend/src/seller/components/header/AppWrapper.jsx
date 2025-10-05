import React, { useState, useEffect } from 'react';
import { GoogleTranslateService } from '../../../../utils/googleTranslateService';


const AppWrapper = ({ children }) => {
  const [isTranslateReady, setIsTranslateReady] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    GoogleTranslateService.initGoogleTranslate((ready) => {
      setIsTranslateReady(ready);
      setIsInitializing(false);
    });
  }, []);

  // Show loading screen until translation is ready
  if (isInitializing || !isTranslateReady) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/path/to/your/logo.png" 
              alt="Logo" 
              className="h-16 w-auto mx-auto"
            />
          </div>
          
          {/* Loading spinner */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <span className="text-lg text-gray-600">Loading translation service...</span>
          </div>
          
          {/* Progress indicator */}
          <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
            <div className="bg-green-600 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Preparing multilingual experience...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{display: 'none'}}></div>
    </>
  );
};

export default AppWrapper;