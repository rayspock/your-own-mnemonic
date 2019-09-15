export interface Seed {
    id: string;
    mnemonic: Array<string>;
}

export interface Telegram {
    variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
    message: string;
    show: boolean;
}

export interface MainState {
    seeds: Array<Seed>;
    telegram?: Telegram;
}


