import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyles = ({ theme, isActive, colorVariant }) => css`
  color: ${colorVariant === "Dark"
    ? (isActive && theme.palette.common.white) || theme.palette.gray[600]
    : (isActive && theme.palette.gray[900]) || theme.palette.gray[600]};
`

const HeroBreadcrumbsLink = styled.span`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  padding: 5px 13px;
  ${dynamicStyles}
`

export default HeroBreadcrumbsLink
