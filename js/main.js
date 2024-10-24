const porsche = [
  "718 Cayman",
  "718 Spyder",
  "Macan",
  "Panamera",
  "Taycan",
  "Cayenne",
  "911 carrera",
  "911 turbo",
  "911 GT3 RS",
  "718 Boxter",
  "718 Spyder RS",
];
const bmwModels = [
  "BMW 3 Series",
  "BMW 5 Series",
  "BMW 7 Series",
  "BMW X1",
  "BMW X3",
  "BMW X5",
  "BMW X6",
  "BMW i3",
  "BMW i8",
  "BMW M4",
];
const mercedesModels = [
  "Mercedes-Benz A-Class",
  "Mercedes-Benz C-Class",
  "Mercedes-Benz E-Class",
  "Mercedes-Benz S-Class",
  "Mercedes-Benz GLA",
  "Mercedes-Benz GLC",
  "Mercedes-Benz GLE",
  "Mercedes-Benz GLS",
  "Mercedes-Benz AMG GT",
  "Mercedes-Benz EQC",
];
const vwModels = [
  "Volkswagen Golf",
  "Volkswagen Passat",
  "Volkswagen Tiguan",
  "Volkswagen Touareg",
  "Volkswagen Polo",
  "Volkswagen Arteon",
  "Volkswagen ID.4",
  "Volkswagen Jetta",
];
const fiatModels = [
  "Fiat 500",
  "Fiat Panda",
  "Fiat Tipo",
  "Fiat 500X",
  "Fiat 500L",
  "Fiat Ducato",
  "Fiat Doblo",
  "Fiat Fiorino",
];
const lamborghiniModels = [
  "Aventador",
  "Huracan",
  "Urus",
  "Sian",
  "Gallardo",
  "Veneno",
  "Reventon",
  "Murcielago",
  "Diablo",
  "Countach",
];
const hondaModels = [
  "Civic",
  "Accord",
  "CR-V",
  "Pilot",
  "HR-V",
  "Odyssey",
  "Passport",
];
const mitsubishiModels = [
  "Mitsubishi Outlander",
  "Mitsubishi ASX",
  "Mitsubishi Eclipse Cross",
  "Mitsubishi Pajero",
  "Mitsubishi L200",
  "Mitsubishi Lancer",
];
const nissanModels = [
  "Nissan GTR",
  "Nissan X-Trail",
  "Nissan Juke",
  "Nissan Leaf",
  "Nissan Skyline",
];
const suzukiModels = [
  "Suzuki Swift",
  "Suzuki Vitara",
  "Suzuki Jimny",
  "Suzuki SX4",
  "Suzuki Baleno",
  "Suzuki Celerio",
  "Suzuki Ignis",
];
const toyotaModels = [
  "Corolla",
  "Camry",
  "RAV4",
  "Highlander",
  "Land Cruiser",
  "Prius",
  "Supra",
];
const ferrari = [
  "SF90 Stradale",
  "Roma",
  "296",
  "Daytona sp3",
  "Purosangue",
  "12Cilindri",
  "F80",
  "F8",
  "Ferrari 275",
  "F40",
  "F40 Competition",
  "F50",
  "488",
  "599",
  "Enzo",
  "LaFerrari",
];
const italianCars = [...ferrari, ...lamborghiniModels, ...fiatModels];
const germanCars = [...bmwModels, ...mercedesModels, ...porsche, ...vwModels];
const japanCars = [...nissanModels, ...mitsubishiModels, ...suzukiModels];
const koreanCars = [...hondaModels, ...toyotaModels];
const worldCars = [...italianCars, ...germanCars, ...japanCars, ...koreanCars];
const sortedWorldCars = worldCars.sort();
console.log(sortedWorldCars);
