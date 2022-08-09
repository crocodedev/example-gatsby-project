const path = require("path")
const config = require("./config/site")

const {
  DEFAULT_LOCALE: defaultLocale = "",
  SITE_URL: siteUrl = "",
  SITE_NAME: name = "",
  GATSBY_RECAPTCHA_KEY: recaptchaKey = "",
} = process.env

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type ContentfulModelSeo implements Node {
      keywords: String
      ogtype: String
      twittercard: String
    }
  `)
}

exports.createPages = async ({ graphql, actions: { createPage, createRedirect }, reporter }) => {
  const template = path.resolve("./src/templates/template.js")

  const { data, errors } = await graphql(`
    {
      allContentfulModelRedirect(limit: 1000) {
        nodes {
          fromPath
          toPath
          statusCode
          force
          ignoreCase
          redirectInBrowser
        }
      }
      allContentfulSectionCookies(limit: 5) {
        nodes {
          locale: node_locale
          showSection
          title
          text {
            childMarkdownRemark {
              html
            }
          }
          reCaptchaText {
            childMarkdownRemark {
              html
            }
          }
          linkUrl
          linkTitle
          buttonTitle
        }
      }
      allContentfulModelPage(limit: 1000) {
        nodes {
          locale: node_locale
          url
          seo {
            titleTemplate
            title
            description
            keywords
            image {
              file {
                url
                details {
                  image {
                    height
                    width
                  }
                }
              }
            }
            ogtype
            twittercard
          }
          sections {
            ... on ContentfulSectionHeader {
              id: contentful_id
              component
              position
              logo {
                svg {
                  content
                }
                file {
                  contentType
                  url
                }
                alt: title
                gatsbyImageData(width: 200, height: 200, placeholder: BLURRED, quality: 100)
              }
              navigation {
                id: contentful_id
                title
                link
                subItems {
                  id: contentful_id
                  title
                  subtitle
                  link
                }
              }
              buttonTitle
              buttonLink
            }
            ... on ContentfulSectionFooter {
              id: contentful_id
              component
              position
              companyName
              companyTagline
              companyShortDescription
              social {
                id: contentful_id
                title
                link
              }
              navigation {
                id: contentful_id
                title
                link
                navigationSubItems: subItems {
                  id: contentful_id
                  title
                  link
                }
              }
              lastColumnTitle
              offices {
                id: contentful_id
                location
                phone
                email
              }
              copyright
              legalLinks {
                id: contentful_id
                title
                link
              }
            }
            ... on ContentfulSectionHero {
              id: contentful_id
              component
              position
              theme
              type
              breadcrumbs {
                id: contentful_id
                title
                link
              }
              textBeforeTitle
              textBeforeTitleTag
              addQuotes
              title
              titleTag
              finalStageText {
                childMarkdownRemark {
                  html
                }
              }
              finalStageBtnText
              personName
              heroText {
                childMarkdownRemark {
                  html
                }
              }
              buttonText
              buttonLink
              backgroundImage
              image {
                svg {
                  content
                }
                file {
                  contentType
                  url
                }
                alt: title
                gatsbyImageData(placeholder: BLURRED)
              }
              imageSize
              rightText {
                childMarkdownRemark {
                  html
                }
              }
              imageDesktop {
                svg {
                  content
                }
                file {
                  contentType
                  url
                }
                alt: title
                gatsbyImageData(placeholder: BLURRED)
              }
              imageMobile {
                svg {
                  content
                }
                file {
                  contentType
                  url
                }
                alt: title
                gatsbyImageData(placeholder: BLURRED)
              }
              units {
                id: contentful_id
                title
                values: subItems {
                  id: contentful_id
                  title
                  link
                }
              }
              clutchRating
              clutchText
              clutchLink
              formId
              formPlaceholderName
              formPlaceholderCompany
              formPlaceholderEmail
              formPlaceholderPhone
              formPlaceholderMessage
              secondFormId
              secondFormPlaceholderAnswer
              formAgreementText
              formAgreementLinkText
              formAgreementLink
              secondFormImage {
                svg {
                  content
                }
                file {
                  contentType
                  url
                }
                alt: title
                gatsbyImageData(placeholder: BLURRED)
              }
              secondFormTitle
              secondFormSubtitle
              secondFormText1
              secondFormText2
              secondFormLead
              secondFormDenyButtonText
              secondFormSendButtonText
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild("There was an error loading your Contentful pages", errors)
    return
  }

  const redirects = data.allContentfulModelRedirect.nodes
  const pages = data.allContentfulModelPage.nodes
  const cookieConsent = data.allContentfulSectionCookies.nodes

  redirects.forEach((redirect) => {
    createRedirect(redirect)
  })

  pages.forEach((page) => {
    const url = defaultLocale === page.locale ? page.url : `/${page.locale}${page.url}`
    createPage({
      path: url,
      component: template,
      context: {
        baseUrl: defaultLocale === page.locale ? "/" : `/${page.locale}/`,
        recaptchaKey,
        seo: {
          ...(page.seo || {}),
          lang: page.locale,
          siteUrl,
          url,
          name,
        },
        cookieConsent: {
          ...cookieConsent.filter((cookie) => cookie.locale === page.locale)[0],
          cookieName: config.googleAnalytics.cookieName,
        },
        sections: (page.sections || [])
          .filter(({ id }) => id)
          .sort((a, b) => +a.position - +b.position),
      },
    })
  })
}
