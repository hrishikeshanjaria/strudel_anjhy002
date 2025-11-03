import "./DJControls.css";

function DJControls({ songText, s1, setS1, d1, setD1, d2, setD2, onProcess, setCpm, cpm, setVolume, volume}) {
    const handleToggle = (setter, currentValue, key) => {
        const newValue = !currentValue;
        setter(newValue);
        let processed = songText;

        if (key === "s1") {
            if (newValue) processed = processed.replaceAll("<s1>", "");
            else processed = processed.replaceAll("<s1>", "_");
        } else {
            if (s1) processed = processed.replaceAll("<s1>", "");
            else processed = processed.replaceAll("<s1>", "_");
        }

        if (key === "d1") {
            if (newValue) processed = processed.replaceAll("<d1>", "");
            else processed = processed.replaceAll("<d1>", "_");
        } else {
            if (d1) processed = processed.replaceAll("<d1>", "");
            else processed = processed.replaceAll("<d1>", "_");
        }

        if (key === "d2") {
            if (newValue) processed = processed.replaceAll("<d2>", "");
            else processed = processed.replaceAll("<d2>", "_");
        } else {
            if (d2) processed = processed.replaceAll("<d2>", "");
            else processed = processed.replaceAll("<d2>", "_");
        }

        onProcess(processed);
    };


    const handleCpm = (newValue) => {
        setCpm(newValue);
        let processed = songText;
        processed = processed.replaceAll("<cpm>", newValue);
        onProcess(processed);
    }

    const handleVolume = (newVolume) => {
        setVolume(newVolume);
        let processed = songText;
        processed = processed.replaceAll("<volume>", newVolume);
        onProcess(processed);
    }

    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="cpm_label">@</span>
                <input type="text" className="form-control" id="cpm_text_input" placeholder="120" value={cpm}
                    aria-label="cpm" aria-describedby="cpm_label" onChange={(e) => handleCpm(e.target.value)} />

                
            </div>
            <label htmlFor="volume_range" className="form-label">Volume</label>
            <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" value={volume} onChange={(e) => handleVolume(e.target.value)} />


            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="s1" checked={s1} onChange={() => handleToggle(setS1, s1, "s1")} />
                <label className="form-check-label" htmlFor="s1">
                    🎹
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="d1" checked={d1} onChange={() => handleToggle(setD1, d1, "d1")} />
                <label className="form-check-label" htmlFor="d1">
                    🥁
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="d2" checked={d2} onChange={() => handleToggle(setD2, d2, "d2")} />
                <label className="form-check-label" htmlFor="d2">
                    🥁
                </label>
            </div>
        </>
    );
}

export default DJControls;