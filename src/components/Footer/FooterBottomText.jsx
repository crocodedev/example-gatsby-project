import styled from "@emotion/styled"

const FooterBottomText = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.gray["600"]};
  text-decoration: none;
  line-height: 1.4;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    font-size: 16px;

    &.footer-link {
      padding-top: 13px;
      padding-bottom: 13px;
    }
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    white-space: nowrap;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    white-space: nowrap;
  }
`

export default FooterBottomText
