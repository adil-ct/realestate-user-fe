import Header from "../Header";
import HeaderNews from "../HeaderNews";
import { WrapHeader } from "./styles";

const HeaderContainer = () => {
  return (
    <WrapHeader>
      <HeaderNews />
      <Header />
    </WrapHeader>
  );
};

export default HeaderContainer;
