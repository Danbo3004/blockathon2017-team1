export class Venue {
  contractAddress: string;
  name: string;
  description: string;
  address: string;
  capacity: VenueCapacity;
  feature: VenueFeature;
  price: number;
}

export class VenueCapacity {
  guest: number;
  bedroom: number;
  bed: number;
  bath: number;
}

export class VenueFeature {
  internet: boolean;
  kitchen: boolean;
  iron: boolean;
  hangers: boolean;
}
