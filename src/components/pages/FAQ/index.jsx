import React, { Component } from 'react';
import './index.scss';

const faqData = [
  {
    title:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ?',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`
  }
];

const FAQRow = () => {
  const idx = 0;
  return (
    <div className="mb-3 each_faq">
      <div className="faq_title" data-faq="1">
        <span className="fa fa-plus" />
        <span> {faqData[idx].title} </span>
      </div>
      <div id="faq-1" className="faq_details">
        {faqData[idx].text}
      </div>
    </div>
  );
};

const FAQSection = () => (
  <div className="faq mb-5">
    <div className="faq_head">Lorem Ipsum dolor sit amet</div>
    {new Array(4).fill(0).map((v, idx) => {
      const key = `${idx}-${Date.now()}`;
      return <FAQRow key={key} />;
    })}
  </div>
);

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="faq-page">
        <div className="content">
          <div className="content_top">
            <img src="img/kittyFaq.png" />
          </div>
          <div className="content_bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="content_bottom_head mb-5">
                    FREQUENTLY ASKED QUESTIONS
                  </div>
                  {new Array(3).fill(0).map((v, idx) => {
                    const key = `${idx}-${Date.now()}`;
                    return <FAQSection key={key} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
