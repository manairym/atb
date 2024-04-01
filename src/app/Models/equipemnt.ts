export class Equipemnt {
  num_id_equipement: number;
  category: string;
  entryDate: Date;
  exitDate: Date;
  state : string
  status: string;
  constructor() {
    this.num_id_equipement = 0;
    this.category = "";
    this.entryDate = new Date();
    this.exitDate = new Date();
    this.state = "";
    this.status = "";
  }
}
