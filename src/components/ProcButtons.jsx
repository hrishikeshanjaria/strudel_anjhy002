import "./ProcButtons.css";
function ProcButtons({ onPreprocess, onProcAndPlay, songText }) {
    return (
        <>
            <div className="btn-group" id="proc-buttons" role="group" aria-label="Basic mixed styles example">
                <button id="process" className="btn btn-outline-primary" onClick={() => onPreprocess(songText)}>🔁</button>
                <button id="process_play" className="btn btn-outline-primary" onClick={() => onProcAndPlay(songText)}>🔀</button>
            </div>
        </>
    )
}


export default ProcButtons