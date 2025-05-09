import { useFormContext } from "react-hook-form";
import { Fieldset } from "./Fieldset";
import { Range } from "./Range";
import { ErrorMsg } from "./ErrorMsg";

export const Diet = () => {
  const { register } = useFormContext();

  return (
    <Fieldset legend="Diet">
      <Range {...register("diet", { valueAsNumber: true, required: true })} />
      <ErrorMsg name="diet" />
    </Fieldset>
  );
};
