export interface IColaborator {
    id?: string;
    name: string;
    image: string;
    role?: string;
    cargo: string;
    favorited?: boolean;
    team?: string;
    date: string;
}