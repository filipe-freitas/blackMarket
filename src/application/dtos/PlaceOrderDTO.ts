export default interface PlaceOrderDTO {
  clientDocumentNumber: string;
  items: {
    id: string,
    quantity: number}[];
}
