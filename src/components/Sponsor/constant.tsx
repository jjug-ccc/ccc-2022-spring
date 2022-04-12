import { SponsorLogoProps, SponsorType } from './index';

export const SPONSORS = new Map<
  SponsorType,
  Array<SponsorLogoProps>
>([
    [ 'Session',
      [
          { image: 'microsoft.png', alt: '日本マイクロソフト株式会社', url: 'https://azure.microsoft.com/ja-jp/developer/' },
          { image: 'redhat.png', alt: 'レッドハット株式会社', url: 'https://www.redhat.com/ja/global/japan' },
          { image: 'cdata.png', alt: 'CData Software Japan 合同会社', url: 'https://www.cdata.com/jp/' },
          { image: 'pingcap.png', alt: 'PingCAP株式会社', url: 'https://pingcap.co.jp/?utm_source=jjug_2022&utm_medium=event' },
          { image: 'simplex.png', alt: 'シンプレクス株式会社', url: 'https://www.simplex.inc/ ' },
          { image: 'ulsystems.png', alt: 'ウルシステムズ株式会社', url: 'https://www.ulsystems.co.jp/' },
          { image: 'line.png', alt: 'LINE株式会社', url: 'https://engineering.linecorp.com/ja/' },
          // { image: 'aws.png', alt: 'アマゾン ウェブ サービス ジャパン合同会社', url: 'https://aws.amazon.com/jp/builders-flash/?&sc_channel=el&sc_campaign=builders_flash&sc_geo=japn&sc_content=el_jjug2022_jp&sc_country=jp&sc_outcome=reg&trkCampaign=builders_flash&trk=el_jjug2022_jp&awsf.filter-name=*all' },
          { image: 'gmo_internet_group.png', alt: 'GMOインターネットグループ', url: 'https://developers.gmo.jp/' },
          { image: 'yahoo_japan.png', alt: 'ヤフー株式会社', url: 'https://www.yahoo.co.jp/' },
          { image: 'recruit.png', alt: '株式会社リクルート', url: 'https://www.recruit.co.jp/company/' },
          { image: 'techmatrix.png', alt: 'テクマトリックス株式会社', url: 'https://www.techmatrix.co.jp/product/jtest/index.html' }
      ]
    ],
    [
      'Cm',
      [
          // { image: 'aws.png', alt: 'アマゾン ウェブ サービス ジャパン合同会社', url: 'https://aws.amazon.com/jp/builders-flash/?&sc_channel=el&sc_campaign=builders_flash&sc_geo=japn&sc_content=el_jjug2022_jp&sc_country=jp&sc_outcome=reg&trkCampaign=builders_flash&trk=el_jjug2022_jp&awsf.filter-name=*all' },
          { image: 'gmo_internet_group.png', alt: 'GMOインターネットグループ', url: 'https://developers.gmo.jp/' },
          { image: 'hey.png', alt: 'ヘイ株式会社', url: 'https://hello.hey.jp/' },
          { image: 'm3.png', alt: 'エムスリー株式会社', url: 'https://corporate.m3.com/' },
      ]
    ],
    [
        'Logo',
        [
            { image: 'rakusu.png', alt: '株式会社ラクス', url: 'https://career-recruit.rakus.co.jp/career_engineer/' },
        ]
    ]
  ]
);
