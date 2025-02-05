import React from "react";
import Wrapper from "../assets/wrappers/HeaderPage.tsx";

const Header: React.FC<{ username: string }> = ({ username }) => {
  return (
    <Wrapper>
     ChatBot&nbsp;-&nbsp;{username}
    </Wrapper>
  );
};

export default Header;
