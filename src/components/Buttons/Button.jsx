import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ variant, theme }) => css`
  color: ${(variant === "contained" && theme.palette.common.white) || theme.palette.gray["900"]};
  background-color: ${(variant === "contained" && theme.palette.primary.main) || "transparent"};
  border: ${(variant === "text" && "none") || `2px solid ${theme.palette.primary.main}`};

  @media (hover: hover) {
    &:hover {
      color: ${(variant === "text" && theme.palette.gray["900"]) || theme.palette.common.white};
      background-color: ${(variant === "text" && "transparent") || theme.palette.primary.main};
    }
  }
`

const Button = styled.button`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  padding: 18px 30px;
  border-radius: 99px;
  transition: 0.3s;

  @media (hover: hover) {
    &:hover {
      text-decoration: none;
    }
  }

  &:disabled,
  &.disabled,
  fieldset:disabled & {
    pointer-events: none;
    opacity: 0.65;
  }

  ${dynamicStyle};
`

export default Button
