import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalConxtet";

function PatientInfo() {
  const { user } = useParams();
  const { data } = useContext(GlobalContext);

  const findUserInfo = (loginUuid) => {
    const filter = data.results?.find((user) => {
      return user.login.uuid === loginUuid;
    });
    return filter;
  };

  const filter = findUserInfo(user);

  return (
    <>
      {filter ? (
        <>
          <h1>User Information</h1>
          <img src={filter.picture.large} />
          <p>
            Name: {filter.name.first}
            {` `} {filter.name.last}
          </p>
          <p> Email: {filter.email}</p>
          <p>Gender: {filter.gender}</p>
          <p>Phone: {filter.cell}</p>
          <p>Birthday: {new Date(filter.dob.date).toLocaleDateString()}</p>
          <p>Nationality: {filter.nat}</p>
          <p>
            Address: {filter.location.country}
            {`, `}
            {filter.location.city}
          </p>
          <p>id: {filter.id.value ? filter.id.value : " No id to show "}</p>
        </>
      ) : (
        <div>
          <Link to={"/"}>
            <button>Back to home</button>{" "}
          </Link>
          ID not found, user does not have a valid id.
        </div>
      )}
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
}

export default PatientInfo;
