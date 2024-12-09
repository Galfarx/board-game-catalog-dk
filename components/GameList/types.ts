
 export interface GameListProps {
    id: string;
    name: string;
    releaseYear: number;
    players: { min: number; max?: number };
    publisher: string;
    expansions?: string[];
    baseGame?: string;
    standalone?: boolean;
    type: "BaseGame" | "Expansion";
 }

 export type ListElementProps = Omit<GameListProps, "id">;

 export interface ListElementEntryProps {
    entry: string;
    value: string
 }

 export interface FiltersProps {
   publishers: string[];
   selectedPublishers: string[];
   onPublisherChange: (publishers: string[]) => void;
   selectedTypes: string[];
   onTypeChange: (types: string[]) => void;
 }
