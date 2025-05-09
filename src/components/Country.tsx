import { useFormContext } from "react-hook-form";
import { Datalist } from "./Datalist";
import { Fieldset } from "./Fieldset";
import { ErrorMsg } from "./ErrorMsg";

export const Country = () => {
  const { register } = useFormContext();

  return (
    <Fieldset legend="Country">
      <Datalist {...register("country", { required: true })} />
      <ErrorMsg name="country" />
    </Fieldset>
  );
};
