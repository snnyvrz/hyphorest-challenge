import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

export const ErrorMsg = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <ErrorMessage
      name={name}
      errors={errors}
      render={({ message }) => <p className="text-error">{message}</p>}
    />
  );
};
