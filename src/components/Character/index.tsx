import * as S from "./styles";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SpriteAnimator } from "react-sprite-animator";

import AshWalking from "../../assets/images/ashWalkingSprite.png";
import AshFront from "../../assets/images/ashFront.png";
import { ComponentPropsWithoutRef } from "react";

export type CharacterStatus = "INITIAL" | "HOVER" | "LOADING" | "ERROR";

interface CharacterProps extends ComponentPropsWithoutRef<"button"> {
  status: CharacterStatus;
}

export const Character = ({ status, ...props }: CharacterProps) => {
  return (
    <S.Wrapper {...props}>
      <S.ImageWrapper>
        <S.CharacterTooltip status={status} />
        {status === "LOADING" ? (
          <S.SpriteWrapper>
            <SpriteAnimator
              sprite={AshWalking}
              width={64}
              height={64}
              shouldAnimate
              fps={10}
              startFrame={0}
            />
          </S.SpriteWrapper>
        ) : (
          <img
            src={AshFront}
            alt="Character Ash on the center of the map"
            width={64}
            height={64}
          />
        )}
      </S.ImageWrapper>
    </S.Wrapper>
  );
};
