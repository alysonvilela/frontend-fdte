/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

// TODO: Type pokemon correctly

interface State {
  slots: [
    null | any,
    null | any,
    null | any,
    null | any,
    null | any,
    null | any
  ];
}

interface Actions {
  add: (pokemon: any) => void;
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
      old.slots[pokemonIdx].name = name;

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
