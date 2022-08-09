import styled from "@emotion/styled"

const CookieConsentText = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyMontserrat};
  color: ${({ theme }) => theme.palette.gray[900]};
  margin: 0;
  font-size: 18px;

  & > div {
    margin: 0;
    display: inline;

    & > p {
      margin: 0;
      display: inline;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    line-height: 19px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "2xl")} {
    line-height: 24px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    line-height: 30px;
  }
`

export default CookieConsentText
