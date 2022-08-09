import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyles = ({ theme, colorVariant, imgAndText }) => css`
  color: ${colorVariant === "Dark" && theme.palette.common.white};
  ${imgAndText &&
  `  ${theme.breakpoints.between("lg", "xl")} {
    max-width: 440px;
  }
  ${theme.breakpoints.up("xl")} {
        max-width: 500px;
      }
  `}
`

const HeroArticle = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    line-height: 25px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    line-height: 26px;
    max-width: 520px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    line-height: 32px;
    max-width: 655px;
  }

  ${dynamicStyles}
`

export default HeroArticle
