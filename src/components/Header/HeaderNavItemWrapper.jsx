import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ theme, active, showIndicator }) => css`
  ${active &&
  `
  ${theme.breakpoints.down("xl")} {
    transition: 0.3s;
    background: #F8F8FB;
    box-shadow: -10px 10px 40px rgba(118, 118, 129, 0.07);
    border-bottom: 1px solid #EDEDF8;}`}

  ${showIndicator &&
  `
  ${theme.breakpoints.up("xl")} {

   &:hover > button {
      &::after {
        opacity: 1;
        pointer-events: all;
      }
    }
  }`}
`

const HeaderNavItemWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.down("xl")} {
    border-bottom: transparent;
    &:first-of-type {
      padding-top: 15px;
    }
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    &:hover > button {
      color: ${({ theme }) => theme.palette.primary.main} !important;
    }
    &:hover .header-nav-sublist {
      max-height: 700px;
    }
  }

  ${dynamicStyle}
`

export default HeaderNavItemWrapper
