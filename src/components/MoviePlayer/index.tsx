import React from 'react';

const MoviePlayer : React.FC = () => {
    return (
        <div className="columns">
            <div className="column">
                <div className="content">
                    <figure className="image is-16by9">
                        <iframe className="has-ratio" src="https://www.youtube.com/embed/iKIZcoGM0lw" frameBorder="0" allowFullScreen/>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default MoviePlayer;
