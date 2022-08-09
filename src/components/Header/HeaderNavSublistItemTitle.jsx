import styled from "@emotion/styled"

const HeaderNavSublistItemTitle = styled.div`
  color: ${({ theme }) => theme.palette.gray[900]};
  font-weight: 600;
  transition: all 0.3s;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 18px;
    line-height: 22px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "2xl")} {
    font-size: 20px;
    line-height: 36px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    font-size: 24px;
    line-height: 40px;
  }
`

export default HeaderNavSublistItemTitle
