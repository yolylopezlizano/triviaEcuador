// ==========================================
// TRIVIA DE ECUADOR 🇪🇨
// ESPAÑOL / ENGLISH
// ==========================================

const QUESTIONS_PER_BLOCK = 5;

let currentQuestionIndex = 0;
let blockScore = 0;
let currentLanguage = "es";

let attempts = 0;

const MAX_ATTEMPTS = 2;


// ==========================================
// PREGUNTAS
// ==========================================

const triviaData = [

    {
        question: {
            es: "¿Cuál es la capital de Ecuador?",
            en: "What is the capital of Ecuador?"
        },

        options: {
            es: ["Guayaquil", "Quito", "Cuenca", "Loja"],
            en: ["Guayaquil", "Quito", "Cuenca", "Loja"]
        },

        correct: 1,

        hint: {
            es: "Es una ciudad ubicada en la región de la Sierra.",
            en: "It is a city located in the Andean region."
        },

        success: {
            es: "¡Correcto! Quito es la capital de Ecuador. 🇪🇨",
            en: "Correct! Quito is the capital of Ecuador. 🇪🇨"
        },

        fail: {
            es: "No es correcto. La capital de Ecuador es Quito.",
            en: "That is not correct. The capital of Ecuador is Quito."
        },

        info: {
            image: "imagenes/quito.jpg",

            title: {
                es: "🏛️ Quito, capital de Ecuador",
                en: "🏛️ Quito, capital of Ecuador"
            },

            fact: {
                es: "💡 Dato curioso: Quito está ubicada en la cordillera de los Andes y su centro histórico es famoso por su arquitectura y patrimonio cultural.",
                en: "💡 Fun fact: Quito is located in the Andes Mountains and its historic center is famous for its architecture and cultural heritage."
            }
        }
    },


    {
        question: {
            es: "¿Cuál es la moneda oficial de Ecuador?",
            en: "What is the official currency of Ecuador?"
        },

        options: {
            es: [
                "Peso ecuatoriano",
                "Sol",
                "Dólar estadounidense",
                "Euro"
            ],

            en: [
                "Ecuadorian peso",
                "Sol",
                "U.S. dollar",
                "Euro"
            ]
        },

        correct: 2,

        hint: {
            es: "Es la misma moneda utilizada oficialmente en Estados Unidos.",
            en: "It is also the official currency of the United States."
        },

        success: {
            es: "¡Muy bien! Ecuador utiliza el dólar estadounidense. 💵",
            en: "Very good! Ecuador uses the U.S. dollar. 💵"
        },

        fail: {
            es: "La respuesta correcta es el dólar estadounidense.",
            en: "The correct answer is the U.S. dollar."
        },

        info: {
            image: "imagenes/dolar.jpg",

            title: {
                es: "💵 El dólar estadounidense",
                en: "💵 The U.S. dollar"
            },

            fact: {
                es: "💡 Dato curioso: Ecuador utiliza el dólar estadounidense como moneda oficial desde el año 2000, tiene monedas propias pero no billetes.",
                en: "💡 Fun fact: Ecuador has used the U.S. dollar as its official currency since 2000, they have their own coins but no dollar bills."
            }
        }
    },


    {
        question: {
            es: "¿Qué famoso archipiélago pertenece a Ecuador?",
            en: "Which famous archipielago belongs to Ecuador?"
        },

        options: {
            es: [
                "Islas Canarias",
                "Islas Galápagos",
                "Islas Malvinas",
                "Islas Azores"
            ],

            en: [
                "Canary Islands",
                "Galápagos Islands",
                "Falkland Islands",
                "Azores"
            ]
        },

        correct: 1,

        hint: {
            es: "Son famosas por sus tortugas gigantes y su biodiversidad.",
            en: "They are famous for giant tortoises and biodiversity."
        },

        success: {
            es: "¡Correcto! Son las Islas Galápagos. 🐢",
            en: "Correct! They are the Galápagos Islands. 🐢"
        },

        fail: {
            es: "La respuesta correcta son las Islas Galápagos.",
            en: "The correct answer is the Galápagos Islands."
        },

        info: {
            image: "imagenes/galapagos.jpg",

            title: {
                es: "🐢 Las Islas Galápagos",
                en: "🐢 The Galápagos Islands"
            },

            fact: {
                es: "💡 Dato curioso: Galápagos es famosa por su enorme biodiversidad y por las especies únicas que ayudaron a inspirar estudios sobre la evolución.",
                en: "💡 Fun fact: The Galápagos Islands are famous for their extraordinary biodiversity and unique species that helped inspire studies of evolution."
            }
        }
    },


    {
        question: {
            es: "¿Cuál es la montaña más alta de Ecuador?",
            en: "What is the highest mountain in Ecuador?"
        },

        options: {
            es: [
                "Cotopaxi",
                "Chimborazo",
                "Pichincha",
                "Tungurahua"
            ],

            en: [
                "Cotopaxi",
                "Chimborazo",
                "Pichincha",
                "Tungurahua"
            ]
        },

        correct: 1,

        hint: {
            es: "Su nombre empieza con 'Chim'.",
            en: "Its name starts with 'Chim'."
        },

        success: {
            es: "¡Excelente! El Chimborazo es la montaña más alta de Ecuador. 🏔️",
            en: "Excellent! Chimborazo is the highest mountain in Ecuador. 🏔️"
        },

        fail: {
            es: "La respuesta correcta es el Chimborazo.",
            en: "The correct answer is Chimborazo."
        },

        info: {
            image: "imagenes/chimborazo.jpg",

            title: {
                es: "🏔️ El Chimborazo",
                en: "🏔️ Chimborazo"
            },

            fact: {
                es: "💡 Dato curioso: el Chimborazo es el punto de la superficie terrestre más alejado del centro de la Tierra debido a la forma ligeramente achatada de nuestro planeta.",
                en: "💡 Fun fact: Chimborazo's summit is the point on Earth's surface farthest from the planet's center because Earth is slightly wider around the equator."
            }
        }
    },


    {
        question: {
            es: "¿Cuáles son las cuatro regiones naturales de Ecuador?",
            en: "What are the four natural regions of Ecuador?"
        },

        options: {
            es: [
                "Costa, Sierra, Amazonía e Insular",
                "Norte, Sur, Este y Oeste",
                "Costa, Selva, Desierto e Isla",
                "Sierra, Valle, Playa y Amazonía"
            ],

            en: [
                "Coast, Andes, Amazon and Insular",
                "North, South, East and West",
                "Coast, Jungle, Desert and Island",
                "Andes, Valley, Beach and Amazon"
            ]
        },

        correct: 0,

        hint: {
            es: "Una de ellas está formada por las Islas Galápagos.",
            en: "One of them includes the Galápagos Islands."
        },

        success: {
            es: "¡Correcto! Ecuador tiene Costa, Sierra, Amazonía e Insular. 🌎",
            en: "Correct! Ecuador has Coast, Andes, Amazon and Insular regions. 🌎"
        },

        fail: {
            es: "La respuesta correcta es Costa, Sierra, Amazonía e Insular.",
            en: "The correct answer is Coast, Andes, Amazon and Insular."
        },

        info: {
            image: "imagenes/regiones.jpg",

            title: {
                es: "🌎 Las cuatro regiones del Ecuador",
                en: "🌎 Ecuador's four regions"
            },

            fact: {
                es: "💡 Dato curioso: Ecuador reúne cuatro regiones geográficas muy diferentes: Costa, Sierra, Amazonía y región Insular.",
                en: "💡 Fun fact: Ecuador has four very different geographic regions: Coast, Andes, Amazon and Insular."
            }
        }
    },


    {
        question: {
            es: "¿Cuál es la ciudad más poblada de Ecuador?",
            en: "What is the most populated city in Ecuador?"
        },

        options: {
            es: ["Quito", "Cuenca", "Guayaquil", "Ambato"],
            en: ["Quito", "Cuenca", "Guayaquil", "Ambato"]
        },

        correct: 2,

        hint: {
            es: "Es una importante ciudad portuaria de la Costa.",
            en: "It is an important port city on the coast."
        },

        success: {
            es: "¡Correcto! Guayaquil es la ciudad más poblada del país. 🌊",
            en: "Correct! Guayaquil is the country's most populated city. 🌊"
        },

        fail: {
            es: "La respuesta correcta es Guayaquil.",
            en: "The correct answer is Guayaquil."
        },

        info: {
            image: "imagenes/guayaquil.jpg",

            title: {
                es: "🌊 Guayaquil",
                en: "🌊 Guayaquil"
            },

            fact: {
                es: "💡 Dato curioso: Guayaquil es una de las principales ciudades portuarias de Ecuador y se encuentra junto al río Guayas.",
                en: "💡 Fun fact: Guayaquil is one of Ecuador's main port cities and is located beside the Guayas River."
            }
        }
    },


    {
        question: {
            es: "¿Qué océano baña las costas de Ecuador?",
            en: "Which ocean borders Ecuador's coast?"
        },

        options: {
            es: [
                "Océano Atlántico",
                "Océano Pacífico",
                "Océano Índico",
                "Océano Ártico"
            ],

            en: [
                "Atlantic Ocean",
                "Pacific Ocean",
                "Indian Ocean",
                "Arctic Ocean"
            ]
        },

        correct: 1,

        hint: {
            es: "Es el océano que se encuentra al oeste de América.",
            en: "It is the ocean located west of the Americas."
        },

        success: {
            es: "¡Muy bien! Ecuador tiene costas en el océano Pacífico. 🌊",
            en: "Very good! Ecuador has a coastline on the Pacific Ocean. 🌊"
        },

        fail: {
            es: "La respuesta correcta es el océano Pacífico.",
            en: "The correct answer is the Pacific Ocean."
        },

        info: {
            image: "imagenes/pacifico.jpg",

            title: {
                es: "🌊 Océano Pacífico",
                en: "🌊 Pacific Ocean"
            },

            fact: {
                es: "💡 Dato curioso: la costa continental de Ecuador se encuentra frente al océano Pacífico.",
                en: "💡 Fun fact: mainland Ecuador's coast faces the Pacific Ocean."
            }
        }
    },


    {
        question: {
            es: "¿Qué animal es especialmente famoso en las Islas Galápagos?",
            en: "Which animal is especially famous in the Galápagos Islands?"
        },

        options: {
            es: [
                "Tortuga gigante",
                "Oso polar",
                "Canguro",
                "Panda"
            ],

            en: [
                "Giant tortoise",
                "Polar bear",
                "Kangaroo",
                "Panda"
            ]
        },

        correct: 0,

        hint: {
            es: "Puede vivir durante muchas décadas y alcanza un gran tamaño.",
            en: "It can live for many decades and grow very large."
        },

        success: {
            es: "¡Correcto! Las tortugas gigantes son uno de los símbolos de Galápagos. 🐢",
            en: "Correct! Giant tortoises are one of the symbols of the Galápagos. 🐢"
        },

        fail: {
            es: "La respuesta correcta es la tortuga gigante.",
            en: "The correct answer is the giant tortoise."
        },

        info: {
            image: "imagenes/tortuga-gigante.jpg",

            title: {
                es: "🐢 Tortuga gigante de Galápagos",
                en: "🐢 Galápagos giant tortoise"
            },

            fact: {
                es: "💡 Dato curioso: las tortugas gigantes de Galápagos pueden vivir durante muchas décadas y algunas alcanzan tamaños enormes.",
                en: "💡 Fun fact: Galápagos giant tortoises can live for many decades and some grow to enormous sizes."
            }
        }
    },


    {
        question: {
            es: "¿Cuál de estos volcanes se encuentra en Ecuador?",
            en: "Which of these volcanoes is located in Ecuador?"
        },

        options: {
            es: ["Cotopaxi", "Etna", "Fuji", "Vesubio"],
            en: ["Cotopaxi", "Etna", "Fuji", "Vesuvius"]
        },

        correct: 0,

        hint: {
            es: "Es uno de los volcanes más conocidos de Ecuador.",
            en: "It is one of Ecuador's best-known volcanoes."
        },

        success: {
            es: "¡Correcto! El Cotopaxi está en Ecuador. 🌋",
            en: "Correct! Cotopaxi is in Ecuador. 🌋"
        },

        fail: {
            es: "La respuesta correcta es el Cotopaxi.",
            en: "The correct answer is Cotopaxi."
        },

        info: {
            image: "imagenes/cotopaxi.jpg",

            title: {
                es: "🌋 Volcán Cotopaxi",
                en: "🌋 Cotopaxi Volcano"
            },

            fact: {
                es: "💡 Dato curioso: el Cotopaxi es uno de los volcanes activos más conocidos de Ecuador y destaca por su forma cónica.",
                en: "💡 Fun fact: Cotopaxi is one of Ecuador's best-known active volcanoes and is famous for its nearly symmetrical cone."
            }
        }
    },


    {
        question: {
            es: "¿Qué ciudad ecuatoriana tiene un centro histórico declarado Patrimonio Cultural de la Humanidad?",
            en: "Which Ecuadorian city has a historic center declared a World Cultural Heritage Site?"
        },

        options: {
            es: ["Quito", "Manta", "Esmeraldas", "Machala"],
            en: ["Quito", "Manta", "Esmeraldas", "Machala"]
        },

        correct: 0,

        hint: {
            es: "Es la capital del país.",
            en: "It is the country's capital."
        },

        success: {
            es: "¡Correcto! El centro histórico de Quito es Patrimonio Cultural de la Humanidad. 🏛️",
            en: "Correct! Quito's historic center is a World Cultural Heritage Site. 🏛️"
        },

        fail: {
            es: "La respuesta correcta es Quito.",
            en: "The correct answer is Quito."
        },

        info: {
            image: "imagenes/centro-historico-quito.jpg",

            title: {
                es: "🏛️ Centro histórico de Quito",
                en: "🏛️ Historic Center of Quito"
            },

            fact: {
                es: "💡 Dato curioso: el centro histórico de Quito es reconocido por la UNESCO como Patrimonio Mundial.",
                en: "💡 Fun fact: Quito's historic center is recognized by UNESCO as a World Heritage site."
            }
        }
    },


    {
        question: {
            es: "¿Qué producto ecuatoriano es famoso mundialmente por su calidad?",
            en: "Which Ecuadorian product is famous worldwide for its quality?"
        },

        options: {
            es: ["Cacao", "Trigo", "Olivas", "Arroz"],
            en: ["Cocoa", "Wheat", "Olives", "Rice"]
        },

        correct: 0,

        hint: {
            es: "Es uno de los ingredientes principales del chocolate.",
            en: "It is one of the main ingredients in chocolate."
        },

        success: {
            es: "¡Correcto! Ecuador es reconocido por su cacao. 🍫",
            en: "Correct! Ecuador is recognized for its cocoa. 🍫"
        },

        fail: {
            es: "La respuesta correcta es el cacao.",
            en: "The correct answer is cocoa."
        },

        info: {
            image: "imagenes/cacao.jpg",

            title: {
                es: "🍫 Cacao ecuatoriano",
                en: "🍫 Ecuadorian cocoa"
            },

            fact: {
                es: "💡 Dato curioso: Ecuador es reconocido internacionalmente por la producción de cacao de aroma.",
                en: "💡 Fun fact: Ecuador is internationally recognized for its fine-flavor cocoa."
            }
        }
    },


    {
        question: {
            es: "¿Cuál es uno de los platos tradicionales más conocidos de Ecuador?",
            en: "Which is one of Ecuador's best-known traditional dishes?"
        },

        options: {
            es: ["Encebollado", "Paella", "Sushi", "Tacos"],
            en: ["Encebollado", "Paella", "Sushi", "Tacos"]
        },

        correct: 0,

        hint: {
            es: "Es una sopa de pescado muy popular, especialmente en la Costa.",
            en: "It is a popular fish soup, especially on the coast."
        },

        success: {
            es: "¡Correcto! El encebollado es un plato tradicional ecuatoriano. 🍲",
            en: "Correct! Encebollado is a traditional Ecuadorian dish. 🍲"
        },

        fail: {
            es: "La respuesta correcta es el encebollado.",
            en: "The correct answer is encebollado."
        },

        info: {
            image: "imagenes/encebollado.jpg",

            title: {
                es: "🍲 Encebollado",
                en: "🍲 Encebollado"
            },

            fact: {
                es: "💡 Dato curioso: el encebollado es una preparación muy popular en Ecuador, especialmente en las ciudades de la Costa.",
                en: "💡 Fun fact: encebollado is a very popular Ecuadorian dish, especially in coastal cities."
            }
        }
    },


    {
        question: {
            es: "¿Qué línea imaginaria atraviesa Ecuador?",
            en: "Which imaginary line crosses Ecuador?"
        },

        options: {
            es: [
                "Trópico de Cáncer",
                "Línea ecuatorial",
                "Círculo Polar Ártico",
                "Trópico de Capricornio"
            ],

            en: [
                "Tropic of Cancer",
                "Equator",
                "Arctic Circle",
                "Tropic of Capricorn"
            ]
        },

        correct: 1,

        hint: {
            es: "Divide la Tierra en hemisferio norte y sur.",
            en: "It divides Earth into the Northern and Southern Hemispheres."
        },

        success: {
            es: "¡Correcto! La línea ecuatorial atraviesa Ecuador. 🌎",
            en: "Correct! The Equator crosses Ecuador. 🌎"
        },

        fail: {
            es: "La respuesta correcta es la línea ecuatorial.",
            en: "The correct answer is the Equator."
        },

        info: {
            image: "imagenes/ecuador.jpg",

            title: {
                es: "🌎 La línea ecuatorial",
                en: "🌎 The Equator"
            },

            fact: {
                es: "💡 Dato curioso: Ecuador recibe su nombre por su ubicación atravesada por la línea del ecuador.",
                en: "💡 Fun fact: Ecuador's name comes from its location along the Equator."
            }
        }
    },


    {
        question: {
            es: "¿Qué región de Ecuador contiene gran parte de la selva amazónica?",
            en: "Which region of Ecuador contains much of the Amazon rainforest?"
        },

        options: {
            es: ["Costa", "Sierra", "Amazonía", "Insular"],
            en: ["Coast", "Andes", "Amazon", "Insular"]
        },

        correct: 2,

        hint: {
            es: "Su nombre está relacionado con el río Amazonas.",
            en: "Its name is related to the Amazon River."
        },

        success: {
            es: "¡Correcto! La región Amazónica ocupa parte del oriente del país. 🌳",
            en: "Correct! The Amazon region covers part of eastern Ecuador. 🌳"
        },

        fail: {
            es: "La respuesta correcta es la Amazonía.",
            en: "The correct answer is the Amazon region."
        },

        info: {
            image: "imagenes/amazonia.jpg",

            title: {
                es: "🌳 Amazonía ecuatoriana",
                en: "🌳 Ecuadorian Amazon"
            },

            fact: {
                es: "💡 Dato curioso: la Amazonía ecuatoriana forma parte de una de las regiones con mayor biodiversidad del planeta.",
                en: "💡 Fun fact: the Ecuadorian Amazon is part of one of the most biodiverse regions on Earth."
            }
        }
    },


    {
        question: {
            es: "¿Cuál de estas ciudades está ubicada en la región Sierra?",
            en: "Which of these cities is located in the Andes region?"
        },

        options: {
            es: ["Quito", "Manta", "Guayaquil", "Salinas"],
            en: ["Quito", "Manta", "Guayaquil", "Salinas"]
        },

        correct: 0,

        hint: {
            es: "Es la capital de Ecuador y está rodeada de montañas.",
            en: "It is Ecuador's capital and is surrounded by mountains."
        },

        success: {
            es: "¡Correcto! Quito está ubicada en la región Sierra. ⛰️",
            en: "Correct! Quito is located in the Andes region. ⛰️"
        },

        fail: {
            es: "La respuesta correcta es Quito.",
            en: "The correct answer is Quito."
        },

        info: {
            image: "imagenes/sierra.jpg",

            title: {
                es: "⛰️ Región Sierra",
                en: "⛰️ Andes Region"
            },

            fact: {
                es: "💡 Dato curioso: la región Sierra está atravesada por la cordillera de los Andes y contiene numerosos volcanes.",
                en: "💡 Fun fact: Ecuador's Andes region is crossed by the Andes mountain range and contains numerous volcanoes."
            }
        }
    },


    {
        question: {
            es: "¿Qué color aparece en la parte superior de la bandera de Ecuador?",
            en: "Which color appears at the top of Ecuador's flag?"
        },

        options: {
            es: ["Azul", "Rojo", "Amarillo", "Verde"],
            en: ["Blue", "Red", "Yellow", "Green"]
        },

        correct: 2,

        hint: {
            es: "Es el color que ocupa la mitad superior de la bandera.",
            en: "It is the color that occupies the upper half of the flag."
        },

        success: {
            es: "¡Correcto! El amarillo ocupa la parte superior de la bandera. 🇪🇨",
            en: "Correct! Yellow occupies the upper part of the flag. 🇪🇨"
        },

        fail: {
            es: "La respuesta correcta es el amarillo.",
            en: "The correct answer is yellow."
        },

        info: {
            image: "imagenes/bandera-ecuador.jpg",

            title: {
                es: "🇪🇨 Bandera del Ecuador",
                en: "🇪🇨 Ecuador's flag"
            },

            fact: {
                es: "💡 Dato curioso: la bandera ecuatoriana tiene tres franjas horizontales de amarillo, azul y rojo.",
                en: "💡 Fun fact: Ecuador's flag has three horizontal stripes in yellow, blue and red."
            }
        }
    },


    {
        question: {
            es: "¿Cuál es la ciudad conocida como la 'Atenas del Ecuador'?",
            en: "Which city is known as the 'Athens of Ecuador'?"
        },

        options: {
            es: ["Cuenca", "Quito", "Guayaquil", "Ibarra"],
            en: ["Cuenca", "Quito", "Guayaquil", "Ibarra"]
        },

        correct: 0,

        hint: {
            es: "Es una ciudad histórica ubicada en la Sierra sur.",
            en: "It is a historic city in the southern Andes."
        },

        success: {
            es: "¡Correcto! Cuenca es conocida como la 'Atenas del Ecuador'. 🏛️",
            en: "Correct! Cuenca is known as the 'Athens of Ecuador'. 🏛️"
        },

        fail: {
            es: "La respuesta correcta es Cuenca.",
            en: "The correct answer is Cuenca."
        },

        info: {
            image: "imagenes/cuenca.jpg",

            title: {
                es: "🏛️ Cuenca",
                en: "🏛️ Cuenca"
            },

            fact: {
                es: "💡 Dato curioso: Cuenca es conocida por su arquitectura histórica y por su tradición cultural y artística.",
                en: "💡 Fun fact: Cuenca is known for its historic architecture and strong cultural and artistic traditions."
            }
        }
    },


    {
        question: {
            es: "¿En qué continente se encuentra Ecuador?",
            en: "On which continent is Ecuador located?"
        },

        options: {
            es: ["Europa", "Asia", "América del Sur", "África"],
            en: ["Europe", "Asia", "South America", "Africa"]
        },

        correct: 2,

        hint: {
            es: "Comparte continente con Colombia, Perú, Chile y Argentina.",
            en: "It shares a continent with Colombia, Peru, Chile and Argentina."
        },

        success: {
            es: "¡Correcto! Ecuador está en América del Sur. 🌎",
            en: "Correct! Ecuador is in South America. 🌎"
        },

        fail: {
            es: "La respuesta correcta es América del Sur.",
            en: "The correct answer is South America."
        },

        info: {
            image: "imagenes/sudamerica.jpg",

            title: {
                es: "🌎 América del Sur",
                en: "🌎 South America"
            },

            fact: {
                es: "💡 Dato curioso: Ecuador está ubicado en la parte noroccidental de América del Sur.",
                en: "💡 Fun fact: Ecuador is located in the northwestern part of South America."
            }
        }
    },


    {
        question: {
            es: "¿Qué instrumento musical es tradicional de la región andina?",
            en: "Which musical instrument is traditional in the Andes?"
        },

        options: {
            es: ["Quena", "Guitarra eléctrica", "Saxofón", "Batería"],
            en: ["Quena", "Electric guitar", "Saxophone", "Drums"]
        },

        correct: 0,

        hint: {
            es: "Es un instrumento de viento tradicional de los Andes.",
            en: "It is a traditional wind instrument from the Andes."
        },

        success: {
            es: "¡Correcto! La quena es un instrumento tradicional andino. 🎵",
            en: "Correct! The quena is a traditional Andean instrument. 🎵"
        },

        fail: {
            es: "La respuesta correcta es la quena.",
            en: "The correct answer is the quena."
        },

        info: {
            image: "imagenes/quena.jpg",

            title: {
                es: "🎵 La quena",
                en: "🎵 The quena"
            },

            fact: {
                es: "💡 Dato curioso: la quena es una flauta tradicional de los Andes y suele fabricarse de madera o caña.",
                en: "💡 Fun fact: the quena is a traditional Andean flute commonly made from wood or cane."
            }
        }
    },


    {
        question: {
            es: "¿Qué animal marino es famoso por su presencia en las Islas Galápagos?",
            en: "Which marine animal is famous for its presence in the Galápagos Islands?"
        },

        options: {
            es: ["Iguana marina", "Oso polar", "Foca ártica", "Morsa"],
            en: ["Marine iguana", "Polar bear", "Arctic seal", "Walrus"]
        },

        correct: 0,

        hint: {
            es: "Es una especie de iguana que puede alimentarse en el mar.",
            en: "It is a species of iguana that can feed in the sea."
        },

        success: {
            es: "¡Correcto! La iguana marina es característica de Galápagos. 🦎",
            en: "Correct! The marine iguana is characteristic of the Galápagos. 🦎"
        },

        fail: {
            es: "La respuesta correcta es la iguana marina.",
            en: "The correct answer is the marine iguana."
        },

        info: {
            image: "imagenes/iguana-marina.jpg",

            title: {
                es: "🦎 Iguana marina",
                en: "🦎 Marine iguana"
            },

            fact: {
                es: "💡 Dato curioso: la iguana marina de Galápagos es conocida por alimentarse de algas marinas y es una especie única del archipiélago.",
                en: "💡 Fun fact: the Galápagos marine iguana feeds on marine algae and is unique to the archipielago."
            }
        }
    }

];


