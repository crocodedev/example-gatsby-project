import { css } from "@emotion/react"

const reboot = (theme) => css`
  body {
    font-family: ${theme.typography.fontFamilyMontserrat};
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }

  h1 {
    ${theme.breakpoints.down("lg")} {
      font-size: 44px;
    }

    ${theme.breakpoints.between("lg", "2xl")} {
      font-size: 70px;
    }

    ${theme.breakpoints.up("2xl")} {
      font-size: 80px;
    }
  }

  h2 {
    ${theme.breakpoints.down("lg")} {
      font-size: 36px;
    }

    ${theme.breakpoints.between("lg", "2xl")} {
      font-size: 45px;
    }

    ${theme.breakpoints.up("2xl")} {
      font-size: 60px;
    }
  }

  .content {
    p {
      margin-top: 0;

      &:not(:last-child) {
        margin-bottom: 34px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul {
      padding-left: 20px;
    }

    ol {
      padding-left: 34px;
    }

    ul,
    ol {
      margin-top: 0;

      &:not(:last-child) {
        margin-bottom: 34px;
      }
    }

    p,
    p + br {
      + {
        ul,
        ol {
          margin-top: -34px;
        }
      }
    }

    a {
      color: ${theme.palette.primary.main};
    }

    br {
      content: "";
      display: block;
    }
  }
`

export default reboot
