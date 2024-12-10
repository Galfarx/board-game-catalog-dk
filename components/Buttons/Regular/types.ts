interface ButtonProps {
    type: ButtonType;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  }

export enum ButtonType {
    Add,
    Edit,
    Delete
}
