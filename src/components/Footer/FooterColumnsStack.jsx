import styled from "@emotion/styled"

const FooterColumnsStack = styled.div`
  width: 100%;
  column-gap: 60px;
  row-gap: 60px;
  display: flex;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    justify-content: space-between;
  }
`

export default FooterColumnsStack
