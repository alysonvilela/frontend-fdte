import { css } from "styled-components";

export const colors = {
  primary: {
    default: 'var(--color-primary-default)',
    dark: 'var(--color-primary-dark)',
    transparent: 'var(--color-primary-transparent)',
  },
  auction: {
    default: 'var(--color-auction-default)',
    dark: 'var(--color-auction-dark)',
  },
  type: {
    normal: 'var(--color-type-normal)',
    bug: 'var(--color-type-bug)',
    dark: 'var(--color-type-dark)',
    dragon: 'var(--color-type-dragon)',
    electric: 'var(--color-type-electric)',
    fairy: 'var(--color-type-fairy)',
    fighting: 'var(--color-type-fighting)',
    fire: 'var(--color-type-fire)',
    flying: 'var(--color-type-flying)',
    ghost: 'var(--color-type-ghost)',
    grass: 'var(--color-type-grass)',
    ground: 'var(--color-type-ground)',
    ice: 'var(--color-type-ice)',
    poison: 'var(--color-type-poison)',
    psychic: 'var(--color-type-psychic)',
    rock: 'var(--color-type-rock)',
    steel: 'var(--color-type-steel)',
    water: 'var(--color-type-water)',
  },
  neutral: {
    100: 'var(--color-neutral-100)',
    200: 'var(--color-neutral-200)',
    300: 'var(--color-neutral-300)',
    400: 'var(--color-neutral-400)',
    500: 'var(--color-neutral-500)',
    600: 'var(--color-neutral-600)',
    700: 'var(--color-neutral-700)',
    800: 'var(--color-neutral-800)',
    900: 'var(--color-neutral-900)',
    1000: 'var(--color-neutral-1000)',
    1100: 'var(--color-neutral-1100)',
  },
  modal: {
    background: 'var(--color-modal-background)',
  },
};

export const rootColors = css`
  :root {
    /* PRIMARY */
    --color-primary-default: #00d68f;
    --color-primary-dark: #004a45;
    --color-primary-transparent: #00d68f7a;

    /* AUCTION */
    --color-auction-default: #ff3d71;
    --color-auction-dark: #db2c66;

    /* TYPES */
    --color-type-normal: #c4c0b4;
    --color-type-bug: #87950c;
    --color-type-dark: #413831;
    --color-type-dragon: #7361d1;
    --color-type-electric: #e08d00;
    --color-type-fairy: #e29fe6;
    --color-type-fighting: #852816;
    --color-type-fire: #cf2c03;
    --color-type-flying: #8fa4ff;
    --color-type-ghost: #6969af;
    --color-type-grass: #67af32;
    --color-type-ground: #c5a455;
    --color-type-ice: #b4edf8;
    --color-type-poison: #924990;
    --color-type-psychic: #924990;
    --color-type-rock: #5e491c;
    --color-type-steel: #7f8488;
    --color-type-water: #3b9bf1;

    /* NEUTRALS */
    --color-neutral-100: #ffffff;
    --color-neutral-200: #f7f9fc;
    --color-neutral-300: #edf1f7;
    --color-neutral-400: #e4e9f2;
    --color-neutral-500: #c5cee0;
    --color-neutral-600: #8f9bb3;
    --color-neutral-700: #2e3a59;
    --color-neutral-800: #222b45;
    --color-neutral-900: #192038;
    --color-neutral-1000: #151a30;
    --color-neutral-1100: #101426;

    /* MODAL */
    --color-modal-background: #00000059;
  }
`;
