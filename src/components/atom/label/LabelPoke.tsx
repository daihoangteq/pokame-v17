import type { FC } from "react";

type LabelPokeProps = {
  label: {
    name: string;
    color: string;
  };
};

export const LabelPoke: FC<LabelPokeProps> = ({ label }) => {
  return (
    <label
      className={`w-fit block p-2 px-4 rounded-md text-white font-bold border border-[rgba(0,0,0,0.2)]`}
      style={{ backgroundColor: label.color }}
    >
      <span className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">
        {label.name}
      </span>
    </label>
  );
};
