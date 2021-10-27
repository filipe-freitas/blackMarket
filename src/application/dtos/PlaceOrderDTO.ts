interface PlaceOrderInput {
  clientDocumentNumber: string;
  items: {
    id: string,
    quantity: number}[];
}

interface PlaceOrderOutput {
  id: string,
  total: number
}

export { PlaceOrderInput, PlaceOrderOutput }