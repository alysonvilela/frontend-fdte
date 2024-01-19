import { create } from "zustand";
import { Pokemon } from "../interfaces/pokemon";

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
  reset: () => void; // only-for-testing
}

const initialState: State = {
  slots: [null, null, null, null, null, null],
};

export const usePokedexStore = create<State & Actions>()((set, get) => ({
  ...initialState,

  add: (pokemon) => {
    const canAdd = get().slots.filter((i) => !!i).length < 6;
    if (canAdd) {
      set((old) => {
        const nextEmptyIdx = old.slots.findIndex((val) => val === null);
        old.slots[nextEmptyIdx] = {
          ...pokemon,
          captured_at: new Date().toISOString(),
        };

        return {
          slots: [...old.slots],
        };
      });
    }
  },

  edit: (pokemonAppId, data) => {
    set((old) => {
      const pokemonIdx = old.slots.findIndex((i) => i?.app_id === pokemonAppId);

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
    set((old) => {
      const pokemonIdx = old.slots.findIndex((i) => i?.app_id === pokemonAppId);
      old.slots[pokemonIdx] = null;

      return {
        slots: [...old.slots],
      };
    });
  },

  reset: () => {
    set({
      slots: [...initialState.slots],
    });
  },
}));
