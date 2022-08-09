import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Container from "components/Container"

const dynamicStyle = ({ imgAndText }) => css`
  ${imgAndText &&
  `
  display: flex;
  flex-direction: column;
  `}
`

const HeroContainer = styled(Container)`
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.between("2xl", "3xl")} {
    padding-left: 55px;
    padding-right: 55px;
  }

  ${dynamicStyle}
`

export default HeroContainer
