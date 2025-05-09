import { useFormContext } from "react-hook-form";
import { Fieldset } from "./Fieldset";
import { Input } from "./Input";
import { ErrorMsg } from "./ErrorMsg";

export const Household = () => {
  const { register } = useFormContext();

  return (
    <Fieldset legend="Household Energy">
      <Input
        placeholder="Electricity Per Week (kWh)"
        {...register("electricity", { valueAsNumber: true, required: true })}
      />
      <ErrorMsg name="electricity" />
      <Input
        placeholder="Gas Per Week (m3)"
        {...register("gas", { valueAsNumber: true, required: true })}
      />
      <ErrorMsg name="gas" />
      <Input
        placeholder="Persons in House"
        {...register("persons", { valueAsNumber: true, required: true })}
      />
      <ErrorMsg name="persons" />
    </Fieldset>
  );
};
