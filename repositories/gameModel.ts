export default interface Game {
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
