export default interface ICreateCompositionDTO {
  provider_id: string;
  culture_id: string;
  productivity: 1 | 2 | 3;
  product_measures: Array<{
    id: string;
    volume: string;
  }>;
}
