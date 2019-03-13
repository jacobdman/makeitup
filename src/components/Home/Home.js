import React, { Component } from 'react';
import './Home.css';

class Calendar extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="home-header">
          <div className="home-imagePlaceholder" />
          <h2>It's Your Story</h2>
          <h1 id="MakeItUp">Make It Up!</h1>
          <h1>by Krista</h1>
        </div>
        <div className="home-info">
          <div className="home-imagePlaceholderTwo" />
          <p>
            Only you know the real story. Every hard thing you have experienced
            and overcome, every bit of wisdom you have gained, every moment your
            heart has beat ... or momentarily stopped. And each day another page
            is written that only you will be able to fully read between the
            lines.
            <br />
            <br />
            But you will share excerpts of your story in the way you choose. You
            are the author and the storyteller. One way you reveal parts of the
            plot is through your appearance. No one can judge by your cover, so
            you are in control of how the content is perceived.
            <br />
            <br />
            Makeup is a fantastically subtle, but intentional and effective
            method of telling--even shaping--our stories. It's ironic, really,
            that something we never get to see other than in reflection, will be
            so reflected back to us through those we come across as well as
            absorbed into inner confidence.
            <br />
            <br />
            As a professional makeup artist and hair stylist, I would love to
            help you create the look that expresses your moment. Whether you
            want to portray a natural confidence or something more dramatic, on
            stage or on film, I can help you achieve the look that sends the
            right message. Please contact me to discuss details of how I can
            help coauthor your story.
          </p>
        </div>
        <div className="home-links">
          <div className="home-linkbox">
            <div className="home-linkImagePlaceholder" />
            <h1>Contact</h1>
          </div>
          <div className="home-linkbox">
            <div className="home-linkImagePlaceholder" />
            <h1>Services</h1>
          </div>
          <div className="home-linkbox">
            <div className="home-linkImagePlaceholder" />
            <h1>Portfolio</h1>
          </div>
          <div className="home-linkbox">
            <div className="home-linkImagePlaceholder" />
            <h1>Blog</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