// ==========================================
// INICIAR TRIVIA
// ==========================================

function startQuiz(language) {

    currentLanguage = language;

    currentQuestionIndex = 0;

    blockScore = 0;

    attempts = 0;


    const languageScreen =
        document.getElementById("language-screen");

    if (languageScreen) {
        languageScreen.style.display = "none";
    }


    const languageSelector =
        document.querySelector(".lang-selector");

    if (languageSelector) {
        languageSelector.style.display = "flex";
    }


    document.getElementById("quiz-gameplay").style.display =
        "block";


    document.getElementById("quiz-block-screen").style.display =
        "none";


    document.getElementById("quiz-header").style.display =
        "flex";


    document.getElementById("block-info").style.display =
        "inline";


    document.getElementById("question-info").style.display =
        "inline";


    updateLanguageButtons();

    loadQuestion();
}


// ==========================================
// CAMBIAR IDIOMA
// ==========================================

function changeLanguage(language) {

    currentLanguage = language;

    updateLanguageButtons();

    /*
       Si estamos dentro de una pregunta,
       la volvemos a cargar en el nuevo idioma.
    */

    if (
        document.getElementById("quiz-gameplay").style.display !== "none"
    ) {
        loadQuestion();
    }
}


// ==========================================
// BOTONES DE IDIOMA
// ==========================================

