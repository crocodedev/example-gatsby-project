import styled from "@emotion/styled"

const Clutch = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-left: 8px solid #1d303a;
  border-right: 8px solid #1d303a;
  border-top: 8px solid transparent;
  border-bottom: 8px solid #1d303a;
  border-radius: 99px 99px 99px 99px;
  transform: rotate(90deg);

  &::after {
    content: "";
    position: absolute;
    width: 17px;
    height: 17px;
    background-color: #eb4f3c;
    border-radius: 50%;
  }
`

export default Clutch
