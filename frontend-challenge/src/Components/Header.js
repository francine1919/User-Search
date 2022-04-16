import React from "react";
import {
  HeaderContainer,
  HeaderContainerBottomSection,
  HeaderContainerTopSection,
} from "./styleHeader";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContainerTopSection />
      <HeaderContainerBottomSection>
        <div>
          <img
            src="https://img.icons8.com/color/48/000000/company.png"
            alt="company logo"
          />
          <p> Company</p>
        </div>
        <img
          src="https://img.icons8.com/clouds/100/000000/user.png"
          alt="profile"
        />
      </HeaderContainerBottomSection>
    </HeaderContainer>
  );
}

export default Header;
