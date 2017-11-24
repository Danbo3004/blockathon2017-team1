export class Home {
  contractAddress: string;
  name: string;
  description: string;
  address: string;
  capacity: HomeCapacity;
  feature: HomeFeature;
  price: number;
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
