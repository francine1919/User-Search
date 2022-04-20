import React, { useContext } from "react";
import Header from "../../Components/Header";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalContext";
import loading from "../../Assets/images/loading.gif";
import { useNavigate } from "react-router-dom";
export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    width: 600px;
    font-size: 16px;
    font-weight: bold;
  }
  input {
    width: 600px;
    padding: 12px;
    border: 2px solid #ebeef1;
    background-image: url("https://img.icons8.com/office/26/000000/user.png");
    background-repeat: no-repeat;
    background-position: 596px 6px;
    :hover {
      background-color: #ecedef;
      border: 2px solid lightgray;
    }
  }
`;

const ContaineHomeTable = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 154px);
  border: 2px solid blue;
  width: 620px;
  margin: 30px;
  justify-items: center;

  p {
    border: 1px solid black;
    width: 154px;
    font-size: 16px;
    text-align: center;
  }
`;

const ImageLoading = styled.img`
  display: block;
  margin: 0 auto;
  width: 20%;
`;

export default function Home() {
  const navigate = useNavigate();
  const goToDetails = (user) => {
    navigate(`/user/${user}`);
  };

  const { data, isLoading,setIsModalOpen } = useContext(GlobalContext);
  const patients = data.results?.map((patient) => {
    return (
      <p key={patient.cell}>
        {patient.name.first}
        {` `}
        {patient.name.last}
      </p>
    );
  });
  const gender = data.results?.map((patient) => {
    return <p key={patient.cell}>{patient.gender}</p>;
  });
  const birth = data.results?.map((patient) => {
    return (
      <p key={patient.cell}>
        {new Date(patient.dob.date).toLocaleDateString()}
      </p>
    );
  });

  return (
    <>
      <Header />
      {isLoading ? (
        <ImageLoading src={loading} alt="Loading three dots light blue." />
      ) : (
        <ContainerHome>
          <span>
            <p>
              Um cidadão fez voto de desapego e pobreza. Dispôs de todos os seus
              bens e propriedades, reservou para si apenas duas tangas.
            </p>
          </span>
          <form>
            <input type={"text"} placeholder="Searching" />
          </form>

          <ContaineHomeTable>
            <div>
              <p>
                Name
                <img
                  width="10px"
                  src="https://randomuser.me/api/portraits/men/48.jpg"
                />
              </p>
              {patients}
            </div>
            <div>
              <p>Gender</p>
              {gender}
            </div>
            <div>
              <p>Birth</p>
              {birth}
            </div>
            <div>
              <p>Actions</p>
              {data.results?.map((user) => {
                return (
                  <p
                    key={user.cell}
                    onClick={() => {goToDetails(user.login.uuid); setIsModalOpen(true)}}
                  >
                    Details
                  </p>
                );
              })}
            </div>
          </ContaineHomeTable>
        </ContainerHome>
      )}
    </>
  );
}
