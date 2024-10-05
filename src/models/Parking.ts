import { v4 as uuidv4 } from 'uuid';

type GPS = {
  latitude: number;
  longitude: number;
};

export class Parking {
  id: string;
  name: string;
  cityId: number;
  location: GPS;
  numberOfSpots: number;
  opened: boolean;
  hourlyRate: number;
  parkIds: number[];

  constructor(name: string, cityId: number, location: GPS, numberOfSpots: number, hourlyRate: number, opened: boolean) {
    this.id = uuidv4();
    this.name = name;
    this.cityId = cityId;
    this.location = location;
    this.numberOfSpots = numberOfSpots;
    this.opened = opened;
    this.hourlyRate = hourlyRate;
    this.parkIds = [];
  }
}