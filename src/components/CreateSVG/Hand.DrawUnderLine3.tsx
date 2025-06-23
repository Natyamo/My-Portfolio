import { AnimationProps } from "@/types/type";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import rough from "roughjs/bundled/rough.esm";

const HandDrawnCircle: React.FC<AnimationProps> = ({
  children,
  animate = false,
  trigger = false,
  duration = 500,
  delay = 0,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useLayoutEffect(() => {
    if (svgRef.current && textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      svgRef.current.innerHTML = "";

      // 楕円のパディング
      const paddingX = 12;
      const paddingY = 8;

      svgRef.current.setAttribute("width", `${width + paddingX * 2}`);
      svgRef.current.setAttribute("height", `${height + paddingY * 2}`);

      const rc = rough.svg(svgRef.current);
      const ellipse = rc.ellipse(
        (width + paddingX * 2) / 2,
        (height + paddingY * 2) / 2,
        width + paddingX,
        height + paddingY,
        {
          stroke: "rgba(31,186,195,0.9)",
          strokeWidth: 3,
          roughness: 2,
          seed: 2,
          fill: undefined,
        }
      );
      svgRef.current.appendChild(ellipse);

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

  useEffect(() => {
    if (svgRef.current && animate && pathLength > 0) {
      const path = svgRef.current.querySelector("path");
      if (path) {
        if (trigger) {
          // ホバー時：線が現れる
          path.style.transition = "none";
          path.style.strokeDashoffset = `${pathLength}`;
          setTimeout(() => {
            path.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`;
            path.style.strokeDashoffset = "0";
          }, 20);
        } else {
          // ホバー解除時：線が消える
          const slowDuration = duration * 2;
          path.style.transition = `stroke-dashoffset ${slowDuration}ms cubic-bezier(0.4,0,0.2,1) 0ms`;
          path.style.strokeDashoffset = `-${pathLength}`;
        }
      }
    }
  }, [trigger, animate, duration, delay, pathLength]);

  return (
    <span>
      <span ref={textRef}>{children}</span>
      <svg
        ref={svgRef}
        className="absolute top-0 -translate-x-3 -translate-y-1 pointer-events-none"
        style={{ display: "block" }}
      />
    </span>
  );
};

export default HandDrawnCircle;

