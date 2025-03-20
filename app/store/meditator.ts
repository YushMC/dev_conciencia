export class Meditator {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  birthdate: string;
  password: string;
  user: string;
  photo: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.name = "";
    this.phone = "";
    this.state = "";
    this.city = "";
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
      city: this.city,
      state: this.state,
      birthdate: this.birthdate,
      password: this.password,
      user: this.user,
      photo: this.photo,
    });
  };
}
