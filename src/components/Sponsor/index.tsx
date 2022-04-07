import React from 'react';
import { SPONSORS } from './constant';

export type SponsorProps = {
  sponsorType: SponsorType,
};

export type SponsorLogoProps = {
  image: string,
  alt: string,
  url: string,
};

export type SponsorType = 'Session' | 'Cm' | 'Logo';

const Sponsor: React.FC<SponsorProps> = ({sponsorType}) => {
  const sponsors = SPONSORS.get(sponsorType);
  if (sponsors === undefined) {
    return (<div className="columns is-multiline is-mobile"/>);
  }

  return (
    <div className="columns is-multiline is-mobile">
      {
        sponsors.map(
          sponsor =>
            <div key={sponsor.image} className="column is-half-mobile is-one-fifth-desktop">
              <figure className="image is-160x160" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px' }}>
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <img alt={sponsor.alt} src={'/static/images/sponsor/' + sponsor.image}/>
                </a>
              </figure>
            </div>
        )
      }
    </div>
  );
};

export default Sponsor;
