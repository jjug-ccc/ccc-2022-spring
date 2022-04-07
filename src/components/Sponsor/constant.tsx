import { SponsorLogoProps, SponsorType } from './index';

export const SPONSORS = new Map<
  SponsorType,
  Array<SponsorLogoProps>
>([
    [ 'Session',
      [
          { image: 'ulsystems.png', alt: 'ウルシステムズ株式会社', url: 'https://www.ulsystems.co.jp' },
          { image: 'microsoft.png', alt: '日本マイクロソフト株式会社', url: 'https://azure.microsoft.com/ja-jp/developer/' },
          { image: 'casareal.png', alt: '株式会社カサレアル', url: 'https://www.casareal.co.jp/' },
          { image: 'jfrog.png', alt: 'JFrog', url: 'https://jfrog.co.jp/' },
          { image: 'gmo_internet_group.png', alt: 'GMOインターネットグループ', url: 'https://developers.gmo.jp/' },
          { image: 'techmatrix.png', alt: 'テクマトリックス株式会社', url: 'https://www.techmatrix.co.jp/index.html' },
          { image: 'cdata.png', alt: 'CData Software Japan 合同会社', url: 'https://www.cdata.com/jp/' },
          { image: 'redhat.png', alt: 'レッドハット株式会社', url: 'https://www.redhat.com/ja/global/japan' },
          { image: 'pingcap.png', alt: 'PingCAP株式会社', url: 'https://www.pingcap.co.jp' },
          { image: 'line.png', alt: 'LINE株式会社', url: 'https://engineering.linecorp.com/ja/' },
      ]
    ],
    [
      'Cm',
      [
          { image: 'hey.png', alt: 'ヘイ株式会社', url: 'https://hey.jp/company/' },
          { image: 'jfrog.png', alt: 'JFrog', url: 'https://jfrog.co.jp/' },
          { image: 'softbank.png', alt: 'ソフトバンク株式会社', url: 'https://recruit.softbank.jp/' },
          { image: 'gmo_internet_group.png', alt: 'GMOインターネットグループ', url: 'https://developers.gmo.jp/' },
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
