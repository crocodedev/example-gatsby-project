import * as React from "react"
import PropTypes from "prop-types"
import HeaderWrapper from "src/components/Header/HeaderWrapper"
import HeaderContainer from "src/components/Header/HeaderContainer"
import HeaderLogo from "src/components/Header/HeaderLogo"
import HeaderNavList from "src/components/Header/HeaderNavList"
import HeaderButton from "src/components/Header/HeaderButton"
import HeaderNavItem from "src/components/Header/HeaderNavItem"
import HeaderNavWrapper from "src/components/Header/HeaderNavWrapper"
import HeaderBtnToggle from "src/components/Header/HeaderBtnToggler"

const Header = ({ baseUrl, logo, navigation, buttonTitle, buttonLink }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  React.useEffect(() => {
    if (isOpen) document.querySelector("#gatsby-focus-wrapper").style.overflow = "hidden"
    if (!isOpen) document.querySelector("#gatsby-focus-wrapper").style.overflow = ""
  }, [isOpen])

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo image={logo} link={baseUrl} />
        <HeaderBtnToggle handleClick={handleClick} />
        <HeaderNavWrapper isOpen={isOpen}>
          <HeaderNavList>
            {navigation?.map(({ id, ...props }) => (
              <HeaderNavItem handleClose={setIsOpen} key={id} {...props} />
            ))}
          </HeaderNavList>
          <HeaderButton title={buttonTitle} link={buttonLink} />
        </HeaderNavWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string,
          title: PropTypes.string,
          link: PropTypes.string,
          subtitle: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  buttonTitle: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
}

export default Header
