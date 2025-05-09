import { TransportationType } from "../types";

export const Select = (
  props: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
) => {
  return (
    <select
      defaultValue="Pick a Transportation"
      className="select select-primary"
      {...props}
    >
      <option disabled={true}>Pick a Transportation</option>
      {TransportationType.map((v) => (
        <option key={v}>{v}</option>
      ))}
    </select>
  );
};
