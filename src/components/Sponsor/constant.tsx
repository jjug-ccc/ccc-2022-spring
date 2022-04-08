import { SponsorLogoProps, SponsorType } from './index';

export const SPONSORS = new Map<
  SponsorType,
  Array<SponsorLogoProps>
>([
    [ 'Session',
      [
          // { image: 'microsoft.png', alt: '日本マイクロソフト株式会社', url: 'https://azure.microsoft.com/ja-jp/developer/' },
          { image: 'redhat.png', alt: 'レッドハット株式会社', url: 'https://www.redhat.com/ja/global/japan' },
          // { image: 'cdata.png', alt: 'CData Software Japan 合同会社', url: 'https://www.cdata.com/jp/' },
          { image: 'pingcap.png', alt: 'PingCAP株式会社', url: 'https://www.pingcap.co.jp' },
          // { image: 'simplex.png', alt: 'シンプレクス株式会社', url: 'https://www.simplex.inc' },
          { image: 'ulsystems.png', alt: 'ウルシステムズ株式会社', url: 'https://www.ulsystems.co.jp' },
          // { image: 'line.png', alt: 'LINE株式会社', url: 'https://engineering.linecorp.com/ja/' },
          // { image: 'aws.png', alt: 'アマゾン ウェブ サービス ジャパン合同会社', url: 'https://aws.amazon.com/jp/' },
          { image: 'gmo_internet_group.png', alt: 'GMOインターネットグループ', url: 'https://developers.gmo.jp/' },
          // { image: 'yahoo_japan.png', alt: 'ヤフー株式会社', url: 'https://about.yahoo.co.jp' },
          { image: 'recruit.png', alt: '株式会社リクルート', url: 'https://recruit-saiyo.jp' },
          // { image: 'techmatrix.png', alt: 'テクマトリックス株式会社', url: 'https://www.techmatrix.co.jp/index.html' }
      ]
    ],
    [
      'Cm',
      [
          { image: 'hey.png', alt: 'ヘイ株式会社', url: 'https://hey.jp/company/' },
          // { image: 'aws.png', alt: 'アマゾン ウェブ サービス ジャパン合同会社', url: 'https://aws.amazon.com/jp/' },
          { image: 'gmo_internet_group.png', alt: 'GMOインターネットグループ', url: 'https://developers.gmo.jp/' },
          { image: 'm3.png', alt: 'エムスリー株式会社', url: 'https://jobs.m3.com/engineer/' },
      ]
    ],
    [
        'Logo',
        [
            { image: 'rakusu.png', alt: '株式会社ラクス', url: 'https://career-recruit.rakus.co.jp/career_engineer/?utm_source=jjug&utm_medium=display&utm_campaign=jjugccc2021spring' },
        ]
    ]
  ]
);
