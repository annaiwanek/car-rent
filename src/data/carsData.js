const carsData = [
  {
    title: "Citroen C3",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/citroenc3.webp",
    price: "84 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Personal"],
    specs: { transmission: "manual", brand: "Citroen", model: "C3", year: 2022, engineSize: "1.2L", consumption: "5.5" }
  },
  {
    title: "Hyundai i30",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/hyundaii30.webp",
    price: "104 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Personal"],
    specs: { transmission: "manual", brand: "Hyundai", model: "i30", year: 2022, engineSize: "1.4L", consumption: "6.0" }
  },
  {
    title: "Skoda Octavia",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/skodaOctavia.webp",
    price: "114 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Personal"],
    specs: { transmission: "manual", brand: "Skoda", model: "Octavia", year: 2022, engineSize: "1.5L", consumption: "5.5" }
  },
  {
    title: "Mercedes GLC",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/mercedesGLC.webp",
    price: "130 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["SUV", "Personal"],
    specs: { transmission: "automatic", brand: "Mercedes", model: "GLC", year: 2022, engineSize: "2.0L", consumption: "7.5" }
  },
  {
    title: "BMW X4",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/BMWX4.webp",
    price: "130 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["SUV", "Personal"],
    specs: { transmission: "automatic", brand: "BMW", model: "X4", year: 2022, engineSize: "2.0L", consumption: "8.0" }
  },
  {
    title: "Land Rover Discovery",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/landRover.webp",
    price: "150 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["SUV", "Personal"],
    specs: { transmission: "automatic", brand: "Land Rover", model: "Discovery", year: 2022, engineSize: "2.0L", consumption: "9.0" }
  },

  {
    title: "Ford Transit",
    imgSrc: "/image/fordTransit.webp",
    price: "150 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Van", "Delivery"],
    specs: { transmission: "manual", brand: "Ford", model: "Transit", year: 2022, engineSize: "2.2L", consumption: "10.0" }
  },
  {
    title: "Toyota Proace City Long",
    imgSrc: "/image/toyotaProace.webp",
    price: "140 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Van"],
    specs: { transmission: "automatic", brand: "Toyota", model: "Proace City Long", year: 2022, engineSize: "1.5L", consumption: "7.0" }
  },
  {
    title: "Renault Trafic",
    imgSrc: "/image/renault.webp",
    price: "150 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Van", "Delivery"],
    specs: { transmission: "manual", brand: "Renault", model: "Trafic", year: 2022, engineSize: "1.6L", consumption: "6.5" }
  },
  {
    title: "Mercedes Vito",
    imgSrc: "/image/mercedesVito.webp",
    price: "170 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Delivery"],
    specs: { transmission: "automatic", brand: "Mercedes", model: "Vito", year: 2022, engineSize: "2.0L", consumption: "8.0" }
  },
  {
    title: "Mercedes Sprinter",
    description: "Idealny do przewozu towarów w mieście i na długie trasy",
    imgSrc: "/image/mercedesSprinter.webp",
    price: "150 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Delivery"],
    specs: { transmission: "automatic", brand: "Mercedes", model: "Sprinter", year: 2022, engineSize: "2.2L", consumption: "9.0" }
  },
  {
    title: "Fiat Ducato",
    description: "Idealny do przewozu towarów w mieście i na długie trasy",
    imgSrc: "/image/fiatDucato2.webp",
    price: "200 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Delivery"],
    specs: { transmission: "manual", brand: "Fiat", model: "Ducato", year: 2022, engineSize: "2.3L", consumption: "10.5" }
  },
  {
    title: "Fiat Ducato",
    description: "Idealny do przewozu towarów w mieście i na długie trasy",
    imgSrc: "/image/fiatDucato.webp",
    price: "200 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    link: "#",
    categories: ["Delivery"],
    specs: { transmission: "manual", brand: "Fiat", model: "Ducato", year: 2022, engineSize: "2.3L", consumption: "10.5" }
  }
];

export default carsData;
