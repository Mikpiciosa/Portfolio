export const Title = ({ name, size, direction, importance, tono, font }) => {
  const sizes = (size) => {
    if (size === "large") {
      return {
        fontSize: "70px",
      };
    }
    if (size === "medium") {
      return {
        fontSize: "40px",
      };
    }
    if (size === "small") {
      return {
        fontSize: "20px",
      };
    }
  };

  const colors = (tono) => {
    if (tono === "title") {
      return {
        color: "#da5aa0",
      };
    }
  };

  const fonts = (font) => {
    if (font === "bebas") {
      return {
        fontFamily: "Bebas Neue",
      };
    }
    if (font === "monst") {
      return {
        fontFamily: "Montserrat",
      };
    }
  };

  const direct = (direction) => {
    if (direction === "left") {
      return {
        textAlign: "left",
      };
    } else if (direction === "center") {
      return {
        textAlign: "center",
      };
    } else {
      return {
        textAlign: "right",
      };
    }
  };

  const TitleTag = importance || "h1";

  const style = {
    ...sizes(size),
    ...direct(direction),
    ...fonts(font),
    ...colors(tono),
  };

  return <TitleTag style={style}>{name}</TitleTag>;
};
