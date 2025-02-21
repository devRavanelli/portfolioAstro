export const languages = {
    en: { label: "English", flag: "/images/united-kingdom.png" },
    es: { label: "Español", flag: "/images/spain.png" },
  };

export const defaultLang = 'es';

export const ui = {

en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'info.hello': 'Hi there! I am ',
    'info.webDev': 'FULL-STACK WEB DEVELOPER ',
    'info.parrafo': 'Passionate about technology and development, I specialize in creating intuitive and scalable web applications. My goal is to transform ideas into efficient digital solutions, optimizing the user experience through clean and well-structured code.'
},
es:{

    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'info.hello': 'Hola! Soy',
    'info.webDev': 'DESARROLLADOR WEB FULL-STACK ',
    'info.parrafo': 'Apasionado por la tecnología y el desarrollo, me especializo en crear aplicaciones web intuitivas y escalables. Mi objetivo es transformar ideas en soluciones	digitales eficientes, optimizando la experiencia del usuario a través de un código limpio y bien estructurado.',
},

} as const;

export const showDefaultLang = false;