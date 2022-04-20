import Modal from "react-modal";
import { GlobalContext } from "../../Global/GlobalContext";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {ContainerModal} from "./styledModal"
Modal.setAppElement("#root");

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
            width: "550px",
            height: "460px",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "60%",
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
            <p>id: {filter.id.value ? filter.id.value : " Not availaible "}</p>
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
