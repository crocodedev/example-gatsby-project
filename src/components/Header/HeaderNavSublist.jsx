import styled from "@emotion/styled"
import Container from "components/Container"

const HeaderNavSublist = styled(Container)`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    padding-bottom: 15px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 15px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 56px;
    padding-bottom: 73px;
  }
`

export default HeaderNavSublist
