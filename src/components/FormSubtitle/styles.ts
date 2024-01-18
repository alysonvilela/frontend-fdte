import styled from "styled-components";

export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DividerHorizontal = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  width: 100%;
  height: 1px;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;
