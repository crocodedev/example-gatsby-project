import styled from "@emotion/styled"

const FooterOfficeItem = styled.div`
  ${({ theme }) => theme.breakpoints.down("xl")} {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    margin-bottom: 21px;
    margin-top: 9px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    margin-bottom: 30px;
  }
`

export default FooterOfficeItem
