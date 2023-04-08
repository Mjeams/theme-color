//fonction d'affichage de valuer de la couleur dont l background-
//-color est la valeur de la couleur entrée par l'user
//color: isDarkText ? "#000" : "#FFF", est un booleen c-a-d q si le text est noir alor on montre une couleur noir si non une color blanche
const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty color value",
};

export default Square;
