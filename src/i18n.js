// src/i18n.js
import { createI18n } from 'vue-i18n'
import Cookies from 'js-cookie'

const messages = {
  en: {
    welcomeMessage: 'Introducing Design Patterns',
    discover: 'Discover and learn more about design patterns in Python.',
    learnMore: 'Learn More',
    patternsIntroduction: 'Discover the different design patterns',
    finish: 'This pattern is still being written',
    pattern: {
      Singleton: {
        name: 'Singleton',
        description: 'Ensure a class only has one instance, and provide a global point of access to it.'
      },
      Factory: {
        name: 'Factory',
        description: 'Provide an interface for creating families of related or dependent objects without specifying their concrete classes.'
      },
    }
  },
  fr: {
    welcomeMessage: 'Présentation des Patrons de conceptions',
    discover: 'Découvrez et apprenez-en plus sur les patrons de conceptions en Python.',
    learnMore: 'En savoir plus',
    patternsIntroduction: 'Découvrez les différents patrons de conceptions',
    finish: 'Ce patron est encore en cours d\'écriture',
    pattern: {
      Singleton: {
        name: 'Singleton',
        description: 'Assurez-vous qu\'une classe n\'a qu\'une seule instance et fournissez un point d\'accès global à celle-ci.'
      },
      Factory: {
        name: 'Factory',
        description: 'Fournit une interface pour créer des familles d\'objets liés ou dépendants sans spécifier leurs classes concrètes.'
      },
    }
  }
}

const defaultLocale = Cookies.get('locale') || 'en'

const i18n = createI18n({
  locale: defaultLocale,
  messages,
})

export default i18n
