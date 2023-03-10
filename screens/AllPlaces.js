import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlaceList from "../components/Place/PlaceList";
import { fetchPlaces } from "../util/database";

function AllPlaces({route}) {

  const [loadedPlace, setLoadedPlace] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces(){
      const places = await fetchPlaces();
      setLoadedPlace(places);
    }
    if(isFocused){
      loadPlaces();
      // setLoadedPlace(curPlaces => [...curPlaces, route.params.place])
    }
  },[isFocused])

  return <PlaceList places={loadedPlace} />;
}

export default AllPlaces;
