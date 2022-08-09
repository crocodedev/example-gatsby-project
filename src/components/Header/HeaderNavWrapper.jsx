import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ isOpen, theme }) => css`
  ${theme.breakpoints.down("xl")} {
    display: ${isOpen ? "flex" : "none"};
  }
`

const HeaderNavWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    position: absolute;
    left: 0;
    top: 100%;
    background: ${({ theme }) => theme.palette.common.white};
    width: 100%;
    z-index: -1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 67px);
    overflow-y: auto;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    position: absolute;
    left: 0;
    top: 100%;
    background: ${({ theme }) => theme.palette.common.white};
    width: 100%;
    z-index: -1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 83px);
    overflow-y: auto;
    &::before {
      content: "";
      width: 100vw;
      height: 166px;
      position: fixed;
      background: linear-gradient(
        354.66deg,
        #ffffff 0.62%,
        rgba(255, 255, 255, 0.91875) 15.69%,
        rgba(255, 255, 255, 0) 92.19%
      );
      left: 0;
      bottom: 0;
      z-index: 1;
    }
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    position: absolute;
    left: 0;
    top: 100%;
    background: ${({ theme }) => theme.palette.common.white};
    width: 100%;
    z-index: -1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 83px);
    overflow-y: auto;
    &::before {
      content: "";
      width: 100vw;
      height: 166px;
      position: fixed;
      background: linear-gradient(
        354.66deg,
        #ffffff 0.62%,
        rgba(255, 255, 255, 0.91875) 15.69%,
        rgba(255, 255, 255, 0) 92.19%
      );
      left: 0;
      bottom: 0;
    }
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: 950px;
    gap: 72px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    max-width: 1080px;
    gap: 90px;
  }
  ${dynamicStyle}
`

export default HeaderNavWrapper
