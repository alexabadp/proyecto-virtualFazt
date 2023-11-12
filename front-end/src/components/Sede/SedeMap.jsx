import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./Sede.css";

function SedeMap({ position }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC78fsXg01rMBapBJ_6Fs4IR6bzfw9F8Mo",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map position={position} />;
}

function Map({ position }) {
  const position1 = { lat: -11.9475, lng: -77.0607 };
  const position2 = { lat: -12.00173, lng: -77.00902 };
  const position3 = { lat: -11.9409, lng: -77.0595 };

  return (
    <GoogleMap
      zoom={18}
      center={position}
      mapContainerClassName="map-container"
    >
      <Marker position={position1} />
      <Marker position={position2} />
      <Marker position={position3} />
    </GoogleMap>
  );
}

export default SedeMap;
