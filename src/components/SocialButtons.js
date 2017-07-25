import React from 'react';

export class SocialButtons extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div id="sm-links">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Tumblr.svg" className="sm-icon" />
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/Twitter_bird_logo_2012.svg" className="sm-icon" />
      </div>
    )
  }
}