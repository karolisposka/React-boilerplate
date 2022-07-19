import React, { useState } from "react";
import * as S from "./MapContainer.styles";
import LocationMarker from "../locationMarker/LocationMarker";
import LocationCard from "../locationCard/LocationCard";
import GoogleMapReact from "google-map-react";

const center = {
  lat: 55.19,
  lng: 23.54,
};

const MapContainer = ({ locations }) => {
  const [locationInfo, setLocationInfo] = useState();
  return (
    <S.Container>
      <S.MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCf9XUnBdPSgcuEG-o9uzQ2jKPkUCfIRDQ",
          }}
          defaultZoom={7}
          defaultCenter={center}
        >
          {locations &&
            locations.map((item) => (
              <LocationMarker
                lat={item.lat}
                lng={item.lng}
                type={item.type}
                handleClick={() => {
                  return setLocationInfo({
                    title: item.title,
                    text: item.description,
                    nearBy: item.near,
                  });
                }}
              />
            ))}
        </GoogleMapReact>
        {locationInfo && (
          <LocationCard
            title={locationInfo.title}
            text={locationInfo.text}
            nearBy={locationInfo.nearBy}
          />
        )}
      </S.MapContainer>
    </S.Container>
  );
};

export default MapContainer;
