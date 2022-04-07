import React from 'react'
import config from '../../config'
import Helmet from 'react-helmet'

export type SeoProps = {
    title?: string,
    meta_title?: string,
    meta_desc?: string,
    cover?: string
};

const SEO: React.FC<SeoProps> = (seoProps) => {
    return (
      <Helmet>
          <title>{config.siteTitle}</title>
          {/* General tags */}
          <meta name="description" content={config.siteDescription}/>
          <meta name="theme-color" content={config.themeColor}/>
          {/* OpenGraph tags */}
          <meta property='og:url' content={config.siteUrl} />
          <meta property='og:type' content="website" />
          <meta property='og:title' content={config.siteTitle} />
          <meta property='og:description' content={config.siteDescription} />
          <meta property='og:image' content={config.siteUrl + 'static/images/og_image.png'} />
          <meta property='fb:app_id' content={config.siteFBAppID ? config.siteFBAppID : ''}/>
          {/* Twitter Card tags */}
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:creator' content={config.userTwitter ? config.userTwitter : ''}/>
          <meta name='twitter:title' content={config.siteTitle} />
      </Helmet>
    )
};

export default SEO;
