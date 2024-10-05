import { v4 as uuidv4 } from 'uuid';

export class Park {
  id: string;
  spotId: number;
  startedAt: Date;
  endedAt: Date | null;
  price: number;
  paid: boolean;

  constructor(spotId: number, price: number) {
    this.id = uuidv4();
    this.spotId = spotId;
    this.startedAt = new Date();
    this.endedAt = null;
    this.price = price;
    this.paid = false;
  }

  endParking() {
    this.endedAt = new Date();
    this.paid = true;
  }
}
