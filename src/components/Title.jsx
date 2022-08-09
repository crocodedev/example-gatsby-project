import styled from "@emotion/styled"

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamilyGilroy};
  font-weight: bold;
  line-height: 1;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 44px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "2xl")} {
    font-size: 70px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    font-size: 80px;
  }
`

export default Title
