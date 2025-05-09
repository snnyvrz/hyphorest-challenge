export const Range = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <>
      <input
        type="range"
        min={0}
        max="4"
        className="range range-primary"
        step="1"
        {...props}
      />
      <div className="flex justify-between p-2.5 text-xs">
        <span className="-rotate-45">Vegan</span>
        <span className="-rotate-45">Vegetarian</span>
        <span className="-rotate-45">Pescatarian</span>
        <span className="-rotate-45">Omnivore</span>
        <span className="-rotate-45">Meat-heavy</span>
      </div>
    </>
  );
};
