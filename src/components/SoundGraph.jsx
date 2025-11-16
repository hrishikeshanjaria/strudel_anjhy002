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

    useEffect(() => {
        if (!svgRef.current || rngArray.length === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = wrapperRef.current.clientWidth;
        const width = containerWidth;
        const height = 150;
        const margin = 40;

        const xScale = d3.scaleLinear()
            .domain([0, rngArray.length - 1])
            .range([margin, width - margin]);

        const yScale = d3.scaleLinear()
            .domain([0, maxValue])
            .range([height - margin, margin]);

        const yGrid = d3.axisLeft(yScale)
            .ticks(5)
            .tickSize(-width + margin * 2)
            .tickFormat("");

        svg.append("g")
            .attr("class", "y-grid")
            .attr("transform", `translate(${margin},0)`)
            .call(yGrid);

        const defs = svg.append("defs");
        const gradient = defs.append("linearGradient")
            .attr("id", "line-gradient")
            .attr("x1", "0%")
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%");

        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "lime");

        gradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "magenta");

        const values = rngArray.map(d => LogToNum(d));

        const lineGen = d3.line()
            .x((d, i) => xScale(i))
            .y(d => yScale(d))
            .curve(d3.curveCatmullRom.alpha(0.4));

        svg.append("path")
            .datum(values)
            .attr("class", "sound-line")
            .attr("d", lineGen);

        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin},0)`)
            .call(d3.axisLeft(yScale).ticks(5));
    }, [rngArray]);

    return (
        <div ref={wrapperRef} className="soundgraph-container">
            <h5 className="soundgraph-title">Sound Graph</h5>
            <svg ref={svgRef} className="soundgraph-svg"></svg>
        </div>
    );
}

export default SoundGraph;
