import * as React from "react"
import PropTypes from "prop-types"
import { ClassNames } from "@emotion/react"
import ReactCookieConsent from "react-cookie-consent"
import CookieConsentTitle from "components/CookieConsent/CookieConsentTitle"
import CookieConsentText from "components/CookieConsent/CookieConsentText"
import CookieConsentLink from "components/CookieConsent/CookieConsentLink"
import CookieConsentRecaptcha from "components/CookieConsent/CookieConsentRecaptcha"
import htmlFormatting from "utils/htmlFormatting"

const CookieConsent = ({
  showSection,
  title,
  text,
  linkTitle,
  linkUrl,
  buttonTitle,
  reCaptchaText,
  cookieName,
}) => {
  const [showContent, setShowContent] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setShowContent(true)
    }, 3500)
  }, [])

  if (typeof window === "undefined" || (cookieName && showSection && showContent))
    return (
      <ClassNames>
        {({ theme, css }) => {
          const containerClasses = css`
            position: fixed;
            left: 50%;
            bottom: 40px;
            width: 100%;
            transform: translate(-50%, 0);
            z-index: 999;
            background: #f6f6fc;
            border-radius: 15px;

            ${theme.breakpoints.down("md")} {
              flex-direction: column;
              max-width: 80%;
              padding: 19px 41px 15px 32px;
              gap: 19px;
              display: flex;
              align-items: center;
            }

            ${theme.breakpoints.between("md", "lg")} {
              max-width: 700px;
              padding: 22px 47px 17px 36px;
              gap: 10px;
              min-height: 129px;
              display: grid;
              grid-template-columns: 1fr 0.2fr;
            }

            ${theme.breakpoints.between("lg", "2xl")} {
              max-width: 838px;
              padding: 24px 51px 19px 40px;
              gap: 13px;
              min-height: 161px;
              display: grid;
              grid-template-columns: 1fr 0.2fr;
            }

            ${theme.breakpoints.up("2xl")} {
              max-width: 1048px;
              padding: 31px 64px 24px 50px;
              gap: 15px;
              min-height: 202px;
              display: grid;
              grid-template-columns: 1fr 0.2fr;
            }
          `
          const buttonClasses = css`
            background: ${theme.palette.primary.main};
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            color: white;
            font-style: normal;
            font-weight: 500;
            cursor: pointer;

            ${theme.breakpoints.down("lg")} {
              min-width: 113px;
              padding: 13px 19px;
            }

            ${theme.breakpoints.between("lg", "2xl")} {
              min-width: 142px;
              padding: 16px 24px;
            }

            ${theme.breakpoints.up("2xl")} {
              min-width: 177px;
              padding: 20px 32px;
            }
          `
          const buttonWrapperClasses = css``
          const declineButtonClasses = css``
          const contentClasses = css`
            display: contents;
          `
          const overlayClasses = css``

          // This website uses cookies to enhance the user experience.
          return (
            <ReactCookieConsent
              cookieName={cookieName}
              buttonText={buttonTitle}
              reduceButtonText="I decline"
              location="none"
              enableDeclineButton={false}
              flipButtons={true}
              disableStyles={true}
              disableButtonStyles={true}
              containerClasses={containerClasses}
              buttonClasses={buttonClasses}
              buttonWrapperClasses={buttonWrapperClasses}
              declineButtonClasses={declineButtonClasses}
              contentClasses={contentClasses}
              overlayClasses={overlayClasses}
            >
              <CookieConsentTitle>{title}</CookieConsentTitle>
              <CookieConsentText>
                {text && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: htmlFormatting(text?.childMarkdownRemark?.html),
                    }}
                  />
                )}{" "}
                <CookieConsentLink target="_blank" to={linkUrl}>
                  {linkTitle}
                </CookieConsentLink>
                .
              </CookieConsentText>
              {reCaptchaText && (
                <CookieConsentRecaptcha
                  dangerouslySetInnerHTML={{
                    __html: htmlFormatting(reCaptchaText?.childMarkdownRemark?.html),
                  }}
                />
              )}
            </ReactCookieConsent>
          )
        }}
      </ClassNames>
    )
  return null
}

CookieConsent.propTypes = {
  showSection: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  reCaptchaText: PropTypes.object.isRequired,
  linkTitle: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  cookieName: PropTypes.string,
}

CookieConsent.defaultProps = {
  cookieName: "",
}

export default CookieConsent
