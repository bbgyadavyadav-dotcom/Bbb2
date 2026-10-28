
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();

  const x = interpolate(frame, [0, 120], [-150, 2100], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(
    frame,
    [10, 30, 110, 140],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#10182b",
        overflow: "hidden",
        imageRendering: "pixelated",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "#ffca75",
          top: 120,
          right: 250,
          boxShadow: "0 0 70px #ff9b6240",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 220,
          left: 0,
          width: "100%",
          height: 400,
          background: "#263b5b",
          clipPath:
            "polygon(0 55%, 15% 10%, 30% 65%, 45% 20%, 65% 70%, 80% 25%, 100% 60%, 100% 100%, 0 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 260,
          background: "#18283c",
        }}
      />

      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: 100,
            left: i * 175,
            width: 105,
            height: 100 + ((i * 47) % 100),
            background: "#101b2d",
            borderTop: "5px solid #40516a",
          }}
        >
          {Array.from({ length: 6 }, (_, j) => (
            <div
              key={j}
              style={{
                position: "absolute",
                left: 15 + (j % 3) * 27,
                top: 15 + Math.floor(j / 3) * 30,
                width: 10,
                height: 12,
                background: "#ffd78a",
              }}
            />
          ))}
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          left: x,
          bottom: 100,
          width: 40,
          height: 80,
          background: "#70d6ff",
          boxShadow: "0 -25px 0 -5px #f3c7a5",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -18,
            left: 15,
            width: 8,
            height: 8,
            background: "#18283c",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -18,
            left: 3,
            width: 12,
            height: 18,
            background: "#e6edf7",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -18,
            right: 3,
            width: 12,
            height: 18,
            background: "#e6edf7",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 360,
          width: "100%",
          textAlign: "center",
          color: "#ffffff",
          fontSize: 76,
          fontWeight: 900,
          letterSpacing: 8,
          opacity: titleOpacity,
          textShadow: "6px 6px 0 #40516a",
        }}
      >
        A NEW WORLD
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 45,
          width: "100%",
          textAlign: "center",
          color: "#a8c4e8",
          fontSize: 22,
          letterSpacing: 5,
        }}
      >
        PIXEL STORIES
      </div>
    </AbsoluteFill>
  );
};
