import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ imageExist }) => css`
  ${(imageExist &&
    `
    position: static;
  `) ||
  "transform: translateX(-50%);"}
`

const HeroImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-height: 480px;
    bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: 333px;
    max-height: 333px;
    left: 50%;
    transform: translateX(50%);
    bottom: 138px;
    margin-bottom: 40px;
    ${dynamicStyle}
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    max-width: 418px;
    max-height: 418px;
    top: 0;
    right: 32px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: 806px;
    max-height: 806px;
    right: -180px;
    top: 97px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    width: 1041px;
    height: 1041px;
    right: -159px;
    top: -40px;
  }
`

export default HeroImageContainer
