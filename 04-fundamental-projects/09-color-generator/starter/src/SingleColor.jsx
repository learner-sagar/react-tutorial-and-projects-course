import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipboard");
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("clipboard access not available");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
