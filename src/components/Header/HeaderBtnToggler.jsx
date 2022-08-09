import styled from "@emotion/styled"
import PropTypes from "prop-types"

const HeaderBtnWrapper = styled.button`
  ${({ theme }) => theme.breakpoints.down("xl")} {
    cursor: pointer;
    width: 72px;
    height: 58px;
    position: relative;
    background-color: transparent;
    border: none;
    padding: 16px;
    display: flex;
    align-items: center;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 16px;
      right: 16px;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.common.black};
      border-radius: 2px;
    }

    &::before {
      top: 16px;
    }

    &::after {
      bottom: 16px;
    }
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: none;
  }
`

const HeaderBtnLine = styled.span`
  ${({ theme }) => theme.breakpoints.down("xl")} {
    display: block;
    height: 2px;
    width: 100%;
    position: relative;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
    }

    &::before {
      width: 57.5%;
      left: 0;
      background-color: ${({ theme }) => theme.palette.common.black};
    }

    &::after {
      width: 30%;
      right: 0;
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

const HeaderBtnToggle = ({ handleClick }) => (
  <HeaderBtnWrapper onClick={handleClick} aria-label="Toggle navigation">
    <HeaderBtnLine />
  </HeaderBtnWrapper>
)

HeaderBtnToggle.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default HeaderBtnToggle
