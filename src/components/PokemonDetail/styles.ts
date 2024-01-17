import styled from "styled-components";

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
  position: relative;
  background: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 24px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  width: 100%;
  height: 100%;
  margin-top: -${247 / 2}px;
  padding-top: ${247 / 2}px;
  overflow: auto;
  padding-right: 16px;
  padding-left: 16px;
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
    padding: 40px;
  }
`;

export const Title = styled.h2`
  margin-top: 36px;
  margin-bottom: 36px;

  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral[700]};
  text-align: center;
  font-size: 1.8rem;
  line-height: 2.4rem; /* 133.333% */
  text-transform: uppercase;
`;

export const Label = styled.h4`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.6rem;
  text-transform: uppercase;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 24px;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50px;
  text-align: center;
`;

export const DetailItemValue = styled.h2`
  font-weight: 700;
  flex: 1;
  color: ${({ theme }) => theme.colors.neutral[700]};
  text-align: center;
  font-size: 1.8rem;
  line-height: 2.4rem; /* 133.333% */
  text-transform: uppercase;
`;

export const DividerVertical = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  width: 1px;
  height: 30px;
`;

export const DividerHorizontal = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  width: 100%;
  height: 1px;
`;

export const Section = styled.div`
  margin-bottom: 24px;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const Abilities = styled.div`
  text-align: center;
  margin: 36px 0;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const SubmitWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 32px;
`;

export const Pokedex = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  img {
    -webkit-filter: drop-shadow(20px 20px 20px #091e4240);
    filter: drop-shadow(20px 20px 20px #091e4240);
  }
`;

export const WhiteSpace = styled.div`
  height: 150px;
`;
