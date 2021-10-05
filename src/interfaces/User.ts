export default interface User {
  id?: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  dateOfBirth: Date;
  mobile: string;
}
