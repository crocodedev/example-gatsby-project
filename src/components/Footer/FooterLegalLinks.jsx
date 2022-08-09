import styled from "@emotion/styled"

const FooterLegalLinks = styled.div`
  display: flex;
  column-gap: 10px;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: 820px;
  }

  ${({ theme }) => theme.breakpoints.between("2xl", "3xl")} {
    max-width: 995px;
  }

  ${({ theme }) => theme.breakpoints.up("3xl")} {
    max-width: 1085px;
  }
`

export default FooterLegalLinks
