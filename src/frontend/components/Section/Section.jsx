// nodejs library to set properties for components
import PropTypes from "prop-types";

const SectionText = ({ title }) => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "#4270A6" }}>
      <h4 style={{ color: "#fff" }}>{title}</h4>
    </div>
  );
};

SectionText.defaultProps = {
  title: "",
};

SectionText.propTypes = {
  title: PropTypes.string,
};

export default SectionText;
