const carsData = [
  {
    title: "Citroen C3",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/citroenc3.webp",
    price: "84 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Manual",
      fuel: "5.5 l/100 km",
      trunk: 305,
    },
    link: "#",
    category: "Personal" // Dodaj kategorię
  },
  {
    title: "Hyundai i30",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/hyundaii30.webp",
    price: "104 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "5.2 l/100 km",
      trunk: 395,
    },
    link: "#",
    category: "Personal" // Dodaj kategorię
  },
  {
    title: "Skoda Octavia",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/skodaOctavia.webp",
    price: "114 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "6.1 l/100 km",
      trunk: 610,
    },
    link: "#",
    category: "Personal" // Dodaj kategorię
  },

  {
    title: "Mercedes GLC",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/mercedesGLC.webp",
    price: "130 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "8.1 l/100 km",
      trunk: 305,
    },
    link: "#",
    category: "Personal" // Dodaj kategorię
  },

  {
    title: "BMW X4",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/BMWX4.webp",
    price: "130 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "7.5 l/100 km",
      trunk: 305,
    },
    link: "#",
    category: "Personal" // Dodaj kategorię
  },

  {
    title: "Land Rover Discovery",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/landRover.webp",
    price: "150 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "11.3 l/100 km",
      trunk: 305,
    },
    link: "#",
    category: "Personal" // Dodaj kategorię
  },

  {
    title: "Mercedes GLC",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/mercedesGLC.webp",
    price: "130 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "8.1 l/100 km",
      trunk: 305,
    },
    link: "#",
    category: "SUV" // Dodaj kategorię
  },

  {
    title: "BMW X4",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/BMWX4.webp",
    price: "130 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "7.5 l/100 km",
      trunk: 305,
    },
    link: "#",
    category: "SUV" // Dodaj kategorię
  },

  {
    title: "Land Rover Discovery",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/landRover.webp",
    price: "150 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "11.3 l/100 km",
      trunk: 305,
    },
    link: "#",
    category: "SUV" // Dodaj kategorię
  },


  {
    title: "Ford Transit",
    //description: "Idealny dla dużej rodziny",
    imgSrc: "/image/fordTransit.webp",
    price: "150 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 9,
      transmission: "Manual",
      fuel: "9.0 l/100 km",
      trunk: 1000,
    },
    link: "#",
    category: "Van"  // Dodaj kategorię
   
  },

  {
    title: "Renault Trafic",
    //description: "Idealny dla dużej rodziny",
    imgSrc: "/image/renault.webp",
    price: "150 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 9,
      transmission: "Manual",
      fuel: "7.2 l/100 km",
      trunk: 1000,
    },
    link: "#",
    category: "Van" // Dodaj kategorię
  }, 

  {
    title: "Mercedes Vito",
    //description: "Idealny dla dużej rodziny",
    imgSrc: "/image/mercedesVito.webp",
    price: "170 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 9,
      transmission: "Automatic",
      fuel: "5.6 l/100 km",
      trunk: 1000,
    },
    link: "#",
    category: "Van" // Dodaj kategorię
  }, 



  {
    title: "Mercedes Sprinter",
    description: "Idealny do przewozu towarów w mieście i na długie trasy",
    imgSrc: "/image/mercedesSprinter.webp",
    price: "150 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 9,
      transmission: "Manual",
      fuel: "8.5 l/100 km",
      trunk: 1000,
    },
    link: "#",
    category: "Delivery"  // Dodaj kategorię
   
  },

  {
    title: "Fiat Ducato",
    description: "Idealny do przewozu towarów w mieście i na długie trasy",
    imgSrc: "/image/fiatDucato2.webp",
    price: "200 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 3,
      transmission: "Manual",
      fuel: "7.1 l/100 km",
      trunk: 1000,
    },
    link: "#",
    category: "Delivery"  // Dodaj kategorię
   
  },

  {
    title: "Fiat Ducato",
    description: "Idealny do przewozu towarów w mieście i na długie trasy",
    imgSrc: "/image/fiatDucato.webp",
    price: "200 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 3,
      transmission: "Manual",
      fuel: "9.3 l/100 km",
      trunk: 1000,
    },
    link: "#",
    category: "Delivery"  // Dodaj kategorię
   
  },

 

  
];

export default carsData;
