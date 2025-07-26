const Logo = ({
  size = 32,
  variant = "blue",
  includeText = false,
  className = "",
  style = {},
}) => {
  // Map variants to SVG file names
  const svgFiles = {
    blue: includeText ? "/logo-with-text.svg" : "/logo-blue.svg",
    yellow: "/logo-yellow.svg",
    green: "/logo-green.svg",
    purple: "/logo-purple.svg",
    monochrome: "/logo-monochrome.svg",
  };

  // Get the appropriate SVG file
  const svgSrc = svgFiles[variant] || svgFiles.blue;

  // For includeText, we need different dimensions
  const width = includeText ? size * 3 : size;
  const height = size;

  return (
    <img
      src={svgSrc}
      alt="Sticky Notes Logo"
      width={width}
      height={height}
      className={className}
      style={{
        display: "block",
        ...style,
      }}
    />
  );
};

export default Logo;
