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
  contractAddress: string = '';
  name: string = '';
  description: string = '';
  address: HomeAddress = new HomeAddress();
  capacity: HomeCapacity = new HomeCapacity();
  feature: HomeFeature = new HomeFeature();
  price: number = 0;
  kind: HomeKind = HomeKind.PrivateRoom;
}

export class HomeCapacity {
  guest: number = 0;
  bedroom: number = 0;
  bed: number = 0;
  bath: number = 0;
}

export class HomeFeature {
  internet: boolean = false;
  kitchen: boolean = false;
  iron: boolean = false;
  hangers: boolean = false;
}

export class HomeAddress {
  streetAddress: string = '';
  apt: number = 0;
  state: number = 0;
  country: number = 0;
}
