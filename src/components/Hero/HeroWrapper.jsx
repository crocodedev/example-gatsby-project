import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ theme, colorVariant }) => css`
  ${colorVariant === "Dark" && `background-color: ${theme.palette.gray[900]};`}
`

const HeroWrapper = styled.div`
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("xl")} {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  ${dynamicStyle}
`

export default HeroWrapper
