import validate from './ValidateDocumentNumber';

describe('Validating a CPF number', () => {
  it('should validate a valid CPF number', () => {
    expect(validate('892.078.830-82')).toBeTruthy();
  });

  it('should not validate an invalid CPF number', () => {
    expect(validate('111.222.333-44')).toBeFalsy();
  });

  it('should not validate a CPF compound by the same digits', () => {
    expect(validate('111.111.111-11')).toBeFalsy();
  });

  it('should not validae a CPF number missing or exceding digits', () => {
    expect(validate('892.078-82')).toBeFalsy();
    expect(validate('892.078.8300-82')).toBeFalsy();
  });

  it('should not validate an empty parameter', () => {
    expect(validate('')).toBeFalsy();
  });
});