import validateCPF from "../ValidateDocumentNumber";

interface CreateOrderDTO {
  userDocument: string;
  products: {
    id: string;
    description: string;
    quantity: number;
    price: number;
  }[];
  discountValue: number;
}

interface OrderDTO {
  totalPrice: number;
}

class CreateOrderService {
  public execute({userDocument, products, discountValue}: CreateOrderDTO): OrderDTO {
    if (!validateCPF(userDocument)) throw new Error('Número de documento do usuário inválido');
    const valorTotal = products.reduce((acc, product) => {
      return (product.price * product.quantity) + acc
    }, 0);

    return {totalPrice: valorTotal - discountValue};
  }
}

export default CreateOrderService;