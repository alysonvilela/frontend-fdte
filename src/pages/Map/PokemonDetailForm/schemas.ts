import { z } from "zod";
import { Pokemon } from "../../../entities/pokemon";
import {
  IPokemonTypes,
  PokemonTypesArrayEnum,
} from "../../../interfaces/enums/pokemon-types";

export type ICreateOrEditPokemon = Omit<
  Pokemon,
  "app_id" | "poke_id" | "is_created" | "captured_at" | "types" | "abilities"
> & {
  requiredAbility: string;
  requiredType: Pokemon["types"][0];
  types?: (IPokemonTypes | "")[];
  abilities?: Pokemon["abilities"];
};

export type IEditPokemon = {
  name: string;
};

export const editPokemonSchema: z.ZodType<IEditPokemon> = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
});

export const createOrEditPokemonSchema: z.ZodType<ICreateOrEditPokemon> =
  z.object({
    requiredAbility: z.string().min(10, "Ability must be phrase."),
    requiredType: z.enum(PokemonTypesArrayEnum, {
      errorMap: () => {
        return { message: "Please select an pokemon type." };
      },
    }),
    abilities: z.array(z.string()).min(0),
    types: z.array(z.enum([...PokemonTypesArrayEnum, ""])).optional(),
    height: z.coerce
      .number()
      .nonnegative("Only positive numbers")
      .min(1, { message: "Height must be at least 1." }),
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long." }),
    pic: z
      .string()
      .min(1, "Insert a picture URL")
      .refine((filename) => /\.(jpg|png)$/i.test(filename), {
        message: "Invalid image url.",
      }),
    weight: z.coerce
      .number()
      .nonnegative("Only positive numbers")
      .min(1, { message: "Weight must be at least 1." }),
    stats: z.object({
      atk: z.coerce
        .number()
        .nonnegative("Only positive numbers")
        .min(1, { message: "Attack must be at least 1." }),
      def: z.coerce
        .number()
        .nonnegative("Only positive numbers")
        .min(1, { message: "Defense must be at least 1." }),
      hp: z.coerce
        .number()
        .nonnegative("Only positive numbers")
        .min(1, { message: "HP must be at least 1." }),
      special_atk: z.coerce
        .number()
        .nonnegative("Only positive numbers")
        .min(1, { message: "Special Attack must be at least 1." }),
      special_def: z.coerce
        .number()
        .nonnegative("Only positive numbers")
        .min(1, { message: "Special Defense must be at least 1." }),
      velocity: z.coerce
        .number()
        .nonnegative("Only positive numbers")
        .min(1, { message: "Velocity must be at least 1." }),
    }),
  });
