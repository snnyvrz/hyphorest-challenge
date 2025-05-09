import { z } from "zod";
import { Countries, TransportationType } from "../types";

export const schema = z
  .object({
    transportationType: z.enum(TransportationType, {
      message: "Please select an option",
    }),
    distance: z
      .number({ message: "You should enter a number" })
      .nonnegative({ message: "The number can't be negative" }),
    diet: z.number().min(0).max(4).multipleOf(1),
    electricity: z
      .number({ message: "You should enter a number" })
      .nonnegative({ message: "The number can't be negative" }),
    gas: z
      .number({ message: "You should enter a number" })
      .nonnegative({ message: "The number can't be negative" }),
    persons: z
      .number({ message: "You should enter a number" })
      .positive({ message: "The number should be positive" })
      .multipleOf(1, { message: "The number should be an integer" }),
    country: z.enum(Countries, { message: "Please select an option" }),
  })
  .required();
