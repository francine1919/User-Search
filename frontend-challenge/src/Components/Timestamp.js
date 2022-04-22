import React, { useEffect, useState } from "react";
import { ContainerTimestamp } from "./styleHeader";
import loading from "../Assets/images/loading.gif";
export default function Timestamp() {
  const day = new Date().toDateString().replace(" ", ", ");
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <ContainerTimestamp>
      {clock ? (
        <>
          <p>{day}</p>
          <p>{clock}</p>
        </>
      ) : (
        <img src={loading} alt="Loading three dots light blue." />
      )}
    </ContainerTimestamp>
  );
}
