const SingleColor = ({ color, id }) => {
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  }

  return (
    <div
      className="color"
      style={{ backgroundColor: "#" + color.hex }}
      key={id}
      onClick={async () => await copyToClipboard(color.hex)}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">{color.hex}</p>
    </div>
  );
};

export default SingleColor;
