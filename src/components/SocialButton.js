import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SocialButtons = ({ currentAuthor, currentQuote, type }) => {
  if (type === 'tumblr') {
    return (
      <StyledSocial
        href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=${encodeURIComponent(currentAuthor)}&content=${encodeURIComponent(currentQuote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
      >
        <img
          className="control-bar__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/Tumblr.svg"
          alt="Logo for tumblr"
        />
      </StyledSocial>
    );
  } else if (type === 'twitter') {
    return (
      <StyledSocial
        href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(currentQuote)} - ${encodeURIComponent(currentAuthor)}`}
      >
        <img
          className="control-bar__icon"
          src="https://upload.wikimedia.org/wikipedia/en/9/9f/Twitter_bird_logo_2012.svg"
          alt="Logo for Twitter"
        />
      </StyledSocial>
    );
  }

  return null;
};

const StyledSocial = styled.a`
  height: 100%;

  .control-bar__icon {
    max-height: 100%;
    padding: 0.3rem 1rem;
  }

  @media only screen and (max-width: 400px) {
    .control-bar__icon {
      height: 1.5rem;
    }
  }
`;

SocialButtons.propTypes = {
  currentQuote: PropTypes.string.isRequired,
  currentAuthor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default SocialButtons;
