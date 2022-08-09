import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ imgAndText }) => css`
  ${imgAndText && "flex-direction: column;"}
`

const HeroTextsWrapper = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    justify-content: space-between;
    ${dynamicStyle}
  }
`

export default HeroTextsWrapper
