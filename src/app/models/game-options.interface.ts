export interface AvaliableOptions {
    advancedOptions: GameOptions;
    classicOptions: GameOptions;
}

export interface GameOptions {
    moves: string[];
    scoreType: string;
}
