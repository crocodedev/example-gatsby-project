import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Image from "components/Image"
import Link from "components/Link"

const MyLink = styled(Link)`
  display: block;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 163px;
    max-height: 67px;
    padding: 16px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: 218px;
    max-height: 65px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    max-width: 272px;
    max-height: 81px;
  }
`

const HeaderLogo = ({ image, link }) => (
  <MyLink to={link} ariaLabel="Example Gatsby Project">
    <Image {...image} />
  </MyLink>
)

HeaderLogo.propTypes = {
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
}

export default HeaderLogo
