// @ts-nocheck

import { GoogleApiWrapper, Map } from "google-maps-react";
import { useEffect, useState } from "react";

export function MapContainer(props: any) {
  const { google, query } = props;
  const [map, setMap] = useState(null);
  const [lastQuery, setLastQuery] = useState("");

  useEffect(() => {
    if (query !== lastQuery) {
      setLastQuery(query);
      searchByQuery(query);
    }
  }, [query, searchByQuery]);

  function searchByQuery(query) {
    if (map && query !== lastQuery) {
      const service = new google.maps.places.PlacesService(map);

      const request = {
        location: map.center,
        radius: "200",
        type: ["restaurant"],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log(results);
        }
      });
    }
  }

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: "20000",
      type: ["restaurant"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: "",
  language: "pt-BR",
})(MapContainer);
