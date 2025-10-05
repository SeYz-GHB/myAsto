export class GoogleTranslateService {
  static initGoogleTranslate(onReady) {
    if (document.getElementById('google-translate-script')) {
      return;
    }

    // Add minimal hide styles (don't break functionality)
    this.addHideStyles();

    // Add Google Translate script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    window.googleTranslateElementInit = function() {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'km,en,th,vi,zh,ja,ko,fr,es,de,it,pt,ar',
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
        }, 'google_translate_element');
        
        setTimeout(() => {
          onReady(true);
          console.log('Google Translate loaded successfully');
        }, 1000);
      }
    };

    document.body.appendChild(script);
  }

  static addHideStyles() {
    if (document.getElementById('google-translate-hider')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'google-translate-hider';

    document.head.appendChild(style);
  }

  static translatePage(targetLanguage) {
    // Only use Google Translate widget - no manual fallback
    const selectElement = document.querySelector('.goog-te-combo');
    
    if (selectElement) {
      console.log('Translating to:', targetLanguage);
      selectElement.value = targetLanguage;
      selectElement.dispatchEvent(new Event('change'));
      return true;
    }
    
    console.warn('Google Translate widget not found');
    return false;
  }
}