import React from 'react';

export class SocialButtons extends React.Component {
  
  render () {
    return (
      <div id="sm-links">
        <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=" + encodeURIComponent(this.props.currentAuthor) + "&content=" + encodeURIComponent(this.props.currentQuote) + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"}><img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Tumblr.svg" className="sm-icon" alt="tumblr-icon" /></a>
        <a href={"https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent(this.props.currentQuote) + " - " + encodeURIComponent(this.props.currentAuthor)}><img src="https://upload.wikimedia.org/wikipedia/en/9/9f/Twitter_bird_logo_2012.svg" className="sm-icon" alt="twitter-icon" /></a>
      </div>
    )
  }
}