import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ to, target, noFollow, children, className, onClick, ariaLabel, ...props }) => {
  if (
    /^(http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-/]))?$/.test(to) ||
    // eslint-disable-next-line no-useless-escape
    /^mailto:([^?]*)$/.test(to) ||
    target !== null ||
    noFollow === true
  )
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href={to || "/"}
        target="_blank"
        rel={`noopener noreferrer ${noFollow ? "nofollow" : ""}`}
        className={className}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    )
  return (
    <GatsbyLink to={to || "/"} className={className} aria-label={ariaLabel}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  noFollow: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
}

Link.defaultProps = {
  target: null,
  noFollow: null,
  className: "",
  onClick: null,
  ariaLabel: "",
}

export default Link
