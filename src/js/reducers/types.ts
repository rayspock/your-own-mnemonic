export interface Seed {
    id: string,
    mnemonic: Array<string>
}

export interface MainState {
    seeds: Array<Seed>
}


