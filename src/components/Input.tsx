export const Input = ({
  placeholder,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-primary"
      {...props}
    />
  );
};
