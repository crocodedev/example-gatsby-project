import styled from "@emotion/styled"

const Breadcrumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -10px;
  margin-right: -10px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-bottom: 31px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    margin-bottom: 39px;
  }
`

export default Breadcrumbs
