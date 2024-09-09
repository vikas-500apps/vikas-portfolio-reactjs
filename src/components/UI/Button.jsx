import React from "react";

// Utility function to combine class names conditionally
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// React component (JavaScript version)
const ShimmerButton = React.forwardRef(
  (
    {
      shimmerColor = "#ffffff", // Shimmer color from props
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)", // Background color from props
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={{
          "--spread": "90deg",
          "--shimmer-color": shimmerColor, // Shimmer color
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background, // Button background color
        }}
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white",
          "[background:var(--bg)]", // Background color applied from props
          "[border-radius:var(--radius)] dark:text-black",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]"
          )}
        >
          {/* Spark */}
          <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* Spark before */}
            <div
              className="animate-spin-around absolute inset-[-100%] w-auto rotate-0"
              style={{
                background: `conic-gradient(
                  from calc(270deg - (var(--spread) * 0.5)),
                  transparent 0,
                  ${shimmerColor} var(--spread), 
                  transparent var(--spread)
                )`, // Shimmer effect using shimmerColor
              }}
            />
          </div>
        </div>
        {children}

        {/* Highlight */}
        <div
          className={cn(
            "insert-0 absolute h-full w-full",
            "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
          )}
        />

        {/* Backdrop */}
        <div
          className={cn(
            "absolute -z-20",
            "[background:var(--bg)]", // Background color for backdrop
            "[border-radius:var(--radius)] [inset:var(--cut)]"
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";


export default ShimmerButton;




