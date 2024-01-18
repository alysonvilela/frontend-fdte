import { Pokemon } from "../interfaces/pokemon";
import { IPokemonTypes } from "../interfaces/enums/pokemon-types";

export interface MakePokemon {
  poke_id: string;
  app_id: string;
  is_created: boolean;
  name: string;
  pic: string;
  hp: number;
  height: number;
  weight: number;
  types: IPokemonTypes[];
  abilities: string[];
  def: number;
  atk: number;
  special_def: number;
  special_atk: number;
  velocity: number;
}

export const makePokemon = (params: MakePokemon): Pokemon => {
  return {
    name: params.name,
    poke_id: params.poke_id,
    app_id: params.app_id,
    is_created: params.is_created,
    pic: params.pic,
    height: params.height,
    weight: params.weight,
    types: params.types,
    abilities: params.abilities,
    stats: {
      hp: params.hp,
      def: params.def,
      atk: params.atk,
      special_def: params.special_def,
      special_atk: params.special_atk,
      velocity: params.velocity,
    },
    captured_at: null,
  };
};
