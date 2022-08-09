import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ active }) => css`
  ${active && `max-height: 700px;`}
`

const HeaderNavSublistWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  z-index: 10;
  max-height: 0;
  transition: 1s;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    ${dynamicStyle}
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    border-radius: 0 0 15px 15px;
    position: absolute;
    left: 0;
    top: 100%;
    box-shadow: 0 12px 30px rgba(118, 118, 129, 0.15);
    background: ${({ theme }) => theme.palette.common.white};
  }
`

export default HeaderNavSublistWrapper
