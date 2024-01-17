import { Character } from "../../components/Character";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./styled";
import { Modal } from "../../components/Modal";
import { PokemonDetail } from "../../components/PokemonDetail";
import { useMapViewModel } from "./view-model";

const MapPage = () => {
  const { handlers, states } = useMapViewModel();

  return (
    <S.MapWrapper>
      <Sidebar
        onSelectPokemon={handlers.onSelectPokemon}
        onCreate={() => null}
      />
      <Modal.Root>
        <Character
          status={!states.canAdd ? "ERROR" : states.status}
          onMouseEnter={() => handlers.onHover()}
          onClick={() => handlers.onClick()}
          onMouseLeave={() => handlers.onHoverOut()}
        />
        <Modal.Trigger
          ref={states.triggerRef}
          style={{
            display: "none",
          }}
        />
        <Modal.Content>
          <PokemonDetail
            data={states.selectedPokemon ?? states.data}
            onClose={handlers.onCloseModal}
          />
        </Modal.Content>
      </Modal.Root>
    </S.MapWrapper>
  );
};

export default MapPage;
