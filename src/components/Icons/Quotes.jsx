import styled from "@emotion/styled"

import Quote from "icons/quotes.inline.svg"

const Quotes = styled(Quote)`
  position: absolute;
  z-index: -1;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    right: -60px;
    bottom: -46px;
  }
`

export default Quotes
