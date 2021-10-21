import validateCPF from "../../src/domain/entities/Cpf";

describe('Validating a CPF number', () => {
  it('should validate a valid CPF number', () => {
    expect(() => new validateCPF('892.078.830-82')).toBeTruthy();
  });

  it('should not validate an invalid CPF number', () => {
    expect(() => new validateCPF('111.222.333-44')).toThrowError('Invalid CPF number');
  });

  it('should not validate a CPF compound by the same digits', () => {
    expect(() => new validateCPF('111.111.111-11')).toThrowError('Invalid CPF number');;
  });

  it('should not validae a CPF number missing or exceding digits', () => {
    expect(() => new validateCPF('892.078-82')).toThrowError('Invalid CPF number');
    expect(() => new validateCPF('892.078.8300-82')).toThrowError('Invalid CPF number');
  });

  it('should not validate an empty parameter', () => {
    expect(() => new validateCPF('')).toThrowError('Invalid CPF number');
  });
});
