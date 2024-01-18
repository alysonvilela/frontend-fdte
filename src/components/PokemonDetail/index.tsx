import { Pokemon } from "../../entities/pokemon";
import { Button } from "../Button";
import Pokeball from "../../assets/images/pokeball.png";
import * as S from "./styles";
import { usePokedexStore } from "../../store/pokedex";
import { Modal } from "../Modal";
import { useRef, useState } from "react";
import {
  EPOKEMON_TYPES,
  IPokemonTypes,
  PTBR_PokemonTypes,
  PokemonTypesArrayEnum,
} from "../../interfaces/enums/pokemon-types";
import { PokemonTypesChip } from "../Chip/styles";
import { PokemonStats, StatsLabel } from "../Stats";
import CloseIcon from "../../assets/images/close.png";
import EditIcon from "../../assets/images/editIcon.png";
import { InputText } from "../InputText";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ICreateOrEditPokemon,
  createOrEditPokemonSchema,
  editPokemonSchema,
} from "./resolvers";
import { Subtitle } from "./subtitle";
import { InputNumber } from "../InputNumber";
import CameraIcon from "../../assets/images/camera.png";
import { Select } from "../Select";
import { v4 } from "uuid";

interface PokemonDetailProps {
  data?: Pokemon;
  onClose: () => void;
}

