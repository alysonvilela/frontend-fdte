import { PokeAPI } from "pokeapi-types";
import { Pokemon } from "../../interfaces/pokemon";
import { makePokemon } from "../../utils/make-pokemon";
import { unSlug } from "../../utils/unslug";
import { v4 as uuidv4 } from "uuid";
import { IPokemonTypes } from "../../interfaces/enums/pokemon-types";

export const pokemonApiAdapter = (data: PokeAPI.Pokemon): Pokemon => {
  const stats = data.stats;
  const hp = stats.filter((i) => i.stat.name === "hp")[0];
  const def = stats.filter((i) => i.stat.name === "defense")[0];
  const velocity = stats.filter((i) => i.stat.name === "speed")[0];
  const atk = stats.filter((i) => i.stat.name === "attack")[0];
  const special_atk = stats.filter((i) => i.stat.name === "special-attack")[0];
  const special_def = stats.filter((i) => i.stat.name === "special-defense")[0];
  const abilities = data.abilities.map((i) => unSlug(i.ability.name));
  const types = data.types.map(
    (i) => i.type.name.toUpperCase() as IPokemonTypes
  );

  return makePokemon({
    poke_id: String(data.id),
    app_id: uuidv4(),
    name: data.name,
    is_created: false,
    weight: data.weight,
    height: data.height,
    def: def.base_stat,
    atk: atk.base_stat,
    special_atk: special_atk.base_stat,
    special_def: special_def.base_stat,
    abilities: abilities,
    types,
    hp: hp.base_stat,
    pic: data.sprites.front_default,
    velocity: velocity.base_stat,
  });
};
