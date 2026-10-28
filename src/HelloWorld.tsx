
import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();

  const jump = Math.abs(Math.sin(frame * 0.12)) * 65;
  const coinY = Math.sin(frame * 0.1) * 12;
  const coinSpin = Math.abs(Math.sin(frame * 0.12)) * 360;
  const skyGlow = 0.6 + Math.sin(frame * 0.06) * 0.3;

  const pixel = {
    position: "absolute" as const,
    imageRendering: "pixelated" as const,
  };

  return (
    <AbsoluteFill
      style={{
        background: "#10152f",
        overflow: "hidden",
        fontFamily: "monospace",
      }}
    >
      {/* Twinkling stars */}
      {Array.from({ length: 35 }, (_, i) => (
        <div
          key={i}
          style={{
            ...pixel,
            left: `${(i * 37) % 100}%`,
            top: `${(i * 23) % 65}%`,
            width: i % 4 === 0 ? 5 : 3,
            height: i % 4 === 0 ? 5 : 3,
            background: "#ffffff",
            opacity: 0.3 + Math.abs(Math.sin(frame * 0.08 + i)) * 0.7,
          }}
        />
      ))}

      {/* Moon */}
      <div
        style={{
          ...pixel,
          right: 150,
          top: 100,
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "#ffe6a6",
          boxShadow: `0 0 ${40 * skyGlow}px #ffda8066`,
        }}
      />

      {/* Distant mountains */}
      <div
        style={{
          ...pixel,
          bottom: 180,
          left: -30,
          width: "110%",
          height: 300,
          background: "#25345c",
          clipPath:
            "polygon(0 75%, 20% 20%, 35% 65%, 55% 5%, 75% 60%, 90% 25%, 100% 60%, 100% 100%, 0 100%)",
        }}
      />

      {/* Ground */}
      <div
        style={{
          ...pixel,
          bottom: 0,
          width: "100%",
          height: 190,
          background: "#245344",
          borderTop: "10px solid #63b56c",
        }}
      />

      {/* Pixel grass */}
      {Array.from({ length: 25 }, (_, i) => (
        <div
          key={i}
          style={{
            ...pixel,
            left: i * 80,
            bottom: 150,
            width: 24,
            height: 12,
            background: "#8be28b",
          }}
        />
      ))}

      {/* Animated coin */}
      <div
        style={{
          ...pixel,
          left: "65%",
          bottom: 265 + coinY,
          width: 38,
          height: 38,
          background: "#ffcf4a",
          border: "6px solid #ffec8a",
          boxShadow: "4px 4px 0 #b87925",
          transform: `scaleX(${Math.max(0.12, Math.abs(Math.cos(coinSpin * Math.PI / 180)))})`,
        }}
      />

      {/* Pixel character */}
      <div
        style={{
          ...pixel,
          left: "28%",
          bottom: 190 + jump,
          width: 64,
          height: 72,
        }}
      >
        {/* Hair */}
        <div style={{ ...pixel, top: 0, left: 8, width: 48, height: 12, background: "#382b3d" }} />
        <div style={{ ...pixel, top: 8, left: 2, width: 60, height: 22, background: "#f0b58c" }} />

        {/* Eyes */}
        <div style={{ ...pixel, top: 15, left: 15, width: 6, height: 6, background: "#20243d" }} />
        <div style={{ ...pixel, top: 15, right: 15, width: 6, height: 6, background: "#20243d" }} />

        {/* Shirt */}
        <div style={{ ...pixel, top: 30, left: 4, width: 56, height: 28, background: "#48c9e8" }} />

        {/* Arms */}
        <div style={{ ...pixel, top: 34, left: -8, width: 12, height: 25, background: "#f0b58c" }} />
        <div style={{ ...pixel, top: 34, right: -8, width: 12, height: 25, background: "#f0b58c" }} />

        {/* Legs */}
        <div style={{ ...pixel, top: 56, left: 10, width: 16, height: 16, background: "#e7eaf4" }} />
        <div style={{ ...pixel, top: 56, right: 10, width: 16, height: 16, background: "#e7eaf4" }} />
      </div>

      {/* Test label */}
      <div
        style={{
          ...pixel,
          top: 70,
          width: "100%",
          textAlign: "center",
          color: "#ffffff",
          fontSize: 48,
          fontWeight: 900,
          letterSpacing: 5,
          textShadow: "5px 5px 0 #e65c8b",
        }}
      >
        PIXEL TEST 02
      </div>

      <div
        style={{
          ...pixel,
          bottom: 55,
          width: "100%",
          textAlign: "center",
          color: "#d5f7d8",
          fontSize: 22,
          letterSpacing: 4,
        }}
      >
        ANIMATION IS RUNNING
      </div>
    </AbsoluteFill>
  );
};
      
