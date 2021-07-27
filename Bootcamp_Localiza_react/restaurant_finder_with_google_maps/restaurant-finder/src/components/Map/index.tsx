// @ts-nocheck

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

import { setRestaurants, setRestaurant } from "../../redux/modules/restaurants";

export function MapContainer(props: any) {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);

  const { google, query, praceId } = props;
  const [map, setMap] = useState(null);
  const [lastQuery, setLastQuery] = useState("");

  useEffect(() => {
    if (query !== lastQuery) {
      setLastQuery(query);
      searchByQuery(query);
    }
  }, [query, searchByQuery]);

  useEffect(() => {
    if (placeId) {
      getRestaurantByID(placeId);
    }
  }, [placeID]);

  function getRestaurantByID(placeId) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      placeId,
      fields: [
        "name",
        "opening_hours",
        "formatted_address",
        "formatted_phone_number",
      ],
    };

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
        dispatch(setRestaurant(place));
      }
    });
  }

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
          dispatch(setRestaurants(results));
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
        dispatch(setRestaurants(results));
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
      {...props}
    >
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "",
  language: "pt-BR",
})(MapContainer);