function updateLanguageButtons() {

    const btnEs =
        document.getElementById("btn-es");

    const btnEn =
        document.getElementById("btn-en");

    if (btnEs) {
        btnEs.classList.toggle(
            "active",
            currentLanguage === "es"
        );
    }

    if (btnEn) {
        btnEn.classList.toggle(
            "active",
            currentLanguage === "en"
        );
    }
}


// ==========================================
// ACTUALIZAR INTERFAZ
// ==========================================

function updateInterface() {

    const nextButton =
        document.getElementById("next-button");

    const hintButton =
        document.getElementById("hint-button");

    const homeButton =
        document.getElementById("home-button");

    const continueButton =
        document.getElementById("block-continue-btn");

    const blockHomeButton =
        document.getElementById("block-home-btn");


    if (currentLanguage === "es") {

        nextButton.innerText =
            "Siguiente ➡️";

        hintButton.innerText =
            "💡 Ver Pista";

        homeButton.innerText =
            "🏠 Inicio";

        continueButton.innerText =
            "Continuar al Siguiente Bloque 🚀";

        blockHomeButton.innerText =
            "🏠 Regresar al Inicio";

    } else {

        nextButton.innerText =
            "Next ➡️";

        hintButton.innerText =
            "💡 Show Hint";

        homeButton.innerText =
            "🏠 Home";

        continueButton.innerText =
            "Continue to Next Block 🚀";

        blockHomeButton.innerText =
            "🏠 Back to Home";
    }
}


