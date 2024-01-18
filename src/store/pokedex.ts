import { create } from "zustand";
import { Pokemon } from "../entities/pokemon";

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
  edit: (pokemonAppId: string, data: Partial<Pokemon>) => void;
  remove: (pokemonAppId: string) => void;
}

const initialState: State = {
  slots: [null, null, null, null, null, null],
};

export const usePokedexStore = create<State & Actions>()((set, get) => ({
  ...initialState,

  add: (pokemon) => {
    const nextEmptyIdx = get().slots.findIndex((val) => val === null);
    set((old) => {
      old.slots[nextEmptyIdx] = {
        ...pokemon,
        captured_at: new Date().toISOString(),
      };

      return {
        slots: [...old.slots],
      };
    });
  },

  edit: (pokemonAppId, data) => {
    const pokemonIdx = get().slots.findIndex((i) => i?.app_id === pokemonAppId);
    set((old) => {
      old.slots[pokemonIdx] = {
        ...old.slots[pokemonIdx],
        ...(data as Pokemon),
      };

      return {
        slots: [...old.slots],
      };
    });
  },

  remove: (pokemonAppId) => {
    const pokemonIdx = get().slots.findIndex((i) => i?.app_id === pokemonAppId);
    set((old) => {
      old.slots[pokemonIdx] = null;

      return {
        slots: [...old.slots],
      };
    });
  },
}));
