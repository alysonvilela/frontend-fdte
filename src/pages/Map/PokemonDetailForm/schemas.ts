import { z } from "zod";
import { Pokemon } from "../../../interfaces/pokemon";
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
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
});

export const createOrEditPokemonSchema: z.ZodType<ICreateOrEditPokemon> =
  z.object({
    requiredAbility: z.string().min(10, "A habilidade deve ser uma frase."),
    requiredType: z.enum(PokemonTypesArrayEnum, {
      errorMap: () => {
        return { message: "Por favor, selecione um tipo de pokémon." };
      },
    }),
    abilities: z.array(z.string()).min(0),
    types: z.array(z.enum([...PokemonTypesArrayEnum, ""])).optional(),
    height: z.coerce
      .number()
      .nonnegative("Apenas números positivos")
      .min(1, { message: "A altura deve ser pelo menos 1." }),
    name: z
      .string()
      .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
    pic: z
      .string()
      .min(1, "Insira um URL de imagem")
      .refine((filename) => /\.(jpg|png)$/i.test(filename), {
        message: "URL de imagem inválido.",
      }),
    weight: z.coerce
      .number()
      .nonnegative("Apenas números positivos")
      .min(1, { message: "O peso deve ser pelo menos 1." }),
    stats: z.object({
      atk: z.coerce
        .number()
        .nonnegative("Apenas números positivos")
        .min(1, { message: "O ataque deve ser pelo menos 1." }),
      def: z.coerce
        .number()
        .nonnegative("Apenas números positivos")
        .min(1, { message: "A defesa deve ser pelo menos 1." }),
      hp: z.coerce
        .number()
        .nonnegative("Apenas números positivos")
        .min(1, { message: "O HP deve ser pelo menos 1." }),
      special_atk: z.coerce
        .number()
        .nonnegative("Apenas números positivos")
        .min(1, { message: "O Ataque Especial deve ser pelo menos 1." }),
      special_def: z.coerce
        .number()
        .nonnegative("Apenas números positivos")
        .min(1, { message: "A Defesa Especial deve ser pelo menos 1." }),
      velocity: z.coerce
        .number()
        .nonnegative("Apenas números positivos")
        .min(1, { message: "A Velocidade deve ser pelo menos 1." }),
    }),
  });
