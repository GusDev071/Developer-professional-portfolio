import type { Project } from "../types"

export const db : Project[] = [
     {
        id: 8,
        name: 'Plataforma de recompensas, Calidad Bueno',
        description: {
            es: 'Plataforma de recompensas, Calidad Bueno es una plataforma para recompensar a los usuarios por sus compras. El proyecto fue desarrollado con Angular v21, TypeScript, CSS y Bootstrap. Con consumo de API-RESTFULL.',            
            en: 'Plataforma de recompensas, Calidad Bueno is a platform to reward users for their purchases. The project was developed with Angular v21, TypeScript, CSS and Bootstrap. It consumes a RESTful API.'
        },
        technologies: ['Angular', 'TypeScript', 'CSS','Bootstrap', 'API-RESTFULL'],
        image: 'Bueno-sitio.png',
        state: {
            es: 'Activo',
            en: 'Active'
        },
        url: 'https://elsabordemexicotellevaalestadio.com'
    },
    {
        id: 1,
        name: 'Guitar-LA JS',
        description: {
            es: 'Guitar-LA JS es una página web para la venta de guitarras y accesorios. El proyecto fue desarrollado con React, JavaScript y TailwindCSS.',
            en: 'Guitar-LA JS is a website for selling guitars and accessories. The project was developed with React, JavaScript and TailwindCSS.'
        },
        technologies: ['React', 'JavaScript', 'TailwindCSS'],
        image: 'image1.png',
        state: {
            es: 'Activo',
            en: 'Active'
        },
        url: 'https://superb-shortbread-7dbd93.netlify.app/'
    },
     {
        id: 2,
        name: 'Guitar-LA TS',
        description: {
            es: 'Guitar-LA TS es una página web para la venta de guitarras y accesorios. Todo el código fue migrado de JavaScript a TypeScript.',
            en: 'Guitar-LA TS is a website for selling guitars and accessories. All code was migrated from JavaScript to TypeScript.'
        },
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        image: 'image1.png',
        state: {
            es: 'Activo',
            en: 'Active'
        },
        url: 'https://silly-smakager-31ee9c.netlify.app/',
    },
     {
        id: 3,
        name: 'Calculadora de propinas y consumo',
        description: {
            es: 'Calculadora de propinas y consumo es una aplicación web que permite calcular la propina y el consumo de una comida en función de la cantidad de productos, hace el calculo con 10%, 20% y 50%,asi mismo se aplica o no en el costo total.',
            en: 'Tip and consumption calculator is a web application that allows calculating the tip and consumption of a meal based on the quantity of products, calculating with 10%, 20% and 50%, also applying it or not to the total cost.'
        },
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        image: 'image3.png',
        state: {
            es: 'Activo',
            en: 'Active'
        },
        url: 'https://zippy-taffy-c3e100.netlify.app/',
    },
     {
        id: 5,
        name: 'Bego proyecto personal tracking y maquetación',
        description: {
            es: 'Proyecto personal para tracking y maquetación de la página web para tracking de camiones y busqueda de parametros, responsiva para dispositivos móviles.',
            en: 'Personal project for tracking and layout of a website for truck tracking and parameter search, responsive for mobile devices.'
        },
        technologies: ['Angular', 'TypeScript', 'Bootstrap'],
        image: 'image5.png',
        state: {
            es: 'Activo',
            en: 'Active'
        },
        url: 'https://benevolent-vacherin-ad1a50.netlify.app/',
    },
     {
        id: 6,
        name: 'Proyecto personal uber de mecanicos',
        description: {
            es: 'Proyecto personal para la creación de una aplicación móvil para la reserva de servicios de Uber de mecánicos.',
            en: 'Personal project for the creation of a mobile application for booking Uber services for mechanics.'
        },
        technologies: ['Android Studio', 'Kotlin', 'PayPal API', 'Firebase', 'Google Maps API', 'Retrofit'],
        image: 'image6.jpg',
        state: {
            es: 'Terminado, no se ha publicado en Play Store.',
            en: 'Finished, not published on Play Store.'
        },
        url: 'https://drive.google.com/file/d/1-EmVEb6_S2RQMMK9-QK_CHbUL0GgzEB9/view?usp=drivesdk',
    },{
        id: 7,
        name: 'Prueba tecnica de trabajo',
        description: {
            es: 'Proyecto para poder hacer consumo de API Restfull creada para una prueba tecnica de trabajo.',
            en: 'Project to test endpoints of an API created for a technical test of work.'
        },
        technologies: ['Angular', 'TypeScript', 'Bootstrap', 'PHP', 'Postman'],
        image: 'image7.png',
        state: {
            es: 'Activo',
            en: 'Active'
        },
        url: 'https://prueba-frontend-b3b8a.web.app/',
    }
]
