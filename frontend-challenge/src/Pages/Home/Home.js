import React, { useContext } from "react";
import Header from "../../Components/Header";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalConxtet";

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
      background-color: #ddedf5;
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
export default function Home() {
  const data = useContext(GlobalContext);
  const patients = data.data?.map((patient, index) => {
    return (
      <div key={patient.cell}>
        <p>
          {patient.name.first}
          {` `}
          {patient.name.last}
        </p>
      </div>
    );
  });
  const gender = data.data?.map((patient, index) => {
    return (
      <div key={patient.cell}>
        <p>{patient.gender}</p>
      </div>
    );
  });
  const birth = data.data?.map((patient, index) => {
    return (
      <div key={patient.cell}>
        <p>{new Date(patient.dob.date).toLocaleDateString()}</p>
      </div>
    );
  });

  return (
    <>
      <Header />

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
              Name{" "}
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
            <p>Link</p>
          </div>
        </ContaineHomeTable>
      </ContainerHome>
    </>
  );
}
