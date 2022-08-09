import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ disableGutters }) => css`
  ${disableGutters
    ? ""
    : `
      padding-right: 16px;
      padding-left: 16px;
      `}
`

const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-right: auto;
    margin-left: auto;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: ${({ theme }) => theme.breakpoints.values.md}px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values.xl}px;
  }

  ${({ theme }) => theme.breakpoints.between("2xl", "3xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values["2xl"]}px;
  }

  ${({ theme }) => theme.breakpoints.up("3xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values["3xl"]}px;
  }

  ${dynamicStyle}
`

export default Container
