import type { PropsWithChildren } from "react";

export const Fieldset = ({
  legend,
  children,
}: PropsWithChildren<{ legend: string }>) => {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">{legend}</legend>
      {children}
    </fieldset>
  );
};
