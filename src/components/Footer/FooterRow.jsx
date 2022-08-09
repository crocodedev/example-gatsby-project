import styled from "@emotion/styled"

const FooterRow = styled.footer`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    flex-direction: column;
    gap: 60px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    justify-content: space-between;
    gap: 65px;
    padding-left: 8px;
    padding-right: 8px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    justify-content: space-between;
    gap: 100px;
  }
`

export default FooterRow
