export default interface ICreateUserDTO {
  adress_id?: string;
  name: string;
  email: string;
  password: string;
  provider: boolean;
}
