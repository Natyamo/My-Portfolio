"use client";

import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

type Props = {
  children: React.ReactNode;
};

const HandDrawnUnderline: React.FC<Props> = ({ children }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (svgRef.current && textRef.current) {
      const width = textRef.current.offsetWidth;
      const height = 15;
      svgRef.current.innerHTML = "";

      const rc = rough.svg(svgRef.current);

      //デザイン編集
      const line = rc.line(0, height / 2, width, height / 2, {
        stroke: "rgba(31,186,195,0.9)",  // ← 線の色
        strokeWidth: 4,     // ← 線の太さ
        roughness: 4,       // ← 手書き感 (大きいほど揺れる)
        seed: 1,
      });
      svgRef.current.appendChild(line);
    }
  }, [children]);

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <div ref={textRef} style={{ display: "inline-block" }}>
        {children}
      </div>
      <svg
        ref={svgRef}
        width="100%"
        height={12}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default HandDrawnUnderline;