import styled from "@emotion/styled"
import Container from "components/Container"

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    padding-left: 0;
    padding-right: 0;
  }
`

export default HeaderContainer
