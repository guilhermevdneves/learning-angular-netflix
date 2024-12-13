import { Movie } from "./movie"

export interface PaginatedMoviesResponse {
    "page": number;
    "results": Movie[],
    "total_pages": number,
    "total_results": number
}
