import { type ComponentType } from "react";

interface Props {
  word: string[];
  lenWord: number;
  Component: ComponentType<{ character: string }>;
  componentProps?: Record<string, unknown>;
}
export const Word = ({ word, componentProps, Component, lenWord }: Props) => {
  return (
    <div className="flex gap-1">
      {Array(lenWord)
        .fill(0)
        .map((_, idx) => (
          <Component
            key={`char-${idx}`}
            character={word[idx]}
            {...componentProps}
          />
        ))}
    </div>
  );
};
