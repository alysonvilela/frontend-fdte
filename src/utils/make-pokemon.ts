import { Pokemon } from "../entities/pokemon";

interface MakePokemon {
  is_created: boolean;
  name: string;
  pic: string;
  hp: number;
  height: number;
  weight: number;
  types: string[];
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
  };
};