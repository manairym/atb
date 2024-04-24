export class Equipemnt {
  id: number;
  category: string;
  entree: Date;
  sortie: Date;
  name: string;
  constructor() {
    this.id = 0;
    this.category = "";
    this.name = "";
    this.entree = new Date();
    this.sortie = new Date();
  }
}
