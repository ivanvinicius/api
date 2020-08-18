export default interface ICreateUserDTO {
  city_id?: string;
  name: string;
  email: string;
  password: string;
  provider: boolean;
}
