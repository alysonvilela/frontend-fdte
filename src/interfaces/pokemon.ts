import { IPokemonTypes } from "./enums/pokemon-types";

export type Pokemon = {
  name: string;
  poke_id: string;
  app_id: string;
  is_created: boolean;
  pic: string;
  height: number;
  weight: number;
  types: IPokemonTypes[];
  abilities: string[];
  stats: {
    def: number;
    atk: number;
    special_def: number;
    special_atk: number;
    velocity: number;
    hp: number;
  };
  captured_at: string | null;
};
