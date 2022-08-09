import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ theme, isButton, active }) => css`
  ${isButton &&
  `
        &::after {
            content: "";
            transition: 0.5s;
            width: 10px;
            height: 10px;
            display: inline-block;
            transform: rotate(45deg);
            border-bottom: 1px solid ${theme.palette.primary.main};
            border-right: 1px solid ${theme.palette.primary.main};
            margin-bottom: 7px;
        }`}
  ${active &&
  `
    color: ${theme.palette.primary.main} !important;
    &::after {
            transform: rotate(-135deg);
            margin-top: 7px;
            margin-bottom: 0px;
        }
    `}
`

const HeaderNavItemBtn = styled.button`
  background: none;
  border: none;
  text-align: start;
  transition: 0.5s;
  cursor: pointer;
  font-size: 18px;
  line-height: 22px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
    margin: 0 auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: ${({ theme }) => theme.breakpoints.values.md}px;
    margin: 0 auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    font-weight: 400;
    color: ${({ theme }) => theme.palette.gray["900"]};
    text-decoration: none;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 11px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
    margin: 0 auto;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    color: ${({ theme }) => theme.palette.gray["900"]};
    text-decoration: none;
    padding: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    position: relative;
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main} !important;
    }

    &::after {
      content: "";
      position: absolute;
      transition: 0.5s;
      width: 20px;
      height: 20px;
      z-index: 20;
      top: 165%;
      display: inline-block;
      transform: rotate(-135deg);
      left: 44%;
      background-color: #fff;
      opacity: 0;
      pointer-events: none;
    }
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    ${dynamicStyle}
  }
`

export default HeaderNavItemBtn
