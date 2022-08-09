import styled from "@emotion/styled"

const CookieConsentTitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyMontserrat};
  color: ${({ theme }) => theme.palette.primary.main};
  margin-top: 0;
  margin-bottom: 0;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 20px;
    line-height: 26px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "2xl")} {
    font-size: 20px;
    line-height: 32px;
    grid-area: 1 / 1 /1 /3;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    font-size: 24px;
    line-height: 40px;
    grid-area: 1 / 1 /1 /3;
  }
`

export default CookieConsentTitle
