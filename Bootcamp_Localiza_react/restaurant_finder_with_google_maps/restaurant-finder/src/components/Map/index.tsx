import { GoogleApiWrapper, Map } from "google-maps-react";

export function MapContainer(props: any) {
  const { google } = props;

  function searchNearby() {}

  return <Map google={google} centerAroundCurrentLocation />;
}

export default GoogleApiWrapper({
  apiKey: "",
  language: "pt-BR",
})(MapContainer);
