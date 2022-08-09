import * as React from "react"
import PropTypes from "prop-types"
import HeroWrapper from "src/components/Hero/HeroWrapper"
import HeroContainer from "src/components/Hero/HeroContainer"
import Breadcrumbs from "components/Breadcrumbs"
import HeroBreadcrumbsLink from "src/components/Hero/HeroBreadcrumbsLink"
import HeroText from "src/components/Hero/HeroText"
import HeroTextBeforeTitle from "src/components/Hero/HeroTextBeforeTitle"
import HeroTitle from "src/components/Hero/HeroTitle"
import HeroPersonName from "src/components/Hero/HeroPersonName"
import HeroImage from "src/components/Hero/HeroImage"
import HeroImageContainer from "src/components/Hero/HeroImageContainer"
import HeroBackgroundImage from "src/components/Hero/HeroBackgroundImage"
import HeroArticle from "src/components/Hero/HeroArticle"
import HeroButton from "src/components/Hero/HeroButton"
import HeroTextsWrapper from "src/components/Hero/HeroTextsWrapper"
import Link from "components/Link"
import Arrow from "src/components/Icons/Arrow"
import htmlFormatting from "utils/htmlFormatting"

const Hero = ({
  theme,
  breadcrumbs,
  textBeforeTitle,
  textBeforeTitleTag,
  addQuotes,
  title,
  titleTag,
  personName,
  heroText,
  buttonText,
  buttonLink,
  backgroundImage,
  image,
  imageSize,
  rightText,
}) => {
  return (
    <div>
      <HeroWrapper colorVariant={theme} backgroundImage={backgroundImage}>
        <HeroContainer imgAndText={image !== null && rightText !== null}>
          {breadcrumbs?.length && (
            <Breadcrumbs>
              {breadcrumbs.map(
                (el, idx) =>
                  (breadcrumbs.length - 1 !== idx && (
                    <>
                      <HeroBreadcrumbsLink
                        colorVariant={theme}
                        as={Link}
                        isActive={breadcrumbs.length - 1 === idx}
                        to={el.link}
                        key={el.id}
                      >
                        {el.title}
                      </HeroBreadcrumbsLink>
                      <Arrow
                        key={el.link}
                        direction="left"
                        color="#BBBBBB"
                        width={14}
                        height={12}
                      />
                    </>
                  )) || (
                    <HeroBreadcrumbsLink
                      colorVariant={theme}
                      key={el.id}
                      isActive={breadcrumbs.length - 1 === idx}
                    >
                      {el.title}
                    </HeroBreadcrumbsLink>
                  ),
              )}
            </Breadcrumbs>
          )}
          {textBeforeTitle && (
            <HeroTextBeforeTitle colorVariant={theme} as={textBeforeTitleTag}>
              {textBeforeTitle}
            </HeroTextBeforeTitle>
          )}
          <HeroTitle
            backgroundImage={backgroundImage}
            addQuotes={addQuotes}
            colorVariant={theme}
            as={titleTag}
          >
            {(addQuotes ? "“‎‎" : "") + title + (addQuotes ? "”‎" : "")}
          </HeroTitle>
          {personName && <HeroPersonName colorVariant={theme}>{personName}</HeroPersonName>}
          <HeroTextsWrapper imgAndText={image !== null && rightText !== null}>
            {heroText && (
              <HeroText
                colorVariant={theme}
                backgroundImage={backgroundImage}
                rightText={rightText}
                addQuotes={addQuotes}
                dangerouslySetInnerHTML={{
                  __html: htmlFormatting(heroText?.childMarkdownRemark?.html),
                }}
                imgAndText={image !== null && rightText !== null}
                imageExist={image !== null}
              />
            )}
            {rightText && (
              <HeroArticle
                imgAndText={!!image}
                colorVariant={theme}
                dangerouslySetInnerHTML={{
                  __html: htmlFormatting(rightText?.childMarkdownRemark?.html),
                }}
              />
            )}
          </HeroTextsWrapper>
          <HeroImageContainer
            imageExist={image !== null}
            backgroundImage={backgroundImage}
            addQuotes={addQuotes}
          >
            <HeroImage
              imageSize={imageSize}
              {...image}
              backgroundImage={backgroundImage}
              objectFit="contain"
            />
            {backgroundImage !== "None" && (
              <HeroBackgroundImage colorVariant={theme} backgroundImage={backgroundImage} />
            )}
          </HeroImageContainer>

          {buttonLink && buttonText && (
            <HeroButton
              as={Link}
              to={buttonLink}
              imgAndText={image !== null && rightText !== null}
              backgroundImage={backgroundImage}
              addQuotes={addQuotes}
              rightText={rightText}
              variant="text"
            >
              {buttonText}
            </HeroButton>
          )}
        </HeroContainer>
      </HeroWrapper>
    </div>
  )
}

Hero.propTypes = {
  theme: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
  textBeforeTitle: PropTypes.string,
  textBeforeTitleTag: PropTypes.string.isRequired,
  addQuotes: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  heroText: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  image: PropTypes.object,
  imageSize: PropTypes.string.isRequired,
  rightText: PropTypes.object,
}

Hero.defaultProps = {
  breadcrumbs: [],
  textBeforeTitle: "",
  image: null,
  rightText: null,
}

export default Hero
