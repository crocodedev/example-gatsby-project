import styled from "@emotion/styled"
import Link from "components/Link"

const HeaderNavSublistItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 15px 10px;

  &:hover > div {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    min-height: 40px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    min-height: 63px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    min-height: 71px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    min-height: 77px;
  }
`

export default HeaderNavSublistItem
