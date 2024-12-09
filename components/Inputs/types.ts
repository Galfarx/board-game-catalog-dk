export interface CheckboxProps {
    id: string;
    value: string;
    label: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
