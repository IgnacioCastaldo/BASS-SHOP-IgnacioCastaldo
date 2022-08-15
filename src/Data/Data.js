const itemsData = [
  {
    key: 1,
    name: "Fender",
    price: 1000,
    category: "Jazz Bass",
    img: " https://i.im.ge/2022/08/10/FHBOO6.fender-jazz-bass.jpg",
    stock: 7,
    description: 'El Fender Jazz Bass es uno de los mejores bajos del mundo, seguido de cerca por su hermano, el Fender Precision Bass. Este es el más versátil, dinámico y el que cuenta con el mejor sistema electrónico entre todos los bajos musicales del mundo. No por nada es el bajo de Fender más imitado y elogiado en toda la historia de la empresa.'

  },
  {
    key: 2,
    name: "Fender",
    price: 1000,
    category: "Presicion Bass",
    img: "https://i.im.ge/2022/08/10/FHBsY8.fender-presicion-bass.jpg",
    stock: 6,
    description: ' El Precision bass ofrece un sonido más agresivo, redondo y menos definido que el Fender Jazz Bass,2​ por lo que es un instrumento especialmente apreciado por músicos de rock y estilos afines. Aunque el modelo original fue diseñado y continúa siendo producido por Fender, el término P-bass se usa hoy día como estándar para hacer referencia a cualquier instrumento fabricado según su diseño básico de construcción y electrónica. '
  },
  {
    key: 3,
    name: "Fender",
    price: 700,
    category: "Jazz Master",
    img: "https://i.im.ge/2022/08/10/FHBdo9.fender-jazzmaste-bass.jpg",
    stock: 6,
    description: 'El Fender Jazz Bass es uno de los mejores bajos del mundo, seguido de cerca por su hermano, el Fender Precision Bass. Este es el más versátil, dinámico y el que cuenta con el mejor sistema electrónico entre todos los bajos musicales del mundo.'
  },
  {
    key: 4,
    name: "Squier",
    price: 900,
    category: "Jazz Bass",
    img: "https://i.im.ge/2022/08/10/FHBEZc.squier-jass-bass.jpg",
    stock: 9,
    description: 'Descripción. El Squier Affinity Series Jazz Bass V es una versión de 5 cuerdas del mundialmente famoso Fender Jazz Bass. Tiene el aspecto y el tono que todos conocen y aman, a un precio ultra económico.'
  },
  {
    key: 5,
    name: "Squier",
    price: 900,
    category: "P Bass",
    img: "https://i.im.ge/2022/08/10/FHBbbx.squier-presicion-bass.jpg",
    stock: 10,
    description: 'El Squier Affinity Precision PJ Bass Race Red es un bajo increíblemente versátil que combina la estética clásica, la solidez de las maderas tonales y la suavidad de su ejecución'
  },
  {
    key: 6,
    name: "Ibanez",
    price: 1000,
    category: "Sdgr 405",
    img: "https://i.im.ge/2022/08/10/FHBA10.ibanex-sdgr-405.jpg",
    stock: 5,
    description: 'El SR405EQM es un bonito bajo de 5 cuerdas diseñado para el jugador experimentado. El bajo comienza con un cuerpo de caoba impecablemente acabado cubierto con un hermoso arce acolchado. Otras características incluyen un resistente cuello SR5 de arce/palisandro de 5 piezas'
  },
  {
    key: 7,
    name: "Ibanez",
    price: 900,
    category: "Gio sdgr",
    img: "https://i.im.ge/2022/08/10/FHBCwT.ibanez-gio-sdgr.jpg",
    stock: 6,
    description: 'El Ibanez GSR200 GIO Bass, Transparent Red es el bajo ideal para principiantes e intermedios. Viene equipado con pastillas Dynamix P y J que ofrecen tonos versátiles. El GSR200 también posee un control Phat II EQ, que le permite agregar un poco más de potencia de gama baja a su tono.'
  },
  {
    key: 8,
    name: "Fodera",
    price: 10000,
    category: "Monarch",
    img: "https://i.im.ge/2022/08/10/FHBjhP.fodera-monarch.jpg",
    stock: 10,
    description: 'Cuerpo de una sola pieza de fresno ligero elegido especialmente por su bajo peso. La base de un cuerpo de fresno ligero junto a un mástil atornillado de arce crea una base de trabajo perfeta para lograr un instrumento con un gran ataque y equilibrio perfecto entre graves y agudos.'
  },
  {
    key: 9,
    name: "Fodera",
    price: 5000,
    category: "V W Signature",
    img: "https://i.im.ge/2022/08/10/FHBPAr.fodera-victor-wooten.jpg",
    stock: 9,
    description: 'Since 1984 Victor has trusted his Fodera basses to express his musical voice and with each new instrument, Victor and Fodera continue to explore new sonic possibilities. For his third signature fretted Yin Yang, Victor sought to have an instrument that offered a broader and unique range of tones. Earlier this year Victor visited the shop to demo various possible '
  },
  {
    key: 10,
    name: "Warwick",
    price: 9000,
    category: "Corvette",
    img: "https://i.im.ge/2022/08/10/FHBcGa.warwick-corvette.jpg",
    stock: 6,
    description: 'Máximas posibilidades de sonidos (y todos buenos), en un bajo ligero y fácil de tocar. La configuración especial de pastillas hace que este bajo tenga un sonido absolutamente personal, con un cuerpo tremendo y a la vez un carácter percusivo estupendo.'
  },
  {
    key: 11,
    name: "Warwick",
    price: 9000,
    category: "thumb",
    img: "https://i.im.ge/2022/08/10/FHBRAy.warwick-thumb.jpg",
    stock: 6,
    description: 'En concreto, este Thumb BO es un bajo de 4 cuerdas hecho en madera sólida de caoba con tapa de Caoba burl y mástil de Ovangkol con diapasón de caoba salvaje. Monta 2 pastillas MEC J-Bass activa con tapa negra, puente Warwick 3D de 2 piezas y Just a Nut III de latón'
  },
  {
    key: 12,
    name: "Warwick",
    price: 9000,
    category: "thumb nt",
    img: "https://i.im.ge/2022/08/10/FHBK1z.warwick-thumb-nt.jpg",
    stock: 6,
    description: 'En concreto, este Thumb BO es un bajo de 4 cuerdas hecho en madera sólida en una sola pieza de caoba con tapa de Caoba burl y mástil de Ovangkol con diapasón de caoba salvaje. Monta 2 pastillas MEC J-Bass activa con tapa negra, puente Warwick 3D de 2 piezas y Just a Nut III de latón'
  },

];

export default itemsData;