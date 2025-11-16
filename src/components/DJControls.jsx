import "./DJControls.css";

function DJControls({ s1, setS1, d1, setD1, d2, setD2, onProcess, setCpm, cpm, setVolume, volume, sets1Vol, setd1Vol, setd2Vol, s1Vol, d1Vol, d2Vol }) {

    const handleToggle = (setter, currentValue) => {
        setter(!currentValue);
    };

    const handleVolume = (newVolume, setter) => {
        setter(newVolume);
    }

    return (
        <>
           
            <div className="container text-center">
                <div className="row">
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="cpm_label">cpm</span>
                            <input type="text" className="form-control" id="cpm_text_input" placeholder="120" value={cpm} aria-label="cpm" aria-describedby="cpm_label" onChange={(e) => { setCpm(e.target.value); onProcess(); }} disabled />
                            <input type="range" className="form-range" min="100" max="160" step="1" id="volume_range" value={cpm} onChange={(e) => { setCpm(e.target.value); onProcess(); }} />
                        </div>
                    </div>
                    <div className="col-3">
                        <span className="input-group-text" id="volume_label">Main Volume</span>
                        <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" value={volume} onChange={(e) => setVolume(e.target.value, "mVol")} />
                    </div>
                    <div className="col-3">
                        {/*<span className="input-group-text">Coming Soon</span>*/}
                        <button className="btn btn-outline-primary w-100">
                            Save JSON
                        </button>
                    </div>
                    <div className="col-3">
                        {/*<span className="input-group-text">Coming Soon</span>*/}
                        <button className="btn btn-outline-danger w-100">
                            Load JSON
                        </button>
                    </div>
                    

                </div>            


                <div className="row justify-content-center">
                    <div className="col-2 d-flex flex-column align-items-center">
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="s1" checked={s1} onChange={() => handleToggle(setS1, s1)} />
                            <label className="form-check-label fs-2" htmlFor="s1">
                                🎹
                            </label>
                        </div>
                        <input type="range" className="form-range vertical-slider" min="1" max="500" step="10" value={s1Vol} onChange={(e) => handleVolume(e.target.value, sets1Vol)} />
                    </div>

                    <div className="col-2 d-flex flex-column align-items-center">
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="d1" checked={d1} onChange={() => handleToggle(setD1, d1)}/>
                            <label className="form-check-label fs-2" htmlFor="d1">
                                🥁
                            </label>
                        </div>
                        <input type="range" className="form-range vertical-slider" min="0" max="1" step="0.01" value={d1Vol} onChange={(e) => handleVolume(e.target.value, setd1Vol)} />
                    </div>

                    <div className="col-2 d-flex flex-column align-items-center">
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="d2" checked={d2} onChange={() => handleToggle(setD2, d2)} />
                            <label className="form-check-label fs-2" htmlFor="d2">
                                🥁
                            </label>
                        </div>
                        <input type="range" className="form-range vertical-slider" min="0" max="1" step="0.01" value={d2Vol} onChange={(e) => handleVolume(e.target.value, setd2Vol)} />
                    </div>
                    <div className="col-4 ms-">
                        <textarea className="form-control" rows="6" placeholder="JSON will appear here..."></textarea>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DJControls;