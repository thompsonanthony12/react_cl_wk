import { Children, createContext, useContext, useState } from "react";

const ColorContext = createContext;
const ColorProvider = ({ Children }) => {
  const [colors, setColors] = useState({
    primary: "bg-blue-500",
    secondary: "bg-green-500",
    tertiary: "bg-black",
  });
  return (
    <ColorContext.provider value={(colors, setColors)}>
      {Children}
    </ColorContext.provider>
  );
};
function useColors() {
  const context = useContext(ColorContext);
  if (!context) {
    throw new eror("");
  }
  return context;
}
export { ColorProvider, useColors };
