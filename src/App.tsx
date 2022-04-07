import React from 'react';
import './assets/styles.scss';
import './App.scss';
import NavBar from './components/NavBar';
import SelectLang from './components/SelectLang';
import Footer from './components/Footer';
import Description from './components/Description';
import About from './components/About';
import SEO from './components/SEO';

import './i18n';
import { useTranslation } from 'react-i18next';
import Sponsor from './components/Sponsor';

const App : React.FC = () => {
  const {t, i18n} = useTranslation(); // eslint-disable-line

  return (
    <div className="App">
      <SEO/>
      <NavBar/>
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="section">
                  <h1 className="title is-size-4-mobile">JJUG CCC 2021 Fall</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container has-text-right mt-2">
        <SelectLang/>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="content">
                <h3 className="title has-text-weight-semibold is-size-3 is-size-5-mobile">{t("contentTitle.description")}</h3>
                <Description/>
                <h3 className="title has-text-weight-semibold is-size-3 is-size-5-mobile">{t("contentTitle.aboutJjug")}</h3>
                <About/>
                <h3 className="title has-text-weight-semibold is-size-3 is-size-5-mobile">{t("contentTitle.sponsor")}</h3>
                <h4 className='is-size-4 is-size-5-mobile'>SESSION</h4>
                <Sponsor sponsorType={'Session'}/>
                <h4 className='is-size-4 is-size-5-mobile'>CM</h4>
                <Sponsor sponsorType={'Cm'}/>
                  <h4 className='is-size-4 is-size-5-mobile'>LOGO</h4>
                  <Sponsor sponsorType={'Logo'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
