import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import MapContainer from "../components/mapContainer/MapContainer";
import Loader from "../components/loader/Loader";

const Map = () => {
  const [locations, setLocations] = useState();
  const [error, setError] = useState();
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:8080/v1/locations/get");
      const data = await res.json();
      if (!data) {
        return setError(data.err);
      }
      return setLocations(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navigation />
      {!locations && <Loader />}
      {error && <div>{error}</div>}
      {locations && <MapContainer locations={locations} />}
    </>
  );
};

export default Map;
