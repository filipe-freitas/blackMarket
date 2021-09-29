import validateCPF from "../ValidateDocumentNumber";

interface CreateOrderDTO {
  userDocument: string;
  products: {
    productId: string;
    productQty: number;
    productPrice: number;
  }[];
  discountValue: number;
}

interface OrderDTO {
  totalPrice: number;
}

class CreateOrderService {
  public async execute({userDocument, products, discountValue}: CreateOrderDTO): Promise<OrderDTO> { 
    if (!validateCPF(userDocument)) throw new Error("Número de documento do usuário inválido");

    let valorTotal = products.reduce((acc, preco) => {
      return (preco.productPrice * preco.productQty) + acc
    }, 0);

    return {totalPrice: valorTotal - discountValue};
  }
}

export default CreateOrderService;