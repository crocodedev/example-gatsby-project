import styled from "@emotion/styled"

import Hex from "icons/hexagon.inline.svg"

const HexagonCTA = styled(Hex)`
  position: absolute;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    left: -138px;
    bottom: -406px;
    width: 620px;
  }
  ${({ theme }) => theme.breakpoints.between("lg", "2xl")} {
    left: -138px;
    bottom: -406px;
    width: 620px;
  }
  ${({ theme }) => theme.breakpoints.up("2xl")} {
    left: -162px;
    bottom: -400px;
  }
`

export default HexagonCTA
