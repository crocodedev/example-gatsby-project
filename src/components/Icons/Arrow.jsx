import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Arrow = ({ as, direction, width, height, color, ...props }) => {
  if (!direction || !width || !height || !color) return null
  const widthSquare = (height * 0.7).toFixed(2)

  const Component = styled(as)`
    position: relative;
    display: inline-block;
    width: ${width}px;
    flex: 0 0 ${width}px;
    height: ${height}px;
    transition: 0.3s;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      ${direction === "right" ? `right` : `left`}: 9%;
      border: solid ${color};
      border-width: 0 2px 2px 0;
      display: block;
      width: ${widthSquare}px;
      height: ${widthSquare}px;
      transform: translateY(-50%) rotate(${direction === "right" ? -45 : 135}deg);
      transition: 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 2px;
      background-color: ${color};
      transition: 0.3s;
    }
  `

  return <Component {...props} {...(as === "button" ? { "aria-label": "Button" } : {})} />
}

Arrow.propTypes = {
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

Arrow.defaultProps = {
  as: "span",
}

export default Arrow
