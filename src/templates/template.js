import * as React from "react"
import PropTypes from "prop-types"
import Seo from "components/Seo"
import { Global, ThemeProvider } from "@emotion/react"
import theme from "theme"
import modernNormalize from "styles/modernNormalize"
import reboot from "styles/reboot"
import fontMontserrat from "styles/fontMontserrat"
import fontGilroy from "styles/fontGilroy"
import fontGothamPro from "styles/fontGothamPro"
import CookieConsent from "sections/CookieConsent"
import * as Sections from "sections"
import { load } from "recaptcha-v3"

import "swiper/css"
import "swiper/css/navigation"

const Template = ({ pageContext: { baseUrl, seo, sections, cookieConsent, recaptchaKey } }) => {
  const [recaptcha, setRecaptcha] = React.useState(null)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const asyncFunction = async () => {
        setRecaptcha(
          await load(recaptchaKey, {
            useRecaptchaNet: true,
            autoHideBadge: true,
          }),
        )
      }
      setTimeout(asyncFunction, 3500)
    }
  }, [recaptchaKey])

  return (
    <ThemeProvider theme={theme}>
      <Seo {...seo} />
      <Global styles={[modernNormalize, reboot, fontMontserrat, fontGilroy, fontGothamPro]} />
      <CookieConsent {...cookieConsent} />
      {sections.map(({ id, component, ...props }) => {
        const Component = Sections[component]
        if (!Component) return null
        return <Component key={id} baseUrl={baseUrl} recaptcha={recaptcha} {...props} />
      })}
    </ThemeProvider>
  )
}

Template.propTypes = {
  pageContext: PropTypes.exact({
    baseUrl: PropTypes.string,
    seo: PropTypes.object,
    cookieConsent: PropTypes.object,
    recaptchaKey: PropTypes.string,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        component: PropTypes.string,
      }),
    ),
  }).isRequired,
}

export default Template