// ==========================================
// NÚMERO DE BLOQUE
// ==========================================

function getBlockNumber() {

    return Math.floor(
        currentQuestionIndex / QUESTIONS_PER_BLOCK
    ) + 1;
}


// ==========================================
// CARGAR PREGUNTA
// ==========================================

function loadQuestion() {

    attempts = 0;


    const q =
        triviaData[currentQuestionIndex];


    if (!q) {

        showFinalScreen();

        return;
    }


    document.getElementById("quiz-gameplay").style.display =
        "block";


    document.getElementById("quiz-block-screen").style.display =
        "none";


    document.getElementById("quiz-header").style.display =
        "flex";


    // ==========================================
    // BLOQUE
    // ==========================================

    document.getElementById("block-info").innerText =
        currentLanguage === "es"
            ? `Bloque ${getBlockNumber()} de 4`
            : `Block ${getBlockNumber()} of 4`;


    // ==========================================
    // PREGUNTA
    // ==========================================

    document.getElementById("question-info").innerText =
        currentLanguage === "es"
            ? `Pregunta ${(currentQuestionIndex % 5) + 1} de 5`
            : `Question ${(currentQuestionIndex % 5) + 1} of 5`;


    document.getElementById("question-text").innerText =
        q.question[currentLanguage];


    // ==========================================
    // IMAGEN DE LA PREGUNTA
    // ==========================================

    const image =
        document.getElementById("quiz-image");

    /*
       Dejamos la imagen de pregunta oculta.
       La foto aparecerá después de acertar,
       dentro de la tarjeta educativa.
    */

    image.style.display = "none";


    // ==========================================
    // OPCIONES
    // ==========================================

    const optionsContainer =
        document.getElementById("options-container");

    optionsContainer.innerHTML = "";


    q.options[currentLanguage].forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.innerText =
                option;

            button.className =
                "option-btn";


            button.onclick =
                function () {

                    checkAnswer(
                        index,
                        button
                    );

                };


            optionsContainer.appendChild(button);
        }
    );


    // ==========================================
    // FEEDBACK
    // ==========================================

    const feed =
        document.getElementById("feedback");

    feed.innerText = "";

    feed.className =
        "feedback";

    feed.style.display =
        "none";


    // ==========================================
    // TARJETA EDUCATIVA
    // ==========================================

    const correctInfo =
        document.getElementById("correct-info");

    correctInfo.style.display =
        "none";


    document.getElementById("correct-info-image").src =
        "";

    document.getElementById("correct-info-title").innerText =
        "";

    document.getElementById("correct-info-fact").innerText =
        "";


    // ==========================================
    // PISTA
    // ==========================================

    const hintBox =
        document.getElementById("hint-box");

    hintBox.innerText = "";

    hintBox.style.display =
        "none";


    // ==========================================
    // BOTONES
    // ==========================================

    document.getElementById("hint-button").style.display =
        "inline-block";


    document.getElementById("home-button").style.display =
        "inline-block";


    document.getElementById("next-button").style.display =
        "none";


    updateInterface();
}


