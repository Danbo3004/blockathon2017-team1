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
