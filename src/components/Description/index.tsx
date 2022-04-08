import React from 'react';
import './style.scss';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Description : React.FC = () => {
  const { t, i18n } = useTranslation(); // eslint-disable-line

  return <div className="content">
    <p>{t("description.text")}</p>

    <dl>
      <dt>{t("description.title.organizer")}</dt>
      <dd>{t("description.data.organizer")}</dd>
      <dt>{t("description.title.date")}</dt>
      <dd>{t("description.data.date")}</dd>
      <dt>{t("description.title.participationFee")}</dt>
      <dd>{t("description.data.participationFee")}</dd>
      <dt>{t("description.title.hashtag")}</dt>
      <dd><a href="https://twitter.com/search?q=%23jjug_ccc" target="blank" rel="noopener">#jjug_ccc</a>（{t("description.data.hashtag")}）</dd>
    </dl>
  </div>
};

export default Description;
