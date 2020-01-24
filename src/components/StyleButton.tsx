import * as React from "react";

interface IStyleButtonProps {
  active: boolean;
  label: string;
  style: string;
  onToggle(style: string): void;
}

export const StyleButton: React.FC<IStyleButtonProps> = ({
  active,
  label,
  style,
  onToggle
}) => {
  const _onToggle = () => {
    onToggle(style);
  };

  let className = "RichEditor-styleButton";
  if (active) {
    className += " RichEditor-activeButton";
  }

  return (
    <span className={className} onMouseDown={_onToggle}>
      {label}
    </span>
  );
};

export default StyleButton;