// ==========================================
// COMPROBAR RESPUESTA
// ==========================================

function checkAnswer(
    selectedIndex,
    clickedBtn
) {

    const q =
        triviaData[currentQuestionIndex];


    const buttons =
        document.querySelectorAll(".option-btn");


    const feed =
        document.getElementById("feedback");


    attempts++;


    // ==========================================
    // RESPUESTA CORRECTA
    // ==========================================

    if (selectedIndex === q.correct) {

        clickedBtn.style.borderColor =
            "#27ae60";

        clickedBtn.style.background =
            "#d5f5e3";


        feed.innerText =
            q.success[currentLanguage];


        feed.className =
            "feedback correct-style";


        feed.style.display =
            "block";


        // ==========================================
        // MOSTRAR TARJETA EDUCATIVA
        // ==========================================

        showCorrectInfo(q);


        // ==========================================
        // SUMAR PUNTO
        // ==========================================

        blockScore++;


        // ==========================================
        // DESACTIVAR OPCIONES
        // ==========================================

        buttons.forEach(
            button => {

                button.disabled = true;

            }
        );


        // ==========================================
        // OCULTAR PISTA
        // ==========================================

        document.getElementById(
            "hint-button"
        ).style.display = "none";


        document.getElementById(
            "hint-box"
        ).style.display = "none";


        // ==========================================
        // MOSTRAR SIGUIENTE
        // ==========================================

        document.getElementById(
            "next-button"
        ).style.display = "inline-block";


        return;
    }


    // ==========================================
    // RESPUESTA INCORRECTA
    // ==========================================

    clickedBtn.style.borderColor =
        "#e74c3c";

    clickedBtn.style.background =
        "#fadbd8";

    clickedBtn.disabled = true;


    // ==========================================
    // PRIMER ERROR
    // ==========================================

    if (attempts < MAX_ATTEMPTS) {

        if (currentLanguage === "es") {

            feed.innerText =
                "❌ No es correcto. ¡Tienes otra oportunidad!";

        } else {

            feed.innerText =
                "❌ Not quite. You have another chance!";
        }


        feed.className =
            "feedback incorrect-style";


        feed.style.display =
            "block";


        return;
    }


    // ==========================================
    // SEGUNDO ERROR
    // ==========================================

    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


    // Mostrar respuesta correcta

    buttons[q.correct].style.borderColor =
        "#27ae60";

    buttons[q.correct].style.background =
        "#d5f5e3";


    if (currentLanguage === "es") {

        feed.innerText =
            `❌ No es correcto. La respuesta era: ${q.options.es[q.correct]}`;

    } else {

        feed.innerText =
            `❌ Incorrect. The answer was: ${q.options.en[q.correct]}`;
    }


    feed.className =
        "feedback incorrect-style";


    feed.style.display =
        "block";


    // ==========================================
    // MOSTRAR INFORMACIÓN TAMBIÉN AL FALLAR
    // ==========================================

    showCorrectInfo(q);


    // ==========================================
    // OCULTAR PISTA
    // ==========================================

    document.getElementById(
        "hint-button"
    ).style.display = "none";


    document.getElementById(
        "hint-box"
    ).style.display = "none";


    // ==========================================
    // MOSTRAR SIGUIENTE
    // ==========================================

    document.getElementById(
        "next-button"
    ).style.display = "inline-block";
}


