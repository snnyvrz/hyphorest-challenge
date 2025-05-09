import { Countries } from "../types";

export const Datalist = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <>
      <input
        type="text"
        className="input input-primary"
        placeholder="Country"
        list="countries"
        {...props}
      />

      <datalist id="countries">
        {Countries.map((v) => (
          <option key={v} value={v} />
        ))}
      </datalist>
    </>
  );
};
