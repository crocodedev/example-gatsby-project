import styled from "@emotion/styled"

const FooterCompanyTagline = styled.div`
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 18px;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 241px;
    margin-bottom: 40px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: 180px;
    margin-bottom: 28px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    max-width: 241px;
    margin-bottom: 40px;
  }
`

export default FooterCompanyTagline
