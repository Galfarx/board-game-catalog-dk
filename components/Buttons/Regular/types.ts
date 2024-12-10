export interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  onClick?: () => void; // Add onClick handler
}

export enum ButtonType {
    Add,
    Edit,
    Delete
}
