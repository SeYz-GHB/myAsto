import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLang: 'en',
    returnObjects : true,
    resources: {
      en: {
        translation: {
          greeting: "hello, welcome!",
          description: {
            line1: "You are watching the tutorial.",
            line2: "This shows how internationalization works."
          }
        },
      },
      ch: {
        translation: {
          greeting: "你好",
          description: {
            line1: "你正在观看教程。",
            line2: "这是一个国际化的示例。"
          }
        }
      },
      kh: {
        translation: {
          greeting: "សូស្ដី",
          description: {
            line1: "អ្នកកំពុងមើលមេរៀន។",
            line2: "នេះគឺជាឧទាហរណ៍នៃការធ្វើអន្តរជាតិកម្ម។"
          }
        }
      }
    }
  })
