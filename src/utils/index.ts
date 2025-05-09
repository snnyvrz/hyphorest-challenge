import { schema } from "../schemas/formSchema";
import type { Result, TransportationType } from "../types";
import { z } from "zod";

const calcTransportation = (
  transportationType: (typeof TransportationType)[number],
  distance: number
) => {
  let emissionFactor;
  switch (transportationType) {
    case "Gasoline Car":
      emissionFactor = 0.25;
      break;
    case "Electric Car":
      emissionFactor = 0.09;
      break;
    case "Bus":
      emissionFactor = 0.11;
      break;
    case "Train":
      emissionFactor = 0.04;
      break;
    case "Bicycle/Walking":
    default:
      emissionFactor = 0;
  }

  return emissionFactor * distance * 52;
};

const calcDiet = (diet: number) => {
  let emissionFactor;
  switch (diet) {
    case 0:
      emissionFactor = 1500;
      break;
    case 1:
      emissionFactor = 1700;
      break;
    case 2:
      emissionFactor = 1900;
      break;
    case 3:
      emissionFactor = 2500;
      break;
    case 4:
      emissionFactor = 3300;
      break;
    default:
      emissionFactor = 0;
  }

  return emissionFactor;
};

const calcHousehold = (electricity: number, gas: number, persons: number) => {
  const electricityCarbon = electricity * 52 * 0.4;
  const gasCarbon = gas * 52 * 2;
  return (electricityCarbon + gasCarbon) / persons;
};

export const calculate = async ({
  transportationType,
  distance,
  diet,
  electricity,
  gas,
  persons,
  country,
}: z.infer<typeof schema>): Promise<Result> => {
  const transportationRes = calcTransportation(transportationType, distance);
  const dietRes = calcDiet(diet);
  const householdRes = calcHousehold(electricity, gas, persons);

  const response = await fetch("/emission.json");

  const data: {
    Entity: string;
    Code: string;
    Year: number;
    "Annual CO\u2082 emissions (per capita)": string;
  }[] = await response.json();

  const countryData = data.find(
    (entry) => entry.Entity.toLowerCase() === country.toLowerCase()
  );

  const totalEmissions = data.reduce(
    (sum, entry) =>
      sum + parseFloat(entry["Annual CO₂ emissions (per capita)"]) * 1000,
    0
  );
  const average = totalEmissions / data.length;

  return {
    transportation: transportationRes,
    diet: dietRes,
    household: householdRes,
    total: transportationRes + dietRes + householdRes,
    country: countryData
      ? parseFloat(countryData["Annual CO₂ emissions (per capita)"]) * 1000
      : 0,
    global: average,
    countryName: country,
  };
};
