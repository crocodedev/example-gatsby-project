import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Arrow from "components/Icons/Arrow"
import Button from "components/Buttons/Button"

const MyButton = styled(Button)`
  padding: 0;
  display: inline-block;
  position: relative;

  .arrow-icon {
    pointer-events: none;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 44px;
    height: 44px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    width: 64px;
    height: 64px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    width: 74px;
    height: 74px;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    transform: translate(-50%, -50%);
    border-radius: 99px;
    border: 2px solid transparent;
    transition: 0.3s;

    @media (hover: hover) {
      top: 50%;
      left: 50%;
      ${({ theme }) => theme.breakpoints.down("md")} {
        width: 44px;
        height: 44px;
      }

      ${({ theme }) => theme.breakpoints.between("md", "xl")} {
        width: 64px;
        height: 64px;
      }

      ${({ theme }) => theme.breakpoints.up("xl")} {
        width: 74px;
        height: 74px;
      }
    }
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};

      .arrow-icon {
        &::before {
          border-color: white;
        }

        &::after {
          background-color: white;
        }
      }

      &::before {
        border-color: ${({ theme }) => theme.palette.primary.main};

        ${({ theme }) => theme.breakpoints.down("md")} {
          width: 65px;
          height: 65px;
        }

        ${({ theme }) => theme.breakpoints.between("md", "xl")} {
          width: 85px;
          height: 85px;
        }

        ${({ theme }) => theme.breakpoints.up("xl")} {
          width: 95px;
          height: 95px;
        }
      }
    }
  }

  @media (hover: none) {
    background-color: ${({ theme }) => theme.palette.primary.main};

    .arrow-icon {
      &::before {
        border-color: white;
      }

      &::after {
        background-color: white;
      }
    }

    &::before {
      ${({ theme }) => theme.breakpoints.down("md")} {
        width: 65px;
        height: 65px;
      }

      ${({ theme }) => theme.breakpoints.between("md", "xl")} {
        width: 85px;
        height: 85px;
      }

      ${({ theme }) => theme.breakpoints.up("xl")} {
        width: 95px;
        height: 95px;
      }

      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

const BtnArrow = ({ direction, color, arrowProps, ...props }) => (
  <MyButton {...props} aria-label="Button">
    <Arrow
      direction={direction}
      width={33}
      height={28}
      color={color}
      className="arrow-icon"
      {...arrowProps}
    />
  </MyButton>
)

BtnArrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  color: PropTypes.string,
  arrowProps: PropTypes.object,
}

BtnArrow.defaultProps = {
  arrowProps: null,
  color: "black",
}

export default BtnArrow
