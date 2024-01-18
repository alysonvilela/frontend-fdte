import styled from "styled-components";

export const InputNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const InputContent = styled.div`
  position: relative;
`;

export const SelectInput = styled.select`
  width: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  padding: 1.2rem 0 1.2rem 0.8rem;
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.neutral[400]};
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:focus,
  &:active {
    border-color: #598bff;
  }

  &.placeholder {
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-weight: 400;
  }

  &.error {
    border-color: red;
  }

  option {
    &:disabled {
      color: red;
    }
  }
`;

export const InputSuffix = styled.span`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;
export const InputActions = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e4e9f2;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  height: 100%;

  &.error {
    border: 2px solid red;
    border-left: 0;
  }

  img {
  }
`;

export const Arrow = styled.img`
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[600]};
    cursor: pointer;
  }

  &.increase {
    transform: rotate(180deg);
  }
`;
