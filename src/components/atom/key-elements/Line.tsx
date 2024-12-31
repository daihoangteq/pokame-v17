import type { ComponentType, ReactNode } from "react";

import { KEYBOARD_ROWS } from "@src/constants/KEYBOARD";

const LineWrapper = ({ children }: { children: ReactNode }) => {
  return <ul className="flex gap-3">{children}</ul>;
};
interface Props {
  rowName: keyof typeof KEYBOARD_ROWS;
  Component: ComponentType<{ keyName: string }>;
  componentProps?: Record<string, unknown>;
  children?: ReactNode;
}

export const Line = ({
  rowName,
  componentProps,
  Component,
  children,
}: Props) => {
  const rows = KEYBOARD_ROWS[rowName];

  return (
    <LineWrapper>
      {rows.map((keyName, index) => (
        <Component key={index} keyName={keyName} {...componentProps} />
      ))}
      {children}
    </LineWrapper>
  );
};
