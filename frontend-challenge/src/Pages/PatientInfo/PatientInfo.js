import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";


// function PatientInfo() {
//   const { user } = useParams();
//    const { data } = useContext(GlobalContext);

 

//   const filter = findUserInfo(user);

//   return (
//     <>
//       <h1>User Information</h1>
//       <img src={filter.picture.large} />
//       <p>
//         Name: {filter.name.first}
//         {` `} {filter.name.last}
//       </p>
//       <p> Email: {filter.email}</p>
//       <p>Gender: {filter.gender}</p>
//       <p>Phone: {filter.cell}</p>
//       <p>Birthday: {new Date(filter.dob.date).toLocaleDateString()}</p>
//       <p>Nationality: {filter.nat}</p>
//       <p>
//         Address: {filter.location.country}
//         {`, `}
//         {filter.location.city}
//       </p>
//       <p>id: {filter.id.value ? filter.id.value : " No id to show "}</p>

//       <Link to={"/"}>
//         <button>X</button>{" "}
//       </Link>
//     </>
//   );
// }

// export default PatientInfo;
