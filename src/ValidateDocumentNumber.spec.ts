import validateCPF from "./ValidateDocumentNumber"; './ValidateDocumentNumber';

describe('Validating a CPF number', () => {
  it('should validate a valid CPF number', () => {
    expect(validateCPF('892.078.830-82')).toBeTruthy();
  });

  it('should not validate an invalid CPF number', () => {
    expect(validateCPF('111.222.333-44')).toBeFalsy();
  });

  it('should not validate a CPF compound by the same digits', () => {
    expect(validateCPF('111.111.111-11')).toBeFalsy();
  });

  it('should not validae a CPF number missing or exceding digits', () => {
    expect(validateCPF('892.078-82')).toBeFalsy();
    expect(validateCPF('892.078.8300-82')).toBeFalsy();
  });

  it('should not validate an empty parameter', () => {
    expect(validateCPF('')).toBeFalsy();
  });
});