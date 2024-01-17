import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.6rem;
    text-transform: uppercase;
  }
`;

export const Key = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;
