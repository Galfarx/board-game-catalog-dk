export interface ButtonProps {
    type: ButtonType;
    children: React.ReactNode;
}

export enum ButtonType {
    Add,
    Edit,
    Delete
}
