interface ButtonProps {
  type: "button" | "submit";
  variant: "primary" | "ghost";
  label: string;
  onClick?: () => void;
}

export const Button = ({ type, variant, label, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={variant === "primary" ? "btn btn-primary" : "btn btn-ghost"}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
