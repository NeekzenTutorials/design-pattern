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
    creationPatterns: 'Creation Patterns',
    structuralPatterns: 'Structural Patterns',
    behavioralPatterns: 'Behavioral Patterns',
    pattern: {
      Singleton: {
        name: 'Singleton',
        description: 'Ensure a class only has one instance, and provide a global point of access to it.'
      },
      Factory: {
        name: 'Factory',
        description: 'Provide an interface for creating families of related or dependent objects without specifying their concrete classes.'
      },
      AbstractFactory: {
        name: 'Abstract Factory',
        description: 'Provide an interface for creating families of related objects without specifying their concrete classes.'
      },
      Builder: {
        name: 'Builder',
        description: 'Separate the construction of a complex object from its representation so that the same construction process can create different representations.'
      },
      Prototype: {
        name: 'Prototype',
        description: 'Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.'
      },
      Adapter: {
        name: 'Adapter',
        description: 'Convert the interface of a class into another interface clients expect.'
      },
      Bridge: {
        name: 'Bridge',
        description: 'Separate an object’s interface from its implementation so that the two can vary independently.'
      },
      Composite: {
        name: 'Composite',
        description: 'Compose objects into tree structures to represent part-whole hierarchies.'
      },
      Decorator: {
        name: 'Decorator',
        description: 'Attach additional responsibilities to an object dynamically.'
      },
      Facade: {
        name: 'Facade',
        description: 'Provide a unified interface to a set of interfaces in a subsystem.'
      },
      Flyweight: {
        name: 'Flyweight',
        description: 'Use sharing to support large numbers of fine-grained objects efficiently.'
      },
      Proxy: {
        name: 'Proxy',
        description: 'Provide a surrogate or placeholder for another object to control access to it.'
      },
      ChainOfResponsibility: {
        name: 'Chain of Responsibility',
        description: 'Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.'
      },
      Command: {
        name: 'Command',
        description: 'Encapsulate a request as an object, thereby letting you parameterize clients with queues, requests, and operations.'
      },
      Interpreter: {
        name: 'Interpreter',
        description: 'Define a grammatical representation for a language and an interpreter to interpret the grammar.'
      },
      Iterator: {
        name: 'Iterator',
        description: 'Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.'
      },
      Mediator: {
        name: 'Mediator',
        description: 'Define an object that encapsulates how a set of objects interact.'
      },
      Memento: {
        name: 'Memento',
        description: 'Capture and externalize an object’s internal state without violating encapsulation, so that the object can be restored to this state later.'
      },
      Observer: {
        name: 'Observer',
        description: 'Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.'
      },
      State: {
        name: 'State',
        description: 'Allow an object to alter its behavior when its internal state changes.'
      },
      Strategy: {
        name: 'Strategy',
        description: 'Define a family of algorithms, encapsulate each one, and make them interchangeable.'
      },
      Template: {
        name: 'Template',
        description: 'Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.'
      },
      Visitor: {
        name: 'Visitor',
        description: 'Represent an operation to be performed on the elements of an object structure.'
      }
    },
    backHome: 'Back to Home',
  },
  fr: {
    welcomeMessage: 'Présentation des Patrons de conceptions',
    discover: 'Découvrez et apprenez-en plus sur les patrons de conceptions en Python.',
    learnMore: 'En savoir plus',
    patternsIntroduction: 'Découvrez les différents patrons de conceptions',
    finish: 'Ce patron est encore en cours d\'écriture',
    creationPatterns: 'Patrons de création',
    structuralPatterns: 'Patrons structurels',
    behavioralPatterns: 'Patrons comportementaux',
    pattern: {
      Singleton: {
        name: 'Singleton',
        description: 'Assurez-vous qu\'une classe n\'a qu\'une seule instance et fournissez un point d\'accès global à celle-ci.'
      },
      Factory: {
        name: 'Factory',
        description: 'Fournit une interface pour créer des familles d\'objets liés ou dépendants sans spécifier leurs classes concrètes.'
      },
      AbstractFactory: {
        name: 'Abstract Factory',
        description: 'Fournit une interface pour créer des familles d\'objets liés sans spécifier leurs classes concrètes.'
      },
      Builder: {
        name: 'Builder',
        description: 'Sépare la construction d\'un objet complexe de sa représentation afin que le même processus de construction puisse créer différentes représentations.'
      },
      Prototype: {
        name: 'Prototype',
        description: 'Spécifie les types d\'objets à créer en utilisant une instance prototype et crée de nouveaux objets en copiant ce prototype.'
      },
      Adapter: {
        name: 'Adapter',
        description: 'Convertit l\'interface d\'une classe en une autre interface attendue par les clients.'
      },
      Bridge: {
        name: 'Bridge',
        description: 'Sépare l\'interface d\'un objet de son implémentation de sorte que les deux puissent varier indépendamment.'
      },
      Composite: {
        name: 'Composite',
        description: 'Compose des objets en structures arborescentes pour représenter des hiérarchies partie-tout.'
      },
      Decorator: {
        name: 'Decorator',
        description: 'Attache dynamiquement des responsabilités supplémentaires à un objet.'
      },
      Facade: {
        name: 'Facade',
        description: 'Fournit une interface unifiée à un ensemble d\'interfaces dans un sous-système.'
      },
      Flyweight: {
        name: 'Flyweight',
        description: 'Utilise le partage pour prendre en charge efficacement un grand nombre d\'objets granulaires.'
      },
      Proxy: {
        name: 'Proxy',
        description: 'Fournit un substitut ou un représentant pour un autre objet pour contrôler l\'accès à celui-ci.'
      },
      ChainOfResponsibility: {
        name: 'Chain of Responsibility',
        description: 'Évite de coupler l\'émetteur d\'une demande à son récepteur en donnant à plus d\'un objet la possibilité de traiter la demande.'
      },
      Command: {
        name: 'Command',
        description: 'Encapsule une requête en tant qu\'objet, permettant de paramétrer les clients avec des files d\'attente, des requêtes et des opérations.'
      },
      Interpreter: {
        name: 'Interpreter',
        description: 'Définit une représentation grammaticale pour un langage et un interprète pour interpréter la grammaire.'
      },
      Iterator: {
        name: 'Iterator',
        description: 'Fournit un moyen d\'accéder séquentiellement aux éléments d\'un objet agrégé sans exposer sa représentation sous-jacente.'
      },
      Mediator: {
        name: 'Mediator',
        description: 'Définit un objet qui encapsule comment un ensemble d\'objets interagit.'
      },
      Memento: {
        name: 'Memento',
        description: 'Capture et externalise l\'état interne d\'un objet sans violer l\'encapsulation, de sorte que l\'objet puisse être restauré à cet état plus tard.'
      },
      Observer: {
        name: 'Observer',
        description: 'Définit une dépendance un-à-plusieurs entre les objets de sorte que lorsque l\'un change d\'état, tous ses dépendants sont notifiés et mis à jour automatiquement.'
      },
      State: {
        name: 'State',
        description: 'Permet à un objet de modifier son comportement lorsque son état interne change.'
      },
      Strategy: {
        name: 'Strategy',
        description: 'Définit une famille d\'algorithmes, encapsule chacun d\'eux, et les rend interchangeables.'
      },
      Template: {
        name: 'Template',
        description: 'Définit le squelette d\'un algorithme dans une opération, en déléguant certaines étapes aux sous-classes.'
      },
      Visitor: {
        name: 'Visitor',
        description: 'Représente une opération à effectuer sur les éléments d\'une structure d\'objets.'
      }
    },
    backHome: 'Retour à l\'accueil',
  },
}

const defaultLocale = Cookies.get('locale') || 'en'

const i18n = createI18n({
  locale: defaultLocale,
  messages,
})

export default i18n
