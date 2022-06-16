import React from 'react';

const MoviePlayer : React.FC = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <figure className="image is-16by9">
                            <iframe className="has-ratio" src="https://www.youtube.com/embed/iKIZcoGM0lw" frameBorder="0" allowFullScreen/>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <div className="buttons">
                            <a className="button is-primary" href="#" target="_blank" rel="noopener noreferrer">アンカンファレンス会場（Zoom）</a>
                            <a className="button is-link" href="#" target="_blank" rel="noopener noreferrer">アンケート</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviePlayer;
