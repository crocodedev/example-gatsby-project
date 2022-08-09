import styled from "@emotion/styled"

const FooterNavTitle = styled.div`
  color: ${({ theme }) => theme.palette.common.white};
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  line-height: 1.55;
  font-size: 18px;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    margin-bottom: 30px;
  }
`

export default FooterNavTitle
