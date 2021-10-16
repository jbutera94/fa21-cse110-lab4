let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (statProperty in statistics) {
  if (statProperty[0] == 'r' || statistics[statProperty] % 2 == 1) {
    console.log(statistics[statProperty]);
  }
}