export class User {
  id!: number;
  firstName: string;
  lastName: string;
  email: string;
  password !: string;
  status !: boolean;
  role !: string;
  privilege !: string;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.privilege = "";
  }
}
