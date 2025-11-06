import "./PreprocessTextarea.css";
function PreprocessTextarea({ defaultValue, onChange }) {
    return (
        <>
            <label id="label" htmlFor="exampleFormControlTextarea1" className="form-label">🎶 Text to preprocess:</label>
            <textarea className="form-control" rows="9" defaultValue={defaultValue} onChange={onChange} id="proc"></textarea>
        </>
    );
}

export default PreprocessTextarea;