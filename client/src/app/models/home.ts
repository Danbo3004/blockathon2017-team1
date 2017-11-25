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
  contractAddress: string;
  name: string;
  description: string;
  address: string;
  capacity: HomeCapacity;
  feature: HomeFeature;
  price: number;
  kind: HomeKind;
}

export class HomeCapacity {
  guest: number;
  bedroom: number;
  bed: number;
  bath: number;
}

export class HomeFeature {
  internet: boolean;
  kitchen: boolean;
  iron: boolean;
  hangers: boolean;
}
