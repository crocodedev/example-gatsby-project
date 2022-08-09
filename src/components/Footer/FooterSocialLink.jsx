import styled from "@emotion/styled"
import Link from "components/Link"

const FooterSocialLink = styled(Link)`
  color: ${({ theme }) => theme.palette.common.white};
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.55;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    &.footer-link {
      padding-top: 11px;
      padding-bottom: 10px;
    }
  }
`

export default FooterSocialLink
