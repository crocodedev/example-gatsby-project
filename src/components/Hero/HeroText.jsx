import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyles = ({
  theme,
  colorVariant,
  backgroundImage,
  addQuotes,
  rightText,
  imgAndText,
}) => css`
  color: ${colorVariant === "Dark" && theme.palette.common.white};

  ${rightText && !imgAndText && `margin-bottom: 0 !important;`}

  ${addQuotes && `font-weight: 500;`}

  ${(backgroundImage === "Dodecagon" ||
    backgroundImage === "Hexagone" ||
    backgroundImage === "Circle") &&
  `
    ${theme.breakpoints.between("lg", "xl")} {
      margin-bottom: 30px;
    }

    ${theme.breakpoints.up("2xl")} {
      margin-bottom: 37px;
    }
  `}
`

const HeroText = styled.div`
  display: block;
  font-weight: 400;
  margin-top: 0;

  ${({ theme }) => theme.breakpoints.down("2xl")} {
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    font-size: 24px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    line-height: 29px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    line-height: 30px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    max-width: 440px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    line-height: 34px;
    max-width: 670px;
  }

  ${dynamicStyles}
`

export default HeroText
