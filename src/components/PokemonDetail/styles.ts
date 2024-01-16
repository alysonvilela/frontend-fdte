import styled, { css } from "styled-components";

export const Background = styled.section`
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(67, 233, 123, 1) 0%,
    rgba(56, 249, 215, 1) 100%
  );
  height: 100%;
  width: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  @media (min-width: 575.98px) {
    max-width: 360px;
    max-height: 559px;
  }
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding: 12px;
  width: 100%;
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 24px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  width: 100%;
  height: 100%;
  margin-top: -${247 / 2}px;
  padding-top: ${247 / 2}px;
`;
export const Wrapper = styled.div``;

export const PictureWrapper = styled.div`
  height: 247px;
  width: 247px;
  min-height: 247px;
  min-height: 247px;
  border-radius: 999px;
  border: 4px solid ${({ theme }) => theme.colors.primary.default};
  background: ${({ theme }) => theme.colors.neutral[100]};
  margin-top: 32px;
  z-index: 10;

  img {
    height: 100%;
    margin: 0 auto;
  }
`;
