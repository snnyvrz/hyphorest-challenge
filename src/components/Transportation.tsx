import { useFormContext } from "react-hook-form";
import { Fieldset } from "./Fieldset";
import { Input } from "./Input";
import { Select } from "./Select";
import { ErrorMsg } from "./ErrorMsg";

export const Transportation = () => {
  const { register } = useFormContext();

  return (
    <Fieldset legend="Transportation">
      <Select {...register("transportationType", { required: true })} />
      <ErrorMsg name="transportationType" />
      <Input
        placeholder="Distance Per Week (km)"
        {...register("distance", { valueAsNumber: true, required: true })}
      />
      <ErrorMsg name="distance" />
    </Fieldset>
  );
};
