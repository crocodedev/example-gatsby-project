import styled from "@emotion/styled"
import Title from "components/Title"
import { css } from "@emotion/react"

const dynamicStyles = ({ theme, colorVariant, backgroundImage, addQuotes }) => css`
  color: ${colorVariant === "Dark" && theme.palette.common.white};
  ${backgroundImage === "Circle" &&
  `
   ${theme.breakpoints.between("xl", "2xl")} {
        max-width: 610px;
      }
  `}
  ${(backgroundImage === "Circle" ||
    backgroundImage === "Dodecagon" ||
    backgroundImage === "Hexagone") &&
  `
  ${theme.breakpoints.up("2xl")} {
        margin-bottom: 52px;
      }
  `}

  ${addQuotes &&
  `
    ${theme.breakpoints.between("md", "lg")} {
      text-indent: -18px;
    }

    ${theme.breakpoints.between("lg", "xl")} {
      text-indent: -30px;
    }

    ${theme.breakpoints.between("xl", "2xl")} {
      text-indent: -30px;
    }

    ${theme.breakpoints.up("2xl")} {
      text-indent: -38px;
    }
  `}
`

const HeroTitle = styled(Title)`
  margin-top: 0;
  position: relative;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 370px;
    margin-bottom: 34px;
    line-height: 48px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: 1150px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    max-width: 1170px;
  }

  ${dynamicStyles}
`

export default HeroTitle
