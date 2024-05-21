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

    singleton: {
      introduction: 'The Singleton is a creational design pattern that ensures that a class has only one instance and provides a global point of access to this instance.',
      context: {
        1: 'This <b>design pattern</b> is commonly used to control the <u>creation of an object</u> and ensure that there is only <u>one instance</u> of that object. Thus, it avoids instantiating multiple <u>heavy</u> resource objects.',
        2: 'For example: <em>database connection objects</em>, <em>configuration objects</em>, <em>file management objects</em>, etc.',
      },
      warning: '<b><u>Warning</b></u>: Although the Singleton prevents inadvertently instantiating multiple heavy objects, it is important to note that it does not respect the <u>Single Responsibility Principle</u> and can be difficult to test.',
      advancedTitle: 'Advanced Explanation',
      advanced: {
        1: 'The recurring problem that leads us to use the <b>Singleton</b> is when we need to access an object (often heavy in resources) whose <u>data is shared</u>.<br /><br />The operation of the design pattern is <u>simple</u>: You instantiate an object, then, after a certain time you instantiate it again. Instead of creating this object a second time, you will retrieve the one that already exists.<br /><br />Generally, to avoid any <u>confusion</u>, the constructor and the getter of this object are the same method.'
      }
    }
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

    singleton: {
      introduction: 'Le <b>Singleton</b> est un patron de conception de création qui garantit qu\'une classe n\'a qu\'<u>une seule instance</u> et fournit un <u>point d\'accès global</u> à cette instance.',
      context: {
        1: 'Ce <b>patron de conception</b> est couramment utilisé afin de <u>contrôler la création</u> d\'un objet et de s\'assure qu\'il n\'existe qu\'<u>une seule instance</u> de cet objet.<br />Ainsi cela permet d\'éviter d\'instancier plusieurs fois des objets <u>lourds</u> en ressources.',
        2: 'Par exemple: <em>les objets de connexion à une base de données</em>, <em>les objets de configuration</em>, <em>les objets de gestion de fichiers</em>, etc.',
      },
      warning: '<b><u>Attention</b></u>: Bien que le Singleton permette d\'éviter d\'instancier par inadvertance plusieurs objets lourds, il est important de noter qu\'il ne respecte pas le <u>principe de responsabilité unique</u> (Single Responsibility Principle) et peut être difficile à tester.'  ,
      advancedTitle: 'Explication détaillés', 
      advanced: {
        1: 'Le problème récurent qui nous ammènes à utiliser le <b>Singleton</b> est lorsqu\'on doit accéder à un objet (souvent lourds en ressources) dont les <u>données sont partagées</u>.<br /><br /> Le fonctionnement du patron de conception est <u>simple</u>: Vous instanciez un objet, puis, après un certains vous l\'instanciez une nouvelle fois. Au lieu de créer une deuxième fois cet objet, vous allez récupérer celui qui existe déjà.<br /><br />Généralement, afin d\'éviter toute <u>confusion</u>, le constructeur et le getter de cet objet sont la même méthode.',

      }
    }
  },
}

const defaultLocale = Cookies.get('locale') || 'en'

const i18n = createI18n({
  locale: defaultLocale,
  messages,
})

export default i18n
