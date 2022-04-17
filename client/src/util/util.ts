export const getCookie = (key: string) => {
  const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};

export const currencyFormat = (amount: number) => {
  return "$" + (amount / 100).toFixed(2);
};

export const calculateShipping = (weight = 1, days = 5) => {
  let costPerOunce;
  let shippingCostMultiplier;
  let currDate = new Date();
  let ms = currDate.getTime();
  let singleDayInMs = 24 * 60 * 60 * 1000;
  let shippingTimeMs = ms;
  let arrivingDate;
  let shippingCost;
  let weightInOunces = weight * 16;

  if (days === 3) {
    shippingCostMultiplier = 1.5;
  } else if (days === 2) {
    shippingCostMultiplier = 2;
  } else {
    shippingCostMultiplier = 1;
  }

  if (weightInOunces < 20) {
    costPerOunce = 2 * shippingCostMultiplier;
  } else if (weightInOunces > 32) {
    costPerOunce = 20 * shippingCostMultiplier;
  } else {
    costPerOunce = 10 * shippingCostMultiplier;
  }

  shippingCost = (costPerOunce * weightInOunces);

  if (currDate.getDay() === 0) {
    shippingTimeMs += singleDayInMs;
  }

  if (days === 5) {
    shippingTimeMs += 5 * singleDayInMs;
  } else if (days === 3) {
    shippingTimeMs += 3 * singleDayInMs;
  } else if (days === 2) {
    shippingTimeMs += 2 * singleDayInMs;
  } else {
    shippingTimeMs = 30 * singleDayInMs;
  }

  let prelim_date = new Date(shippingTimeMs);
  if (prelim_date.getDay() === 0) {
    shippingTimeMs += singleDayInMs;
  }

  arrivingDate = new Date(shippingTimeMs);

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let formattedCurrDateString =
    "" +
    monthNames[currDate.getMonth()] +
    " " +
    currDate.getDate() +
    ", " +
    currDate.getFullYear();
  let formattedArrivingDateString =
    "" +
    monthNames[arrivingDate.getMonth()] +
    " " +
    arrivingDate.getDate() +
    ", " +
    arrivingDate.getFullYear();

  return {
    weightOzs: weightInOunces,
    weightLbs: weight,
    shippingSpeed: days,
    departureDate: formattedCurrDateString,
    arrivingDate: formattedArrivingDateString,
    shippingCost: shippingCost,
  };
};
