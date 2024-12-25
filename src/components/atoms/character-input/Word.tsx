import { type ComponentType } from "react";

interface Props {
  word: string;
  Component: ComponentType<{ character: string }>;
  componentProps?: Record<string, unknown>;
}
export const Word = ({ word, componentProps, Component }: Props) => {
  return (
    <div className="flex gap-1">
      {word.split("").map((char, idx) => (
        <Component key={`char-${idx}`} character={char} {...componentProps} />
      ))}
    </div>
  );
};
