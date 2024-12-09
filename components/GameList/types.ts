export interface ListElementEntryProps {
    entry: string;
    value: string
 }

 export interface ListElementProps {
    name: string;
    releaseYear: number;
    players: { min: number; max?: number };
    publisher: string;
    expansions?: string[];
    baseGame?: string;
    standalone?: boolean;
    type: "BaseGame" | "Expansion";
 }
