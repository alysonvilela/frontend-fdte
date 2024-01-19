import { MakePokemon, makePokemon } from "../../utils/make-pokemon";

const FLAT_POKEMON: MakePokemon = {
  name: "mudsdale",
  poke_id: "750",
  is_created: false,
  pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
  height: 25,
  weight: 9200,
  types: ["GROUND"],
  abilities: ["own tempo", "stamina", "inner focus"],
  hp: 100,
  def: 100,
  atk: 125,
  special_def: 85,
  special_atk: 55,
  velocity: 35,
  app_id: "APP_ID",
};

describe("Pokemon Adapter", () => {
  test("should adapt ", () => {
    const pokemon = makePokemon(FLAT_POKEMON);
    expect(pokemon.app_id).toBe("APP_ID");
    expect(pokemon.stats.hp).toBe(100);
  });

  test.todo("should pass through a DTO");
  test.todo("should allow only corrent types");
});
