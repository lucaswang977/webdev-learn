import './App.scss';
import logo from './assets/logo.svg';
import screenMockups from './assets/screen-mockups.svg';
import iconCommunities from './assets/icon-communities.svg';
import iconMessages from './assets/icon-messages.svg';
import IllustratorGrowTogether from './assets/illustration-grow-together.svg?react';
import IllustratorFlowingConversations from './assets/illustration-flowing-conversation.svg?react';
import IllustratorYourUsers from './assets/illustration-your-users.svg?react';
import iconEmail from './assets/icon-email.svg';
import iconPhone from './assets/icon-phone.svg';
import IconFacebook from './assets/icon-facebook.svg?react';
import IconInstagram from './assets/icon-instagram.svg?react';
import IconTwitter from './assets/icon-twitter.svg?react';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <button className="header__button">Try it free</button>
      </header>
      <main>
        <section className="hero">
          <p className="hero__title">Build The Community Your Fans Will Love</p>
          <p className="hero__subtitle">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="hero__button">Get Started For Free</button>
        </section>
        <section className="picture">
          <img src={screenMockups} alt="Screen Mockups" />
        </section>
        <section className="numbers">
          <div className="numbers__item">
            <div className="numbers__item__icon">
              <img src={iconCommunities} alt="" />
            </div>
            <div className="numbers__item__number">1.4k+</div>
            <div className="numbers__item__description">Communities Formed</div>
          </div>
          <div className="numbers__item">
            <div className="numbers__item__icon">
              <img src={iconMessages} alt="" />
            </div>
            <div className="numbers__item__number">2.7m+</div>
            <div className="numbers__item__description">Messages Sent</div>
          </div>
        </section>
        <section className="features">
          <div className="features__item">
            <div className="features__item__container">
              <IllustratorGrowTogether
                className="features__item__container__img"
                viewBox="0 0 1023.46 837.84"
              />
              <div className="features__item__container__wrapper">
                <p className="features__item__container__wrapper__title">
                  Grow Together
                </p>
                <p className="features__item__container__wrapper__description">
                  Generate meaningful discussions with your audience and build a
                  strong, loyal community. Think of the insightful conversations
                  you miss out on with a feedback form.
                </p>
              </div>
            </div>
          </div>
          <div className="features__item">
            <div className="features__item__container">
              <IllustratorFlowingConversations
                className="features__item__container__img"
                viewBox="0 0 1125.12 800.94"
              />
              <div className="features__item__container__wrapper">
                <p className="features__item__container__wrapper__title">
                  Flowing Conversations
                </p>
                <p className="features__item__container__wrapper__description">
                  You wouldn&apos;t paginate a conversation in real life, so why
                  do it online? Our threads have just-in-time loading for a more
                  natural flow.
                </p>
              </div>
            </div>
          </div>
          <div className="features__item">
            <div className="features__item__container">
              <IllustratorYourUsers
                className="features__item__container__img"
                viewBox="0 0 1077.87 813.02"
              />
              <div className="features__item__container__wrapper">
                <p className="features__item__container__wrapper__title">
                  Your Users
                </p>
                <p className="features__item__container__wrapper__description">
                  It takes no time at all to integrate Huddle with your
                  app&apos;s authentication solution. This means, once signed in
                  to your app, your users can start chatting immediately.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="callout">
          <div className="callout__title">Ready To Build Your Community?</div>
          <button className="callout__button">Get Started For Free</button>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <section className="footer__newsletter">
            <p className="footer__newsletter__title">Newsletter</p>
            <p className="footer__newsletter__description">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We&apos;ll never send you spam or pass on your
              email address
            </p>
            <form action="post" className="footer__newsletter__form">
              <input type="text" className="footer__newsletter__form__email" />
              <button
                className="footer__newsletter__form__submit"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </section>
          <section className="footer__contact">
            <div className="footer__contact__logo">
              <img src={logo} alt="" />
            </div>
            <p className="footer__contact__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <div className="footer__contact__item">
              <img
                src={iconPhone}
                alt=""
                className="footer__contact__item__left"
              />
              <p className="footer__contact__item__info">
                Phone: +1-543-123-4567
              </p>
            </div>
            <div className="footer__contact__item">
              <img
                src={iconEmail}
                alt=""
                className="footer__contact__item__left"
              />
              <p className="footer__contact__item__info">example@huddle.com</p>
            </div>
            <div className="footer__contact__sns">
              <IconFacebook className="footer__contact__sns__item" />
              <IconInstagram className="footer__contact__sns__item" />
              <IconTwitter className="footer__contact__sns__item" />
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default App;