export const PokemonDetail = ({ data, onClose }: PokemonDetailProps) => {
  const [edit, setEdit] = useState(false);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const add = usePokedexStore((state) => state.add);
  const remove = usePokedexStore((state) => state.remove);
  const update = usePokedexStore((state) => state.edit);

  const isCaptured = !!data?.captured_at;
  const isCreated = !!data?.is_created;
  const isCreatingOrEditting = (edit && isCreated) || !data?.name;
  const [requiredAbility, ...abilities] = data?.abilities ?? [];
  const [requiredType, ...types] = data?.types ?? [];

  const {
    register,
    getValues,
    resetField,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ICreateOrEditPokemon>({
    mode: "all",
    values: {
      requiredAbility: requiredAbility ?? "",
      requiredType: requiredType,
      name: data?.name ?? "",
      abilities: abilities ?? [],
      types: types ?? [],
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
    },
    resolver: zodResolver(
      isCreatingOrEditting ? createOrEditPokemonSchema : editPokemonSchema
    ),
  });

  const values = getValues();

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

  const handleCancelEdit = async () => {
    resetField("name");
    setEdit(false);
  };

  const handleClose = () => {
    onClose();
    reset();
    handleCancelEdit();
  };

  const onSubmit = handleSubmit((formData) => {
    const isCreated = !data?.app_id;

    const { requiredAbility, requiredType, ...rest } = formData;

    if (isCreated) {
      add({
        ...rest,
        captured_at: new Date().toISOString(),
        app_id: v4(),
        poke_id: v4(),
        is_created: true,
        abilities: [requiredAbility, ...rest.abilities!].filter((i) => !!i),
        types: [requiredType, ...rest.types!],
      });
    } else {
      update(String(data?.app_id), formData);
      setEdit(false);
      return;
    }

    closeRef.current?.click();
    onClose();
  });

  return (
    <S.Background onSubmit={onSubmit}>
      <S.Header>
        <Modal.Close asChild>
          <S.CloseButton ref={closeRef} onClick={handleClose} type="button">
            <img src={CloseIcon} alt="Close button" />
          </S.CloseButton>
        </Modal.Close>
      </S.Header>
      <S.PictureWrapper>
        {values.pic || data?.pic ? (
          <img
            src={values.pic ?? data?.pic}
            alt={`${values.name} found, this creature can be captured.`}
          />
        ) : (
          <img src={CameraIcon} alt={`Add a picture.`} className="empty" />
        )}
      </S.PictureWrapper>
      <S.Content>
        <S.TitleWrapper>
          {!edit && !isCreatingOrEditting && <S.Title>{values.name}</S.Title>}
          {isCaptured && !edit && (
            <S.EditButton onClick={() => setEdit(true)} type="button">
              <img src={EditIcon} alt="Edit button" />
            </S.EditButton>
          )}

          {isCaptured && !isCreated && edit && (
            <InputText label="nome" {...register("name")} error={errors.name} />
          )}
        </S.TitleWrapper>
        {isCreatingOrEditting ? (
          <>
            <InputText
              label="URL da imagem"
              {...register("pic")}
              error={errors?.pic}
            />
            <InputText
              label="nome"
              {...register("name")}
              error={errors?.name}
            />
            <InputNumber
              label={"HP"}
              {...register("stats.hp")}
              error={errors?.stats?.hp}
            />
            <InputNumber
              label={"Peso"}
              suffix="Kg"
              {...register("weight")}
              error={errors?.weight}
            />
            <InputNumber
              label={"altura"}
              suffix="m"
              {...register("height")}
              error={errors?.height}
            />
            <S.Section>
              <Subtitle text="Tipo" />
              <Select
                placeholder="Selecione os tipos"
                options={PokemonTypesArrayEnum.map((i) => ({
                  value: i,
                  text: PTBR_PokemonTypes[i],
                }))}
                error={errors?.requiredType}
                {...register("requiredType")}
              />
              <Select
                placeholder="Selecione os tipos"
                options={PokemonTypesArrayEnum.map((i) => ({
                  value: i,
                  text: PTBR_PokemonTypes[i],
                }))}
                error={errors?.types?.[0]}
                {...register("types.0")}
              />
            </S.Section>
            <S.Section>
              <Subtitle text="HABILIDADES" />

              <InputText
                placeholder="Habilidade 1"
                {...register("requiredAbility")}
                error={errors?.requiredAbility}
              />
              <InputText
                placeholder="Habilidade 2"
                {...register(`abilities.${0}`)}
                error={errors?.abilities?.[0]}
              />
              <InputText
                placeholder="Habilidade 3"
                {...register(`abilities.${1}`)}
                error={errors?.abilities?.[1]}
              />
              <InputText
                placeholder="Habilidade 4"
                {...register(`abilities.${2}`)}
                error={errors?.abilities?.[2]}
              />
            </S.Section>
            <S.Section>
              <Subtitle text="ESTATÍSTICAS" />
              <InputNumber
                label={<StatsLabel text="defesa" type="defense" />}
                {...register("stats.def")}
                error={errors?.stats?.def}
              />
              <InputNumber
                label={<StatsLabel text="ataque" type="attack" />}
                {...register("stats.atk")}
                error={errors?.stats?.atk}
              />
              <InputNumber
                label={<StatsLabel text="defesa especial" type="defense" />}
                {...register("stats.special_def")}
                error={errors?.stats?.special_def}
              />
              <InputNumber
                label={<StatsLabel text="ataque especial" type="attack" />}
                {...register("stats.special_atk")}
                error={errors?.stats?.special_atk}
              />
              <InputNumber
                label={<StatsLabel text="velocidade" type="speed" />}
                {...register("stats.velocity")}
                error={errors?.stats?.velocity}
              />
              <S.WhiteSpace />
            </S.Section>
          </>
        ) : (
          <>
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
                <S.DetailItemValue>{values.weight} kg</S.DetailItemValue>
              </S.DetailItem>
            </S.Details>
            <S.Section>
              <Subtitle text="TIPO" />
              <S.Abilities>
                {[requiredType, ...values.types!].map((i) => {
                  return (
                    <PokemonTypesChip type={i}>
                      {PTBR_PokemonTypes[i]}
                    </PokemonTypesChip>
                  );
                })}
              </S.Abilities>
            </S.Section>
            {[requiredAbility, ...values.abilities!].length > 0 && (
              <S.Section>
                <Subtitle text="HABILIDADES" />
                <S.Abilities>
                  <S.Label>
                    {[requiredAbility, ...values.abilities!].reduce(
                      (prev, curr) => `${prev}, ${curr}`
                    )}
                  </S.Label>
                </S.Abilities>
              </S.Section>
            )}
            <S.Section>
              <Subtitle text="ESTATÍSTICAS" />
              <PokemonStats stats={values.stats} />
              <S.WhiteSpace />
            </S.Section>
          </>
        )}
      </S.Content>
      <S.SubmitWrapper>
        {!edit && isCreatingOrEditting && (
          <Button
            type="submit"
            text="CRIAR POKEMON"
            hasShadow
            disabled={isDirty && !errors}
          />
        )}
        {edit && (
          <>
            <Button type="submit" text={"SALVAR"} hasShadow />
            <Button
              type="button"
              text={"CANCELAR"}
              onClick={handleCancelEdit}
              hasShadow
            />
          </>
        )}
        {isCaptured && !edit && (
          <Button
            type="button"
            text={"LIBERAR POKEMON"}
            onClick={handleRemoveFromPokedex}
            hasShadow
          />
        )}
        {!isCaptured && !isCreatingOrEditting && (
          <S.Pokedex onClick={handleAddPokemon} type="button">
            <img src={Pokeball} alt="Press here to capture this pokemon" />
          </S.Pokedex>
        )}
      </S.SubmitWrapper>
    </S.Background>
  );
};
