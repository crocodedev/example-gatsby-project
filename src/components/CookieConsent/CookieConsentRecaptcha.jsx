import styled from "@emotion/styled"

const CookieConsentRecaptcha = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyMontserrat};
  color: ${({ theme }) => theme.palette.gray[900]};
  margin: 0;
  font-size: 18px;
  display: inline;

  & p {
    margin: 0;
    display: inline;
    color: #b6b6c6;
  }
  & a {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    line-height: 19px;
    order: 4;
  }

  ${({ theme }) => theme.breakpoints.between("md", "2xl")} {
    line-height: 24px;
    grid-area: 3 / 1 / 3 /3;
    padding-top: 25px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    line-height: 30px;
    grid-area: 3 / 1 / 3 /3;
    padding-top: 25px;
  }
`

export default CookieConsentRecaptcha
