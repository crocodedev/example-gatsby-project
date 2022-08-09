import styled from "@emotion/styled"

const HeaderNavList = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    background: ${({ theme }) => theme.palette.common.white};
    flex-direction: column;
    padding-bottom: 30%;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    justify-content: flex-end;
    gap: 72px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    justify-content: flex-end;
    gap: 90px;
  }
`

export default HeaderNavList
