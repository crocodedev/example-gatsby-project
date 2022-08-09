import * as React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import Link from "components/Link"
import useMedia from "hooks/useMedia"

import HeaderNavSublist from "./HeaderNavSublist"
import HeaderNavSublistWrapper from "./HeaderNavSublistWrapper"
import HeaderNavSublistItem from "./HeaderNavSublistItem"
import HeaderNavSublistItemTitle from "./HeaderNavSublistItemTitle"
import HeaderNavSublistItemSubtitle from "./HeaderNavSublistItemSubtitle"
import HeaderNavItemBtn from "./HeaderNavItemBtn"
import HeaderNavItemWrapper from "./HeaderNavItemWrapper"

const HeaderNavItem = ({ title, link, subItems, handleClose }) => {
  const [active, setActive] = React.useState(false)
  const isXLScreen = useMedia(["(max-width: 1280px)"], [false], true)

  React.useEffect(() => {
    setActive(false)
    handleClose(false)
  }, [isXLScreen, handleClose])

  return (
    <HeaderNavItemWrapper showIndicator={isXLScreen && subItems !== null} active={active}>
      <HeaderNavItemBtn
        as={(!isXLScreen && subItems !== null && "button") || Link}
        active={active}
        to={link}
        isButton={!isXLScreen && subItems !== null}
        onClick={
          ((isXLScreen === true || subItems === null) &&
            (() => {
              handleClose(false)
              navigate(link)
            })) ||
          (() => setActive(!active))
        }
      >
        {title}
      </HeaderNavItemBtn>

      {subItems && (
        <HeaderNavSublistWrapper className="header-nav-sublist" active={active}>
          <HeaderNavSublist>
            {subItems.map(({ id: subItemId, title: subItemTitle, link: subItemLink, subtitle }) => (
              <HeaderNavSublistItem
                key={subItemId}
                onClick={() => handleClose(false)}
                to={subItemLink}
              >
                <HeaderNavSublistItemTitle>{subItemTitle}</HeaderNavSublistItemTitle>
                <HeaderNavSublistItemSubtitle>{subtitle}</HeaderNavSublistItemSubtitle>
              </HeaderNavSublistItem>
            ))}
          </HeaderNavSublist>
        </HeaderNavSublistWrapper>
      )}
    </HeaderNavItemWrapper>
  )
}

HeaderNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  subItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
      subtitle: PropTypes.string,
    }),
  ),
  handleClose: PropTypes.func.isRequired,
}

HeaderNavItem.defaultProps = {
  subItems: null,
}

export default HeaderNavItem
