export interface Pokemon {
  name: string;
  is_created: boolean;
  pic: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  stats: {
    def: number;
    atk: number;
    special_def: number;
    special_atk: number;
    velocity: number;
    hp: number;
  };
}
