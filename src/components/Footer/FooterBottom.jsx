import styled from "@emotion/styled"

const FooterBottom = styled.div`
  display: flex;
  gap: 10px;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    flex-direction: column;
    margin-top: 60px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    margin-top: 46px;
    justify-content: space-between;
    padding: 0 12px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    margin-top: 60px;
    justify-content: space-between;
  }
`

export default FooterBottom
