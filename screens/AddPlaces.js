import PlaceForm from "../components/Place/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlaces({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlaces;
