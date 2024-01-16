/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { Pokemon } from "../entities/pokemon";

// TODO: Type pokemon correctly

interface State {
  slots: [
    null | Pokemon,
    null | Pokemon,
    null | Pokemon,
    null | Pokemon,
    null | Pokemon,
    null | Pokemon
  ];
}

interface Actions {
  add: (pokemon: Pokemon) => void;
  edit: (pokemonIdx: number, name: string) => void;
  remove: (pokemonIdx: number) => void;
}

const initialState: State = {
  slots: [null, null, null, null, null, null],
};

export const usePokedexStore = create<State & Actions>()((set, get) => ({
  ...initialState,

  add: (pokemon) => {
    const nextEmptyIdx = get().slots.findIndex((val) => val === null);
    set((old) => {
      old.slots[nextEmptyIdx] = pokemon;

      return {
        slots: [...old.slots],
      };
    });
  },

  edit: (pokemonIdx, name) => {
    set((old) => {
      old.slots[pokemonIdx]!.name = name;

      return {
        slots: [...old.slots],
      };
    });
  },

  remove: (pokemonIdx) => {
    set((old) => {
      old.slots[pokemonIdx] = null;

      return {
        slots: [...old.slots],
      };
    });
  },
}));
