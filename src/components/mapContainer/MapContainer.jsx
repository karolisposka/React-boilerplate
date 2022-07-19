import React from "react";
import * as S from "./MapContainer.styles";
import GoogleMapReact from "google-map-react";

const center = {
  lat: 23.8813,
  lng: 55.1694,
};

const MapContainer = () => {
  return (
    <S.Container>
      <S.Section>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCf9XUnBdPSgcuEG-o9uzQ2jKPkUCfIRDQ" }}
          defaultZoom={10}
          defaultCenter={center}
        ></GoogleMapReact>
      </S.Section>
    </S.Container>
  );
};

export default MapContainer;
