import React, { useContext, useState } from "react";
import Header from "../../Components/Header";
import { GlobalContext } from "../../Global/GlobalContext";
import loading from "../../Assets/images/loading.gif";
import { useNavigate } from "react-router-dom";
import {
  ContainerButton,
  ContainerHome,
  ImageLoading,
  StyledTable,
} from "./styled";

export default function Home() {
  const navigate = useNavigate();
  const goToDetails = (user) => {
    navigate(`/user/${user}`);
  };

  const { data, isLoading, setIsModalOpen } = useContext(GlobalContext);

  const [name, setName] = useState("");
  // const [asc, SetAsc] = useState(false);
  // const [desc, SetDesc] = useState(true);
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const filteredUser = data
    ?.filter((user) => {
      return user.name.first.toLowerCase().includes(name.toLowerCase());
    })
    .map((user) => {
      return (
        <tr key={user.login.uuid}>
          <td>{user.name.first}</td>
          <td>{user.gender}</td>
          <td>{new Date(user.dob.date).toLocaleDateString()}</td>
          <td>
            <ContainerButton
              onClick={() => {
                setIsModalOpen(true);
                goToDetails(user.login.uuid);
              }}
            >
              Details
            </ContainerButton>
          </td>
        </tr>
      );
    });

  return (
    <>
      <Header />
      {isLoading ? (
        <ImageLoading src={loading} alt="Loading three dots light blue." />
      ) : (
        <ContainerHome>
          <p>Search for an user by name or see user details.</p>

          <form>
            <input
              type={"text"}
              placeholder="Searching"
              onChange={onChangeName}
            />
          </form>
          <StyledTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Birth</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredUser.length === 0 ? (
                <tr>
                  <td>"User not found"</td>
                </tr>
              ) : (
                filteredUser
              )}
            </tbody>
          </StyledTable>
        </ContainerHome>
      )}
    </>
  );
}
