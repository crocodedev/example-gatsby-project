import PropTypes from "prop-types"
import Link from "components/Link"
import FooterWrapper from "src/components/Footer/FooterWrapper"
import Container from "components/Container"
import FooterRow from "src/components/Footer/FooterRow"
import FooterCompanyName from "src/components/Footer/FooterCompanyName"
import FooterCompanyTagline from "src/components/Footer/FooterCompanyTagline"
import FooterCompanyShortDesc from "src/components/Footer/FooterCompanyShortDesc"
import FooterSocialLink from "src/components/Footer/FooterSocialLink"
import FooterSubLink from "src/components/Footer/FooterSubLink"
import FooterNavTitle from "src/components/Footer/FooterNavTitle"
import FooterOfficeText from "src/components/Footer/FooterOfficeText"
import FooterOfficeItem from "src/components/Footer/FooterOfficeItem"
import FooterBottom from "src/components/Footer/FooterBottom"
import FooterBottomText from "src/components/Footer/FooterBottomText"
import FooterLegalLinks from "src/components/Footer/FooterLegalLinks"
import FooterColumnsStack from "src/components/Footer/FooterColumnsStack"

const Footer = ({
  baseUrl,
  companyName,
  companyTagline,
  companyShortDescription,
  social,
  navigation,
  lastColumnTitle,
  offices,
  copyright,
  legalLinks,
}) => (
  <FooterWrapper>
    <Container>
      <FooterRow>
        <div>
          <FooterCompanyName to={baseUrl}>{companyName}</FooterCompanyName>
          <FooterCompanyTagline dangerouslySetInnerHTML={{ __html: companyTagline }} />
          <FooterCompanyShortDesc dangerouslySetInnerHTML={{ __html: companyShortDescription }} />
          {social.map(({ id, title, link }) => (
            <div key={id}>
              <FooterSocialLink to={link} className="footer-link">
                {title}
              </FooterSocialLink>
            </div>
          ))}
        </div>
        <FooterColumnsStack>
          {navigation.map(({ id, title, link, navigationSubItems }) => (
            <div key={id}>
              <div>
                <FooterNavTitle as={Link} to={link}>
                  {title}
                </FooterNavTitle>
              </div>
              <div>
                {navigationSubItems.map(({ id: idItem, title: titleItem, link: linkItem }) => (
                  <div key={idItem}>
                    <FooterSubLink to={linkItem}>{titleItem}</FooterSubLink>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div>
            <FooterNavTitle>{lastColumnTitle}</FooterNavTitle>
            <div>
              {offices.map(({ id, email, location, phone }) => (
                <FooterOfficeItem key={id}>
                  <div>
                    <FooterOfficeText as="a" href={`mailto:${email}`}>
                      {email}
                    </FooterOfficeText>
                  </div>
                  <div>
                    <FooterOfficeText>{location}</FooterOfficeText>
                  </div>
                  <div>
                    {!!phone && (
                      <FooterOfficeText as="a" href={`tel:${phone.replace(/[^+\d]+/g, "")}`}>
                        {phone}
                      </FooterOfficeText>
                    )}
                  </div>
                </FooterOfficeItem>
              ))}
            </div>
          </div>
        </FooterColumnsStack>
      </FooterRow>
      <FooterBottom>
        <FooterBottomText>
          © {new Date().getFullYear()} {copyright}
        </FooterBottomText>
        <FooterLegalLinks>
          {legalLinks.map(({ id, title, link }) => (
            <FooterBottomText as={Link} key={id} to={link} className="footer-link">
              {title}
            </FooterBottomText>
          ))}
        </FooterLegalLinks>
      </FooterBottom>
    </Container>
  </FooterWrapper>
)

Footer.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyTagline: PropTypes.string.isRequired,
  companyShortDescription: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
      navigationSubItems: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string,
          title: PropTypes.string,
          link: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  lastColumnTitle: PropTypes.string.isRequired,
  offices: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      email: PropTypes.string,
      location: PropTypes.string,
      phone: PropTypes.string,
    }),
  ).isRequired,
  copyright: PropTypes.string.isRequired,
  legalLinks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
}

export default Footer
