import * as S from "./styled";
import PokemonLogo from "../../assets/images/pokemonLogo.png";
import { Button } from "../../components/Button";

import { useHomeViewModel } from "./view-model";

const HomePage = () => {
  const { handleStart } = useHomeViewModel();

  return (
    <S.HomeWrapper>
      <img src={PokemonLogo} alt="App logo with Pokemon written" />
      <Button text="START" onClick={handleStart} hasShadow />
    </S.HomeWrapper>
  );
};

export default HomePage;
