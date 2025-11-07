import "./PlayButtons.css";
function PlayButtons({ onPlay, onStop }) {
    return (
        <>
            <div className="btn-group" id="play-stop-grp" role="group" aria-label="Basic mixed styles example">
                <button id="play" className="btn btn-outline-primary" onClick={onPlay}>▶️</button>
                <button id="stop" className="btn btn-outline-primary" onClick={onStop}>⏹️</button>
            </div>
        </>
    );
}

export default PlayButtons;