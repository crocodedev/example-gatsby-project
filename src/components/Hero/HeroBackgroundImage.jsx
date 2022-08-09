import PropTypes from "prop-types"
import styled from "@emotion/styled"
import * as Icons from "components/Icons"

const HeroBackgroundImage = ({ backgroundImage, colorVariant }) => {
  const Component = styled(Icons[backgroundImage])`
    ${colorVariant === "Dark" && "opacity: 0.05;"}
  `
  return <Component />
}

HeroBackgroundImage.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  colorVariant: PropTypes.string,
}

HeroBackgroundImage.defaultProps = {
  colorVariant: "Light",
}

export default HeroBackgroundImage
