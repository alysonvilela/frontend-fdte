import { Character } from "../../components/Character";
import { Sidebar } from "../../components/Sidebar";
import { Modal } from "../../components/Modal";
import { PokemonDetailForm } from "./PokemonDetailForm";
import { useMapViewModel } from "./view-model";
import * as S from "./styled";

const MapPage = () => {
  const { handlers, states } = useMapViewModel();

  return (
    <S.MapWrapper>
      <Sidebar
        onSelectPokemon={handlers.onSelectPokemon}
        onCreate={handlers.onCreatePokemon}
        onSearch={handlers.onClick}
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
          <PokemonDetailForm
            data={states.selectedPokemon}
            onClose={() => handlers.onCloseModal()}
          />
        </Modal.Content>
      </Modal.Root>
    </S.MapWrapper>
  );
};

export default MapPage;