// ==========================================
// MOSTRAR INFORMACIÓN
// ==========================================

function showCorrectInfo(q) {

    const infoBox =
        document.getElementById("correct-info");


    const infoImage =
        document.getElementById("correct-info-image");


    const infoTitle =
        document.getElementById("correct-info-title");


    const infoFact =
        document.getElementById("correct-info-fact");


    if (!q.info) {

        infoBox.style.display =
            "none";

        return;
    }


    infoImage.src =
        q.info.image;


    infoTitle.innerText =
        q.info.title[currentLanguage];


    infoFact.innerText =
        q.info.fact[currentLanguage];


    infoBox.style.display =
        "block";
}


// ==========================================
// MOSTRAR PISTA
// ==========================================

function showHint() {

    const q =
        triviaData[currentQuestionIndex];


    const hintBox =
        document.getElementById("hint-box");


    hintBox.innerText =
        `💡 ${
            currentLanguage === "es"
                ? "Pista"
                : "Hint"
        }: ${
            q.hint[currentLanguage]
        }`;


    hintBox.style.display =
        "block";
}


// ==========================================
// SIGUIENTE PREGUNTA
// ==========================================

function handleNext() {

    currentQuestionIndex++;


    if (
        currentQuestionIndex %
            QUESTIONS_PER_BLOCK === 0
        &&
        currentQuestionIndex <
            triviaData.length
    ) {

        showBlockScreen();

    } else if (
        currentQuestionIndex <
        triviaData.length
    ) {

        loadQuestion();

    } else {

        showFinalScreen();
    }
}


