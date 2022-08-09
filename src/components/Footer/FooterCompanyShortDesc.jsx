import styled from "@emotion/styled"

const FooterCompanyShortDesc = styled.div`
  line-height: 1.7;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 18px;
  max-width: 454px;
  margin-bottom: 45px;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    br {
      display: none;
    }
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    letter-spacing: 0.1px;
  }
`

export default FooterCompanyShortDesc
