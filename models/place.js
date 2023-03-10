export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = {lat: location.lat, lng: location.lng}; // {lat: 0.13234343 lgt: 1.34242343}
    this.id = id
  }
}
