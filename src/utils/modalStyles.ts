// utils/modalStyles.ts

const customModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark background
    backdropFilter: "blur(3px)", // Add blur
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
  },
};

export default customModalStyles;
