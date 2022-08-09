import styled from "@emotion/styled"
import Link from "components/Link"

const FooterSubLink = styled(Link)`
  color: ${({ theme }) => theme.palette.gray["600"]};
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  line-height: 1.4;
  padding-top: 10px;
  padding-bottom: 10px;
`

export default FooterSubLink
