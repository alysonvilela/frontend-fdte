import { z } from "zod";
import { Pokemon } from "../../entities/pokemon";
import { PokemonTypesArrayEnum } from "../../interfaces/enums/pokemon-types";

export type ICreatePokemon = Omit<
  Pokemon,
  "app_id" | "poke_id" | "is_created" | "captured_at"
>;

export type IEditPokemon = {
  name: string;
};

export type IEditSelfPokemon = ICreatePokemon;

export const editPokemonSchema: z.ZodType<IEditPokemon> = z.object({
  name: z.string().min(3),
});

export const editSelfPokemonSchema: z.ZodType<IEditSelfPokemon> = z.object({
  abilities: z.array(z.string()),
  height: z.number(),
  name: z.string().min(3),
  pic: z.string(),
  weight: z.number(),
  stats: z.object({
    atk: z.number(),
    def: z.number(),
    hp: z.number(),
    special_atk: z.number(),
    special_def: z.number(),
    velocity: z.number(),
  }),
  types: z.array(z.enum(PokemonTypesArrayEnum)),
});

export const createPokemonSchema: z.ZodType<ICreatePokemon> = z.object({
  abilities: z.array(z.string()),
  height: z.number(),
  name: z.string(),
  pic: z.string(),
  weight: z.number(),
  stats: z.object({
    atk: z.number(),
    def: z.number(),
    hp: z.number(),
    special_atk: z.number(),
    special_def: z.number(),
    velocity: z.number(),
  }),
  types: z.array(z.enum(PokemonTypesArrayEnum)),
});
