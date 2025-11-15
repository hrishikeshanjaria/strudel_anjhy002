import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { getD3Data } from "../console-monkey-patch";
import "./SoundGraph.css";

function SoundGraph({ isPlaying }) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const [rngArray, setRngArray] = useState([]);

    const maxItems = 50;
    const timeOut = 400;
    const maxValue = 1;

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            const arr = getD3Data();
            if (arr && arr.length > 0) {
                setRngArray([...arr.slice(-maxItems)]);
            }
        }, timeOut);
        return () => clearInterval(interval);
    }, [isPlaying]);

    function LogToNum(input) {
        if (!input) return 0;
        var stringArray = input.split(/(\s+)/);
        for (const item of stringArray) {
            if (item.startsWith("gain:")) {
                let val = item.substring(5);
                return Number(val);
            }
        }
        return 0;
    }

    return (
        <div ref={wrapperRef} className="soundgraph-container">
            <h5 className="soundgraph-title">Sound Graph</h5>
            <svg ref={svgRef} className="soundgraph-svg"></svg>
        </div>
    );
}

export default SoundGraph;
