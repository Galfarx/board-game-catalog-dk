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

 export interface ListElementProps extends GameListProps {};

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
   yearRange: { from: number | null; to: number | null };
   onYearChange: (range: { from: number | null; to: number | null }) => void;
   playerRange: { from: number | null; to: number | null };
   onPlayerChange: (range: { from: number | null; to: number | null }) => void;
   nameFilter: string;
   onNameChange: (name: string) => void;
 }
