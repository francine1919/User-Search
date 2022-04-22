import React from "react";
import {
  HeaderContainer,
  HeaderContainerBottomSection,
  HeaderContainerTopSection,
} from "./styleHeader";
import Timestamp from "./Timestamp";

function Header() {
   return (
     <HeaderContainer>
       <HeaderContainerTopSection/>
       <HeaderContainerBottomSection>
         <div>
           <img
             src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-person-logistics-victoruler-flat-victoruler.png"
             alt="company logo"
           />
           <p>Find Person</p>
         </div>
         <Timestamp />
       </HeaderContainerBottomSection>
     </HeaderContainer>
   );
}

export default Header;
