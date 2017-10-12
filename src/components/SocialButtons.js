import React from 'react';
import PropTypes from 'prop-types';

const SocialButtons = props => (
  <div className="social-buttons">
    <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=${encodeURIComponent(props.currentAuthor)}&content=${encodeURIComponent(props.currentQuote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}><img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Tumblr.svg" className="social-buttons__link" alt="tumblr-icon" /></a>
    <a href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(props.currentQuote)} - ${encodeURIComponent(props.currentAuthor)}`}><img src="https://upload.wikimedia.org/wikipedia/en/9/9f/Twitter_bird_logo_2012.svg" className="social-buttons__link" alt="twitter-icon" /></a>
  </div>
);

SocialButtons.propTypes = {
  currentQuote: PropTypes.string,
  currentAuthor: PropTypes.string
};

SocialButtons.defaultProps = {
  currentQuote: 'Loading...',
  currentAuthor: '',
};

export default SocialButtons;
