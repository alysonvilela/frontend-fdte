import { Pokemon } from "../../entities/pokemon";
import { Button } from "../Button";
import Pokeball from "../../assets/images/pokeball.png";
import * as S from "./styles";
import { usePokedexStore } from "../../store/pokedex";
import { Modal } from "../Modal";
import { useRef, useState } from "react";
import { PTBR_PokemonTypes } from "../../interfaces/enums/pokemon-types";
import { PokemonTypesChip } from "../Chip/styles";
import { PokemonStats } from "../Stats";
import CloseIcon from "../../assets/images/close.png";
import EditIcon from "../../assets/images/editIcon.png";
import { InputText } from "../InputText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICreatePokemon, editPokemonSchema } from "./resolvers";

interface PokemonDetailProps {
  data?: Pokemon;
  onClose: () => void;
}

export const PokemonDetail = ({ data, onClose }: PokemonDetailProps) => {
  const [edit, setEdit] = useState(false);
  const isCaptured = !!data?.captured_at;
  const isCreated = !!data?.is_created;

  const {
    register,
    getValues,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ICreatePokemon>({
    values: {
      name: data?.name ?? "",
      abilities: data?.abilities ?? [],
      height: data?.height ?? 0,
      weight: data?.weight ?? 0,
      pic: data?.pic ?? "",
      stats: data?.stats ?? {
        atk: 0,
        def: 0,
        hp: 0,
        special_atk: 0,
        special_def: 0,
        velocity: 0,
      },
      types: data?.types ?? [],
    },
    resolver: zodResolver(editPokemonSchema),
  });

  const values = getValues();

  const closeRef = useRef<HTMLButtonElement | null>(null);
  const add = usePokedexStore((state) => state.add);
  const remove = usePokedexStore((state) => state.remove);
  const update = usePokedexStore((state) => state.edit);

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

  const handleEditPokemon = async () => {
    update(String(data?.app_id), getValues());
    const valid = await trigger();
    if (valid) {
      setEdit(false);
    }
  };

  const handleCancelEdit = () => {
    setEdit(false);
  };

  const onSubmit = handleSubmit((formData) => {
    closeRef.current?.click();
    onClose();
    return console.log(formData);
  });

  return (
    <S.Background onSubmit={onSubmit}>
      <S.Header>
        <Modal.Close asChild>
          <S.CloseButton ref={closeRef} onClick={onClose} type="button">
            <img src={CloseIcon} alt="Close button" />
          </S.CloseButton>
        </Modal.Close>
      </S.Header>
      <S.PictureWrapper>
        <img
          src={values.pic}
          alt={`${values.name} found, this creature can be captured.`}
        />
      </S.PictureWrapper>
      <S.Content>
        <S.TitleWrapper>
          <>
            {edit ? (
              <InputText
                label="nome"
                {...register("name")}
                error={errors?.name}
              />
            ) : (
              <>
                <S.Title>{values.name}</S.Title>
                {isCaptured && (
                  <S.EditButton onClick={() => setEdit(true)} type="button">
                    <img src={EditIcon} alt="Edit button" />
                  </S.EditButton>
                )}
              </>
            )}
          </>
        </S.TitleWrapper>
        <S.Details>
          <S.DetailItem>
            <S.Label>HP</S.Label>
            <S.DetailItemValue>
              {values.stats.hp} / {values.stats.hp}
            </S.DetailItemValue>
          </S.DetailItem>
          <S.DividerVertical />
          <S.DetailItem>
            <S.Label>altura</S.Label>
            <S.DetailItemValue>{values.height} m</S.DetailItemValue>
          </S.DetailItem>
          <S.DividerVertical />
          <S.DetailItem>
            <S.Label>peso</S.Label>
            <S.DetailItemValue>{values.weight}</S.DetailItemValue>
          </S.DetailItem>
        </S.Details>

        <S.Section>
          <S.SubtitleWrapper>
            <S.DividerHorizontal></S.DividerHorizontal>
            <S.Subtitle>TIPO</S.Subtitle>
            <S.DividerHorizontal></S.DividerHorizontal>
          </S.SubtitleWrapper>
          <S.Abilities>
            {values.types.map((i) => {
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
              {values.abilities.reduce((prev, curr) => `${prev}, ${curr}`)}
            </S.Label>
          </S.Abilities>
        </S.Section>
        <S.Section>
          <S.SubtitleWrapper>
            <S.DividerHorizontal></S.DividerHorizontal>
            <S.Subtitle>ESTATÍSTICAS</S.Subtitle>
            <S.DividerHorizontal></S.DividerHorizontal>
          </S.SubtitleWrapper>
          <PokemonStats stats={values.stats} />
          <S.WhiteSpace />
        </S.Section>
      </S.Content>
      <S.SubmitWrapper>
        {isCaptured ? (
          <>
            {isCreated ? (
              <Button
                type="submit"
                text="CRIAR POKEMON"
                onClick={handleRemoveFromPokedex}
                hasShadow
              />
            ) : (
              <>
                {edit && !isCreated ? (
                  <>
                    <Button
                      type="button"
                      text={"SALVAR"}
                      onClick={handleEditPokemon}
                      hasShadow
                    />
                    <Button
                      type="button"
                      text={"CANCELAR"}
                      onClick={handleCancelEdit}
                      hasShadow
                    />
                  </>
                ) : (
                  <Button
                    type="button"
                    text={"LIBERAR POKEMON"}
                    onClick={handleRemoveFromPokedex}
                    hasShadow
                  />
                )}
              </>
            )}
          </>
        ) : (
          <S.Pokedex onClick={handleAddPokemon} type="button">
            <img src={Pokeball} alt="Press here to capture this pokemon" />
          </S.Pokedex>
        )}
      </S.SubmitWrapper>
    </S.Background>
  );
};
