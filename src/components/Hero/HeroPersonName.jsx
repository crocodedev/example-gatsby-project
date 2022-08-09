import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyles = ({ theme, colorVariant }) => css`
  color: ${colorVariant === "Dark" && theme.palette.common.white};
`

const HeroPersonName = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.typography.fontFamilyGilroy};
  font-weight: 700;

  padding-top: 8px;
  border-top: 2px solid ${({ theme }) => theme.palette.primary.main};
  max-width: max-content;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("2xl")} {
    margin-bottom: 42px;
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    margin-bottom: 62px;
    font-size: 24px;
  }

  ${dynamicStyles}
`

export default HeroPersonName
