import React, {useEffect, useState} from 'react';
import './styles.scss';
import NavBar from '../NavBar';
import SEO from '../SEO';
import MoviePlayer from "../MoviePlayer";
import TimeTable from "../TimeTable";

export type MovieProps = {
    trackA: string,
    trackB: string,
    trackC: string,
    trackD: string,
    unConferenceLink?: string,
    sessionFormLink?: string,
    eventFormLink?: string,
    embedDomain?: string,
}

function getTrackCode() {

}

const Preview: React.FC = () => {
    const [error, setError] = useState(null);
    const [trackA, setTrackA] = useState("");
    const [trackB, setTrackB] = useState("");
    const [trackC, setTrackC] = useState("");
    const [trackD, setTrackD] = useState("");
    const [unConferenceLink, setUnConferenceLink] = useState("");
    const [sessionFormLink, setSessionFormLink] = useState("");
    const [eventFormLink, setEventFormLink] = useState("");
    const [embedDomain, setEmbedDomain] = useState("");
    const [trackCode, setTrackCode] = useState("");

    useEffect(() => {
        const url = 'https://dl.dropboxusercontent.com/s/fji392ldfqhr3j1/jjug_2022_viewer.json';

        fetch(url, { method: "GET", mode: "cors" })
            .then(res => res.json())
            .then(
                (result) => {
                    setTrackA(result["track_a"]["live_id"]);
                    setTrackB(result["track_b"]["live_id"]);
                    setTrackC(result["track_c"]["live_id"]);
                    setTrackD(result["track_d"]["live_id"]);
                    setUnConferenceLink(result["unconference_link"]);
                    setSessionFormLink(result["session_form_link"]);
                    setEventFormLink(result["event_form_link"]);
                    setEmbedDomain(result["embed_domain"]);
                },
                (error) => {
                    setError(error);
                }
            )
    }, []);

    return (
        <div className="Preview">
            <SEO/>
            <NavBar/>
            <div className="section">
                <div className="container">
                    <MoviePlayer
                        trackA={trackA}
                        trackB={trackB}
                        trackC={trackC}
                        trackD={trackD}
                    />
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <TimeTable/>
                </div>
            </div>
        </div>
    )
};

export default Preview;
