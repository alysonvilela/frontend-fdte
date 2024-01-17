import { Pokemon } from "../../entities/pokemon";
import { Button } from "../Button";
import Pokeball from "../../assets/images/pokeball.png";
import * as S from "./styles";
import { usePokedexStore } from "../../store/pokedex";
import { Modal } from "../Modal";
import { useRef } from "react";
import { PTBR_PokemonTypes } from "../../interfaces/enums/pokemon-types";
import { PokemonTypesChip } from "../Chip/styles";
import { PokemonStats } from "../Stats";
import CloseIcon from "../../assets/images/close.png";
import { Close } from "@radix-ui/react-dialog";

interface PokemonDetailProps {
  data?: Pokemon;
  onClose: () => void;
}

export const PokemonDetail = ({ data, onClose }: PokemonDetailProps) => {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const add = usePokedexStore((state) => state.add);
  const remove = usePokedexStore((state) => state.remove);

  const handleRemoveFromPokedex = () => {
    remove(String(data?.app_id));
    closeRef.current?.click();
    onClose();
  };

  const handleAddPokemon = () => {
    add(data!);
    closeRef.current?.click();
    onClose();
  };

  return (
    <S.Background>
      <S.Header>
        <Modal.Close asChild>
          <S.CloseButton ref={closeRef} onClick={onClose}>
            <img src={CloseIcon} alt="Close button" />
          </S.CloseButton>
        </Modal.Close>
      </S.Header>
      <S.PictureWrapper>
        <img
          src={data?.pic}
          alt={`${data?.name} found, this creature can be captured.`}
        />
      </S.PictureWrapper>
      <S.Content>
        <S.Title>{data?.name}</S.Title>
        <S.Details>
          <S.DetailItem>
            <S.Label>HP</S.Label>
            <S.DetailItemValue>
              {data?.stats.hp} / {data?.stats.hp}
            </S.DetailItemValue>
          </S.DetailItem>
          <S.DividerVertical />
          <S.DetailItem>
            <S.Label>altura</S.Label>
            <S.DetailItemValue>{data?.height} m</S.DetailItemValue>
          </S.DetailItem>
          <S.DividerVertical />
          <S.DetailItem>
            <S.Label>peso</S.Label>
            <S.DetailItemValue>{data?.weight}</S.DetailItemValue>
          </S.DetailItem>
        </S.Details>

        <S.Section>
          <S.SubtitleWrapper>
            <S.DividerHorizontal></S.DividerHorizontal>
            <S.Subtitle>TIPO</S.Subtitle>
            <S.DividerHorizontal></S.DividerHorizontal>
          </S.SubtitleWrapper>
          <S.Abilities>
            {data?.types.map((i) => {
              return (
                <PokemonTypesChip type={i}>
                  {PTBR_PokemonTypes[i]}
                </PokemonTypesChip>
              );
            })}
          </S.Abilities>
        </S.Section>
        <S.Section>
          <S.SubtitleWrapper>
            <S.DividerHorizontal></S.DividerHorizontal>
            <S.Subtitle>HABILIDADES</S.Subtitle>
            <S.DividerHorizontal></S.DividerHorizontal>
          </S.SubtitleWrapper>
          <S.Abilities>
            <S.Label>
              {data?.abilities.reduce((prev, curr) => `${prev}, ${curr}`)}
            </S.Label>
          </S.Abilities>
        </S.Section>
        <S.Section>
          <S.SubtitleWrapper>
            <S.DividerHorizontal></S.DividerHorizontal>
            <S.Subtitle>ESTATÍSTICAS</S.Subtitle>
            <S.DividerHorizontal></S.DividerHorizontal>
          </S.SubtitleWrapper>
          <PokemonStats stats={data?.stats} />
          <S.WhiteSpace />
        </S.Section>
      </S.Content>
      <S.SubmitWrapper>
        {data?.captured_at ? (
          <Button
            text="LIBERAR POKEMON"
            onClick={handleRemoveFromPokedex}
            hasShadow
          />
        ) : (
          <S.Pokedex onClick={handleAddPokemon}>
            <img src={Pokeball} alt="Press here to capture this pokemon" />
          </S.Pokedex>
        )}
      </S.SubmitWrapper>
    </S.Background>
  );
};
