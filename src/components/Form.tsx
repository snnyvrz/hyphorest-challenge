import { motion } from "motion/react";
import { Button } from "./Button";
import { Transportation } from "./Transportation";
import { Diet } from "./Diet";
import { Household } from "./Household";
import { useContext } from "react";
import { HeroContext } from "../App";
import { useFormContext, type SubmitHandler } from "react-hook-form";
import { Country } from "./Country";
import type { schema } from "../schemas/formSchema";
import { z } from "zod";
import { calculate } from "../utils";

export const Form = () => {
  const { dispatch } = useContext(HeroContext);
  const { handleSubmit, reset } = useFormContext<z.infer<typeof schema>>();

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) =>
    dispatch({ type: "SHOW_RESULT", payload: await calculate(data) });

  return (
    <motion.form
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Transportation />
      <Diet />
      <Household />
      <Country />
      <div className="flex justify-center">
        <Button
          type="button"
          variant="ghost"
          label="Cancel"
          onClick={() => {
            dispatch({ type: "SHOW_INITIAL" });
            reset();
          }}
        />
        <Button type="submit" variant="primary" label="Calculate" />
      </div>
    </motion.form>
  );
};
