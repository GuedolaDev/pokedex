export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonModel[];
}

export interface PokemonModel {
  id: number;
  name: string;
  types: string[];
  imageUrl: string;
}