"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import rough from "roughjs/bin/rough";

type Props = {
  children: React.ReactNode;
  animate?: boolean;
  trigger?: boolean;
  duration?: number;
  delay?: number;
};

const HandDrawnUnderline2: React.FC<Props> = ({
  children,
  animate = false,
  trigger = false,
  duration = 700,
  delay = 0,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [pathLength, setPathLength] = useState(0);

  // 初期描画時にdashoffsetをセット（transitionなし）
  useLayoutEffect(() => {
    if (svgRef.current && textRef.current) {
      const width = textRef.current.offsetWidth;
      const height = 13;
      svgRef.current.innerHTML = "";

      const rc = rough.svg(svgRef.current);
      const line = rc.line(0, height / 2, width, height / 2, {
        stroke: "rgba(31,186,195,0.9)",
        strokeWidth: 3,
        roughness: 2,
        seed: 1,
      });
      svgRef.current.appendChild(line);

      const path = svgRef.current.querySelector("path");
      if (path) {
        const len = path.getTotalLength();
        setPathLength(len);
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
        path.style.transition = "none";
      }
    }
  }, [children]);

  // ホバー時に線が左から右に現れるアニメーション
  useEffect(() => {
    if (svgRef.current && animate && pathLength > 0) {
      const path = svgRef.current.querySelector("path");
      if (path) {
        if (trigger) {
          // 1. まず線を非表示にする
          path.style.transition = "none";
          path.style.strokeDashoffset = `${pathLength}`;
          // 2. 次のフレームでアニメーションを開始
          setTimeout(() => {
            path.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`;
            path.style.strokeDashoffset = "0";
          }, 20);
        } else {
          // ホバー解除時は逆アニメーション
          path.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4,0,0.2,1) 0ms`;
          path.style.strokeDashoffset = `${pathLength}`;
        }
      }
    }
  }, [trigger, animate, duration, delay, pathLength]);

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

export default HandDrawnUnderline2;