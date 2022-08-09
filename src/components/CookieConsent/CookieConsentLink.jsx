import styled from "@emotion/styled"
import Link from "components/Link"

const CookieConsentLink = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamilyMontserrat};
  color: ${({ theme }) => theme.palette.gray[900]};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 18px;
    line-height: 19px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "2xl")} {
    font-size: 18px;
    line-height: 24px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    font-size: 18px;
    line-height: 30px;
  }
`

export default CookieConsentLink
