import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Button from "components/Buttons/Button"
import Link from "components/Link"

const MyButton = styled(Button)`
  white-space: nowrap;
  display: block;
  font-size: 18px;
  line-height: 22px;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 156px;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    bottom: 40px;
    z-index: 1;
    align-self: center;
    padding: 18px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    padding: 16px 22px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    padding: 20px 27px;
  }
`

const HeaderButton = ({ title, link }) => (
  <MyButton as={Link} to={link} variant="contained">
    {title}
  </MyButton>
)

HeaderButton.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default HeaderButton
