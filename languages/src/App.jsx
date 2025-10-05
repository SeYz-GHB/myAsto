import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [isTranslating, setIsTranslating] = useState(false);
  const translationTimeoutRef = useRef(null);
  const currentLanguageRef = useRef('en');

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      const translateElement = new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,fr,zh,km',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          // Add these options for better control
          autoDisplay: false,
          multilanguagePage: true
        },
        "google_translate_element"
      );

      // Wait a bit for the dropdown to be created, then add event listener
      setTimeout(() => {
        const selectElement = document.querySelector('.goog-te-combo');
        if (selectElement) {
          selectElement.addEventListener('change', handleTranslateChange);
        }
      }, 1000);

      // Also observe DOM changes to catch translation updates
      const observer = new MutationObserver(handleTranslateChange);
      const translateContainer = document.getElementById('google_translate_element');
      if (translateContainer) {
        observer.observe(document.body, { 
          childList: true, 
          subtree: true,
          attributes: true,
          attributeFilter: ['class'] // Watch for Google's translation classes
        });
      }
    }

    // Cleanup function
    return () => {
      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
      }
    }
  }, [])

  // Function to get current language (simplified)
  const getCurrentLanguage = () => {
    try {
      const selectElement = document.querySelector('.goog-te-combo');
      return selectElement ? selectElement.value : 'en';
    } catch (error) {
      return 'en';
    }
  }

  // Monitor the default Google Translate dropdown changes
  const handleTranslateChange = () => {
    if (translationTimeoutRef.current) {
      clearTimeout(translationTimeoutRef.current);
    }
    
    setIsTranslating(true);
    
    translationTimeoutRef.current = setTimeout(() => {
      setIsTranslating(false);
    }, 1500);
  }

  return (
    <div>
      <h1>My Google Website</h1>
      
      {/* Status indicator */}
      {isTranslating && (
        <div style={{ 
          background: '#ffc107', 
          padding: '5px 10px', 
          borderRadius: '4px',
          fontSize: '12px',
          marginBottom: '10px'
        }}>
          🔄 Translation in progress...
        </div>
      )}
      
      {/* Google Translate Element - Use the default dropdown */}
      <div id='google_translate_element'></div>
      
      {/* Instructions */}
      <div style={{ 
        marginTop: '15px', 
        padding: '10px', 
        background: '#f8f9fa', 
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        <strong>How to use:</strong> Use the dropdown above to select your language. 
        Please wait for the translation to complete before switching to another language.
      </div>
      
      {/* Sample content to translate */}
      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Sample Content</h2>
        <p>This is some sample text that will be translated when you change the language. 
           The improved system includes debouncing to prevent rapid switching issues.</p>
        <p>Welcome to our website! We hope you find the information useful and easy to understand.</p>
        <ul>
          <li>Feature 1: Multi-language support</li>
          <li>Feature 2: Improved translation accuracy</li>
          <li>Feature 3: Better user experience</li>
        </ul>
      </div>
    </div>
  )
}

export default App