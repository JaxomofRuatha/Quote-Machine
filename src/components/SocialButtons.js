import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SocialButtons = ({ currentAuthor, currentQuote }) => (
  <StyledNav className="control-bar__social">
    <a
      href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=${encodeURIComponent(
        currentAuthor
      )}&content=${encodeURIComponent(
        currentQuote
      )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
    >
      <img
        className="control-bar__icon"
        src="https://upload.wikimedia.org/wikipedia/commons/4/43/Tumblr.svg"
        alt="Logo for tumblr"
      />
    </a>
    <a
      href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
        currentQuote
      )} - ${encodeURIComponent(currentAuthor)}`}
    >
      <img
        className="control-bar__icon"
        src="https://upload.wikimedia.org/wikipedia/en/9/9f/Twitter_bird_logo_2012.svg"
        alt="Logo for Twitter"
      />
    </a>
  </StyledNav>
);

const StyledNav = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .control-bar__icon {
    height: 3rem;
    max-width: 3rem;
    padding: 0.3rem 1rem;
  }
`;

SocialButtons.propTypes = {
  currentQuote: PropTypes.string,
  currentAuthor: PropTypes.string
};

SocialButtons.defaultProps = {
  currentQuote: 'Loading...',
  currentAuthor: ''
};

export default SocialButtons;
