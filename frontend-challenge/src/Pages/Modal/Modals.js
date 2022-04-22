import Modal from "react-modal";
import { GlobalContext } from "../../Global/GlobalContext";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContainerModal } from "./styledModal";
Modal.setAppElement("#root");

export default function Modals() {
  const navigate = useNavigate();
  const { user } = useParams();
  const { data, setIsModalOpen, isModalOpen, isLoading } =
    useContext(GlobalContext);

  const findUserInfo = (loginUuid) => {
    const userFound = data?.find((user) => {
      return user.login.uuid === loginUuid;
    });
    return userFound;
  };

  const userFound = findUserInfo(user);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
          navigate("/");
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
        {userFound ? (
          <ContainerModal>
            <img src={userFound.picture.large} />
            <p>
              Name: {userFound.name.first}
              {` `} {userFound.name.last}
            </p>
            <p> Email: {userFound.email}</p>
            <p>Gender: {userFound.gender}</p>
            <p>Phone: {userFound.cell}</p>
            <p>Birthday: {new Date(userFound.dob.date).toLocaleDateString()}</p>
            <p>Nationality: {userFound.nat}</p>{" "}
            <p>
              Address: {userFound.location.country}
              {`, `}
              {userFound.location.city}
            </p>
            <p>
              id: {userFound.id.value ? userFound.id.value : " Not availaible "}
            </p>
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