// ==========================================
// PANTALLA DE BLOQUE
// ==========================================

function showBlockScreen() {

    document.getElementById(
        "quiz-gameplay"
    ).style.display = "none";


    document.getElementById(
        "quiz-block-screen"
    ).style.display = "block";


    document.getElementById(
        "quiz-header"
    ).style.display = "none";


    const completedBlock =
        getBlockNumber() - 1;


    document.getElementById(
        "block-title"
    ).innerText =

        currentLanguage === "es"

            ? `¡Bloque ${completedBlock} Completado! 🇪🇨`

            : `Block ${completedBlock} Completed! 🇪🇨`;


    document.getElementById(
        "block-score"
    ).innerText =

        currentLanguage === "es"

            ? `Puntuación en este bloque: ${blockScore} de 5 aciertos.`

            : `Score in this block: ${blockScore} out of 5 correct answers.`;


    blockScore = 0;


    document.getElementById(
        "block-continue-btn"
    ).style.display = "inline-block";


    document.getElementById(
        "block-home-btn"
    ).style.display = "inline-block";


    updateInterface();
}


// ==========================================
// SIGUIENTE BLOQUE
// ==========================================

function startNextBlock() {

    if (
        currentQuestionIndex <
        triviaData.length
    ) {

        loadQuestion();

    } else {

        showFinalScreen();
    }
}


