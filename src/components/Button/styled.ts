import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 1.6rem 2.4rem;
  background-color: #ff3d71;
  border: 1px solid #ff3d71;
  border-radius: 42px;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;

  &.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border: 4px solid #db2c66;
  }

  &.shadow {
    box-shadow: 0px 20px 32px 0px #091e4240;
  }

  &:hover {
    background-color: #db2c66;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral[600]};
    border-color: ${({ theme }) => theme.colors.neutral[700]};
    opacity: 0.7;
  }
`;

export const Icon = styled.img``;

export const Text = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: 0px;
`;
