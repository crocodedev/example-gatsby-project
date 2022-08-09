import styled from "@emotion/styled"

const HeaderWrapper = styled.header`
  position: relative;
  z-index: 10;
  background-color: ${({ theme }) => theme.palette.gray["50"]};

  ${({ theme }) => theme.breakpoints.between("sm", "xl")} {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    box-shadow: 0 12px 30px rgba(118, 118, 129, 0.15);
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export default HeaderWrapper
