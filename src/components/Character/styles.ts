import styled, { keyframes } from "styled-components";
import { CharacterStatus } from "./";

import SearchTooltip from "../../assets/images/searchTooltip.png";
import SearchingTooltip from "../../assets/images/searchingTooltip.png";
import ErrorTooltip from "../../assets/images/tooltipError.png";

const tooltipIn = keyframes`
  from {
    opacity: 0;
    top: -64px;
  }
  to {
    opacity: 1;
    top: -74px;
  }
`;

const tooltipOut = keyframes`
  from {
    opacity: 1;
    top: -74px;
  }
  to {
    opacity: 0;
    top: -64px;
  }
`;

interface CharacterTooltipProps {
  status: CharacterStatus;
}

type Sources = {
  [k in CharacterStatus]: string;
};

export const Wrapper = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;

  &:hover {
    #tooltip {
      animation: ${tooltipIn} 0.3s forwards;
    }
  }

  &:not(:hover) {
    #tooltip {
      animation: ${tooltipOut} 0.3s forwards;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const CharacterTooltip = styled.img.attrs<CharacterTooltipProps>(
  (props) => {
    const sources: Sources = {
      HOVER: SearchTooltip,
      LOADING: SearchingTooltip,
      ERROR: ErrorTooltip,
      INITIAL: "",
    };

    return {
      src: sources[props.status],
      id: "tooltip",
    };
  }
)`
  position: absolute;
`;
