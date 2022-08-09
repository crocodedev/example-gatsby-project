import styled from "@emotion/styled"

const FooterWrapper = styled.footer`
  margin-top: auto;
  background-color: ${({ theme }) => theme.palette.gray["900"]};

  ${({ theme }) => theme.breakpoints.down("xl")} {
    padding-top: 30px;
    padding-bottom: 108px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    padding-top: 40px;
    padding-bottom: 139px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    padding-top: 55px;
    padding-bottom: 139px;
  }
`

export default FooterWrapper
