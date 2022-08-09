import styled from "@emotion/styled"
import { css } from "@emotion/react"
import BtnArrowText from "components/Buttons/BtnArrowText"

const dynamicStyles = ({ rightText, backgroundImage, addQuotes, imgAndText }) => css`
  ${rightText !== null && "margin-bottom: 77px;"}
  ${(backgroundImage === "Circle" ||
    backgroundImage === "Hexagone" ||
    backgroundImage === "Dodecagon" ||
    backgroundImage === "Shield" ||
    addQuotes) &&
  `
        margin-left: 0;
    `}
    
    ${imgAndText && "order: 1;"}
`

const HeroButton = styled(BtnArrowText)`
  div {
    flex-shrink: 0;
  }

  max-width: max-content;
  width: 100%;

  ${dynamicStyles}
`
export default HeroButton
