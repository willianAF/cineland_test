export interface Movie {
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    release_date: string,
    genres: string[],
    runtime: number,
    type: string
}