import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Arrow from "components/Icons/Arrow"
import Button from "components/Buttons/Button"

const MyButton = styled(Button)`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 18px;
  padding: 0;
  gap: 10px;
  transition: 0.3s;
  color: ${({ theme }) => theme.palette.primary.main};

  .arrow-icon {
    pointer-events: none;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
      ${({ theme }) => theme.breakpoints.up("md")} {
        padding: 0;

        .arrow-wrapper {
          width: 82px;
          height: 82px;
          border-width: 2px;
        }

        .arrow-container {
          width: 65px;
          height: 65px;
        }

        .arrow-icon {
          width: 29px;
          height: 25px;
          flex: 0 0 29px;

          &::before {
            width: ${(25 * 0.7).toFixed(2)}px;
            height: ${(25 * 0.7).toFixed(2)}px;
          }
        }
      }
    }
  }

  @media (hover: none) {
    color: ${({ theme }) => theme.palette.primary.main};
    ${({ theme }) => theme.breakpoints.up("md")} {
      padding: 0;

      .arrow-wrapper {
        width: 82px;
        height: 82px;
        border-width: 2px;
      }

      .arrow-container {
        width: 65px;
        height: 65px;
      }

      .arrow-icon {
        width: 29px;
        height: 25px;
        flex: 0 0 29px;

        &::before {
          width: ${(25 * 0.7).toFixed(2)}px;
          height: ${(25 * 0.7).toFixed(2)}px;
        }
      }
    }
  }
`

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  width: 36px;
  height: 36px;
  border: 0 solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
`

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  transition: 0.3s;
  margin-top: 0;
  margin-right: 0;
`

const ArrowOuter = styled.div`
  width: 82px;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BtnArrowText = ({ children, ...props }) => (
  <MyButton {...props} aria-label="Button">
    {children}
    <ArrowOuter className="arrow-outer">
      <ArrowWrapper className="arrow-wrapper">
        <ArrowContainer className="arrow-container">
          <Arrow className="arrow-icon" direction="right" width={16} height={14} color="white" />
        </ArrowContainer>
      </ArrowWrapper>
    </ArrowOuter>
  </MyButton>
)

BtnArrowText.propTypes = {
  children: PropTypes.node,
}

BtnArrowText.defaultProps = {
  children: null,
}

export default BtnArrowText
