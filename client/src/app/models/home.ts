export enum StepList {
  Place = 0,
  Location = 1,
  Features = 2,
  Price = 3,
  Senses = 4
}

export enum HomeKind {
  PrivateRoom = 1,
  SharedRoom = 2
}

export class Home {
  contractAddress = '';
  name = '';
  description = '';
  address: HomeAddress = new HomeAddress();
  capacity: HomeCapacity = new HomeCapacity();
  feature: HomeFeature = new HomeFeature();
  price = 0;
  kind: HomeKind = HomeKind.PrivateRoom;
  owner: string = '';

  fromJson(json: any) {
    if (!json) {
      return this;
    }

    this.contractAddress = json.contractAddress;
    this.name = json.name;
    this.owner = json.owner;
    this.description = json.description;
    this.price = isNaN(json.price) ? 0 : +json.price;
    this.address.streetAddress = json.streetAddress;
    this.capacity.guest = json.guests;
    this.capacity.bedroom = json.bedroom;
    this.capacity.bed = json.bed;
    this.capacity.bath = json.bathroom;
    this.feature.internet = json.internet;
    this.feature.kitchen = json.kitchen;
    this.feature.iron = json.iron;
    this.feature.hangers = json.hangers;
    return this;
  }
}

export class HomeBooking {
  contractAddress = '';
  checkInDate = new Date();
  checkOutDate = new Date();

  fromJson(json: any) {
    if (!json) {
      return this;
    }

    this.contractAddress = json.contractAddress;
    let startTime = +json.startDate;
    let duration = +json.duration;
    let endTime = startTime + duration;
    this.checkInDate = new Date(startTime);
    this.checkOutDate = new Date(endTime);
    return this;
  }
}

export class HomeCapacity {
  guest = 0;
  bedroom = 0;
  bed = 0;
  bath = 0;
}

export class HomeFeature {
  internet = false;
  kitchen = false;
  iron = false;
  hangers = false;
}

export class HomeAddress {
  streetAddress = '';
  apt = 0;
  state = 0;
  country = 0;
}
