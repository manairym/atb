export class History {
  num_id_equipement: number;
  num_modification: number;
  userId: number;
  startDate: Date;
  status: string;
  returnDate: Date;
  constructor() {
    this.num_id_equipement = 0;
    this.num_modification = 0;
    this.userId = 0;
    this.startDate = new Date();
    this.status = "";
    this.returnDate = new Date();
  }
}
