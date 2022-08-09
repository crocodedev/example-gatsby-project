import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyles = ({ theme, colorVariant }) => css`
  color: ${colorVariant === "Dark" && theme.palette.common.white};
`

const HeroTextBeforeTitle = styled.h2`
  display: block;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 36px;
    line-height: 39px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    font-size: 36px;
    line-height: 39px;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    margin-bottom: 7px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    font-size: 45px;
    line-height: 50px;
    margin-bottom: 16px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    font-size: 60px;
    line-height: 65px;
    margin-bottom: 20px;
  }

  ${dynamicStyles}
`

export default HeroTextBeforeTitle
