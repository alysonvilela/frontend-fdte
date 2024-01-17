export enum EPOKEMON_TYPES {
  BUG,
  DARK,
  DRAGON,
  ELECTRICT,
  FAIRY,
  FIGHTING,
  FIRE,
  FLYING,
  GHOST,
  GRASS,
  GROUND,
  ICE,
  NORMAL,
  POISON,
  PSYCHIC,
  ROCK,
  STEEL,
  WATER,
}

export type IPokemonTypes = keyof typeof EPOKEMON_TYPES;

export type TranslatePokemonTypes<T> = {
  [k in IPokemonTypes]: T;
};

export const PTBR_PokemonTypes: TranslatePokemonTypes<string> = {
  BUG: "Inseto",
  DARK: "Sombrio",
  DRAGON: "Dragão",
  ELECTRICT: "Elétrico",
  FAIRY: "Fada",
  FIGHTING: "Lutador",
  FIRE: "Fogo",
  FLYING: "Voador",
  GHOST: "Fantasma",
  GRASS: "Planta",
  GROUND: "Terrestre",
  ICE: "Gelo",
  NORMAL: "Normal",
  POISON: "Venenoso",
  PSYCHIC: "Psíquico",
  ROCK: "Pedra",
  STEEL: "Aço",
  WATER: "Água",
};
