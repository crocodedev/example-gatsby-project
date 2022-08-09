import styled from "@emotion/styled"
import { css } from "@emotion/react"

const dynamicStyle = ({ tPos = "auto", lPos = "auto", rPos = "auto", bPos = "auto", size }) => css`
  width: ${size};
  height: ${size};
  bottom: ${bPos};
  top: ${tPos};
  left: ${lPos};
  right: ${rPos};
`

const Dot = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${dynamicStyle}
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  left: 1377px;
  top: 222px;
  background: #c2e4c9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const OuterCircle = styled.div`
  width: 135.24px;
  height: 135.24px;
  background: rgba(194, 228, 201, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CheckMark = styled.div`
  width: 44px;
  height: 38px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after,
  &:before {
    content: "";
    position: absolute;
    display: block;
    height: 8px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  &:before {
    width: 26px;
    transform: rotate(45deg);
    left: -1px;
    top: 22px;
  }

  &:after {
    width: 38px;
    transform: rotate(-53deg);
    right: -4px;
    top: 14px;
  }
`

const ImageWrapper = styled.div`
  width: 294px;
  height: 213.8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`

const FormFinalImage = () => (
  <ImageWrapper>
    <Dot size="11px" tPos="-12px" rPos="139px" />
    <Dot size="11px" bPos="46px" rPos="63px" />
    <Dot size="11px" tPos="77px" lPos="47px" />
    <Dot size="6px" tPos="82px" rPos="17px" />
    <Dot size="6px" bPos="51px" lPos="102px" />
    <Dot size="6px" lPos="-17px" bPos="88px" />
    <OuterCircle>
      <Circle>
        <CheckMark />
      </Circle>
    </OuterCircle>
  </ImageWrapper>
)

export default FormFinalImage
