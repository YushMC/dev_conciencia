export class Meditator {
  name: string;
  email: string;
  phone: string;
  id_city: number;
  id_state: number;
  id_country: number;
  birthdate: string;
  password: string;
  user: string;
  photo: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.id_state = 0;
    this.id_city = 0;
    this.id_country = 0;
    this.birthdate = "";
    this.password = "";
    this.user = "";
    this.photo = "";
  }

  dataBody = () => {
    return JSON.stringify({
      name: this.name,
      email: this.email,
      phone: this.phone,
      id_city: this.id_city,
      id_state: this.id_state,
      id_country: this.id_country,
      birthdate: this.birthdate,
      password: this.password,
      user: this.user,
      photo: this.photo,
    });
  };
}
