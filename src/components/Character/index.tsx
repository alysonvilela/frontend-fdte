import * as S from "./styles";
import { SpriteAnimator } from "react-sprite-animator";

import AshWalking from "../../assets/images/ashWalkingSprite.png";
import AshFront from "../../assets/images/ashFront.png";
import { ComponentPropsWithoutRef } from "react";
import { cx } from "../../utils/cx";

export type CharacterStatus = "INITIAL" | "HOVER" | "LOADING" | "ERROR";

interface CharacterProps extends ComponentPropsWithoutRef<"div"> {
  status: CharacterStatus;
}

export const Character = ({ status, ...props }: CharacterProps) => {
  return (
    <S.Wrapper className={cx(status !== "INITIAL" && "hover")} {...props}>
      <S.ImageWrapper>
        <S.CharacterTooltip status={status} />
        {status === "LOADING" ? (
          <SpriteAnimator
            sprite={AshWalking}
            width={64}
            height={64}
            shouldAnimate={true}
            fps={10}
            startFrame={0}
          />
        ) : (
          <img src={AshFront} alt="Character Ash on the center of the map" />
        )}
      </S.ImageWrapper>
    </S.Wrapper>
  );
};