// ==========================================
// PANTALLA FINAL
// ==========================================

function showFinalScreen() {

    document.getElementById(
        "quiz-gameplay"
    ).style.display = "none";


    document.getElementById(
        "quiz-header"
    ).style.display = "none";


    document.getElementById(
        "quiz-block-screen"
    ).style.display = "block";


    document.getElementById(
        "block-continue-btn"
    ).style.display = "none";


    document.getElementById(
        "block-title"
    ).innerText =

        currentLanguage === "es"

            ? "🏆 ¡Trivia Finalizada! 🏆"

            : "🏆 Trivia Completed! 🏆";


    document.getElementById(
        "block-score"
    ).innerText =

        currentLanguage === "es"

            ? "¡Muchas gracias por participar y conocer más sobre la riqueza de Ecuador! 🇪🇨"

            : "Thank you for participating and learning more about the richness of Ecuador! 🇪🇨";


    document.getElementById(
        "block-home-btn"
    ).innerText =

        currentLanguage === "es"

            ? "🔄 Reiniciar Trivia"

            : "🔄 Restart Trivia";


    document.getElementById(
        "block-home-btn"
    ).onclick =
        resetFullQuiz;


    document.getElementById(
        "block-home-btn"
    ).style.display = "inline-block";
}


// ==========================================
// REINICIAR TRIVIA
// ==========================================

function resetFullQuiz() {

    currentQuestionIndex = 0;

    blockScore = 0;

    attempts = 0;


    document.getElementById(
        "quiz-block-screen"
    ).style.display = "none";


    document.getElementById(
        "quiz-gameplay"
    ).style.display = "block";


    document.getElementById(
        "quiz-header"
    ).style.display = "flex";


    loadQuestion();
}


// ==========================================
// REGRESAR AL INICIO
// ==========================================

function goHome() {

    currentQuestionIndex = 0;

    blockScore = 0;

    attempts = 0;


    document.getElementById(
        "quiz-gameplay"
    ).style.display = "none";


    document.getElementById(
        "quiz-block-screen"
    ).style.display = "none";


    document.getElementById(
        "quiz-header"
    ).style.display = "none";


    document.querySelector(
        ".lang-selector"
    ).style.display = "none";


    document.getElementById(
        "language-screen"
    ).style.display = "flex";
}


// ==========================================
// INICIO
// ==========================================

updateInterface();
