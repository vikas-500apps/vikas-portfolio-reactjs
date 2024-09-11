import React from "react";

// Utility function to handle conditional class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const gradients = [
  "linear-gradient(to right, #ff7e5f, #feb47b)", 
  "linear-gradient(to right, #6a11cb, #2575fc)", 
  "linear-gradient(to right, #00c6ff, #0072ff)", 
  // Add more gradients as needed
];

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const gradient = gradients[i % gradients.length]; // Cycle through gradients

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full shadow-xl border [--i:${i}]`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderWidth: "2px",
              borderColor: `rgba(255, 255, 255, 0.3)`, // Light border to not overshadow gradient
              background: gradient,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
            }}
          />
        );
      })}
    </div>
  );
});

export default Ripple;
