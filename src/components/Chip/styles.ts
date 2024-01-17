import styled, { css } from "styled-components";
import { IPokemonTypes } from "../../interfaces/enums/pokemon-types";
interface PokemonTypesChipProps {
  type: IPokemonTypes;
}

export const PokemonTypesChip = styled.span<PokemonTypesChipProps>`
  padding: 8px 16px;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.neutral[100]};

  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.6rem;
  text-transform: uppercase;

  ${({ theme, type }) => {
    return css`
      background: ${theme.colors.type[
        type.toLowerCase() as keyof typeof theme.colors.type
      ]};
    `;
  }}
`;
