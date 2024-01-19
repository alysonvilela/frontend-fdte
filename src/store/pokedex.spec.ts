import { Pokemon } from "../interfaces/pokemon";
import { usePokedexStore } from "./pokedex";
import { act, renderHook } from "../__tests__/utils";

export const POKEMON: Omit<Pokemon, "app_id" | "captured_at"> = {
  name: "mudsdale",
  poke_id: "750",
  is_created: false,
  pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
  height: 25,
  weight: 9200,
  types: ["GROUND"],
  abilities: ["own tempo", "stamina", "inner focus"],
  stats: {
    hp: 100,
    def: 100,
    atk: 125,
    special_def: 85,
    special_atk: 55,
    velocity: 35,
  },
};

const initialState = usePokedexStore.getState();

describe("Pokedex Store", () => {
  beforeEach(() => {
    usePokedexStore.setState({
      slots: [...initialState.slots],
    });
  });

  test("should start empty", () => {
    const { result } = renderHook(() => usePokedexStore());
    expect(result.current.slots).toHaveLength(6);
    expect(result.current.slots).toEqual([null, null, null, null, null, null]);
  });

  test("should add pokemon", () => {
    const { result } = renderHook(() => usePokedexStore());
    act(() => {
      result.current.add({ ...POKEMON, app_id: "X", captured_at: "TIME" });
    });

    expect(result.current.slots).toHaveLength(6);
    expect(result.current.slots).toContainEqual(
      expect.objectContaining(POKEMON)
    );
  });

  test("should not be able to add more than 6 pokemon", () => {
    const { result } = renderHook(() => usePokedexStore());
    act(() => {
      result.current.add({ ...POKEMON, app_id: "A", captured_at: "TIME" });
      result.current.add({ ...POKEMON, app_id: "B", captured_at: "TIME" });
      result.current.add({ ...POKEMON, app_id: "C", captured_at: "TIME" });
      result.current.add({ ...POKEMON, app_id: "D", captured_at: "TIME" });
      result.current.add({ ...POKEMON, app_id: "E", captured_at: "TIME" });
      result.current.add({ ...POKEMON, app_id: "F", captured_at: "TIME" });
    });

    expect(result.current.slots).toHaveLength(6);
    expect(result.current.slots).toContainEqual(
      expect.objectContaining(POKEMON)
    );

    expect(result.current.slots[0]?.app_id).toBe("A");
    expect(result.current.slots[1]?.app_id).toBe("B");
    expect(result.current.slots[2]?.app_id).toBe("C");
    expect(result.current.slots[3]?.app_id).toBe("D");
    expect(result.current.slots[4]?.app_id).toBe("E");
    expect(result.current.slots[5]?.app_id).toBe("F");

    act(() => {
      result.current.add({ ...POKEMON, app_id: "TRY", captured_at: "TIME" });
    });

    expect(result.current.slots).toHaveLength(6);
    expect(result.current.slots.find((i) => i?.app_id === "TRY")).toBeFalsy();
  });

  test("should edit an pokemon", () => {
    const { result } = renderHook(() => usePokedexStore());
    console.log({ res: result.current.slots });

    act(() => {
      result.current.add({ ...POKEMON, app_id: "X", captured_at: "TIME" });
    });

    const filledPokemon = result.current.slots[0];
    expect(filledPokemon).toEqual(
      expect.objectContaining({
        name: POKEMON.name,
      })
    );

    act(() => {
      result.current.edit(String(filledPokemon?.app_id), {
        name: "NEW-POKEMON",
        height: 20,
      });
    });

    const editedPokemon = result.current.slots[0];
    expect(editedPokemon).toEqual(
      expect.objectContaining({
        name: "NEW-POKEMON",
        height: 20,
      })
    );

    expect(result.current.slots).toHaveLength(6);
  });

  test("should delete an pokemon", () => {
    const { result } = renderHook(() => usePokedexStore());

    expect(result.current.slots).toEqual([null, null, null, null, null, null]);

    act(() => {
      result.current.add({ ...POKEMON, app_id: "X", captured_at: "TIME" });
    });

    const filledPokemon = result.current.slots[0];

    act(() => {
      result.current.remove(String(filledPokemon?.app_id));
    });

    expect(result.current.slots).toHaveLength(6);
  });
});
