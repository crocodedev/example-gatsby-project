import styled from "@emotion/styled"
import Link from "components/Link"

const FooterCompanyName = styled(Link)`
  font-weight: 500;
  line-height: 1.55;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  margin-bottom: 5px;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    font-size: 22px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    font-size: 18px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    font-size: 22px;
  }
`

export default FooterCompanyName
