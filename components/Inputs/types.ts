export interface CheckboxProps {
    id: string;
    value: string;
    label: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RangeProps {
    fromValue: number | null;
    toValue: number | null;
    onFromChange: (value: number | null) => void;
    onToChange: (value: number | null) => void;
  }

  export interface SearchProps {
    value: string;
    onChange: (value: string) => void;
  }
