import Modal from "react-modal";
import { GlobalContext } from "../../Global/GlobalContext";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
Modal.setAppElement("#root");
export const ContainerModal = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 400px;
  p {
    padding: 0;
    margin: 2px;
  }
  img {
    border-radius: 50%;
    width: 150px;
  }
`;
export default function Modals() {
  const navigate = useNavigate();
  const { user } = useParams();
  const { data, setIsModalOpen, isModalOpen } = useContext(GlobalContext);
  const findUserInfo = (loginUuid) => {
    const filter = data.results?.find((user) => {
      return user.login.uuid === loginUuid;
    });
    return filter;
  };

  const filter = findUserInfo(user);
  
  return (
    <>
       <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          navigate("/");
          setIsModalOpen(false);
        }}
        style={{
          overlay: { backgroundColor: "grey" },
          content: {
            color: "blue",
            width: "400px",
            height: "400px",
            margin: "0 auto",
            scrollBehavior: "unset",
            overflow: "hidden",
          },
        }}
      >
        {filter ? (
          <ContainerModal>
            <img src={filter.picture.large} />
            <p>
              Name: {filter.name.first}
              {` `} {filter.name.last}
            </p>
            <p> Email: {filter.email}</p>
            <p>Gender: {filter.gender}</p>
            <p>Phone: {filter.cell}</p>
            <p>Birthday: {new Date(filter.dob.date).toLocaleDateString()}</p>
            <p>Nationality: {filter.nat}</p>{" "}
            <p>
              Address: {filter.location.country}
              {`, `}
              {filter.location.city}
            </p>
            <p>id: {filter.id.value ? filter.id.value : " Not registered "}</p>
            <Link to={"/"}>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </Link>
          </ContainerModal>
        ) : (
          navigate("/")
        )}
      </Modal>
    </>
  );
}
