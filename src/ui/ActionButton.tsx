import type { ButtonHTMLAttributes, ReactNode } from "react";

type ActionButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function ActionButton({
  children,
  type = "button",
  ...props
}: ActionButtonProps) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}

export default ActionButton;
