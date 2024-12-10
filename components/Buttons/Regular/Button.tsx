import { ButtonProps, ButtonType } from "./types";

export default function Button({ type, children, onClick }: ButtonProps) {
  const primaryColor = {
    [ButtonType.Add]: "bg-green-600",
    [ButtonType.Edit]: "bg-sky-600",
    [ButtonType.Delete]: "bg-red-600",
  };
  const hoverColor = {
    [ButtonType.Add]: "hover:bg-green-700",
    [ButtonType.Edit]: "hover:bg-sky-700",
    [ButtonType.Delete]: "hover:bg-red-700",
  };

  return (
    <button
      className={`px-2 py-1 mb-2 rounded-md text-white cursor-pointer ${primaryColor[type]} ${hoverColor[type]} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
