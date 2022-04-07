import React from 'react';
import './style.scss';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { LINK } from '../../constant';

const About: React.FC = () => {
  const { t, i18n } = useTranslation(); // eslint-disable-line

  const text2Array: Array<string> = t("about.text2", { returnObjects: true });

  return <div className="content">
    <p>{t("about.text1")}</p>
    <dl>
      <dt>{t("about.title.nightSeminar")}</dt>
      <dd>{t("about.data.nightSeminar")}</dd>
      <dt>{t("about.title.jjugccc")}</dt>
      <dd>{t("about.data.jjugccc")}</dd>
      <dt>{t("about.title.instructorDispatch")}</dt>
      <dd>{t("about.data.instructorDispatch")}</dd>
      <dt>{t("about.title.internationalConferences")}</dt>
      <dd>{t("about.data.internationalConferences")}</dd>
    </dl>
    <p>{text2Array[0]}<a href={LINK.officialSite} target="blank" rel="noopener">{text2Array[1]}</a>{text2Array[2]}<a href={LINK.doorKeeper} target="blank" rel="noopener">{text2Array[3]}</a>{text2Array[4]}</p>
  </div>
};

export default About;
