export default class Cpf {
  readonly CPF_NUMBER_LENGTH = 11;
  value: string;

  constructor(value: string) {
    if(!this.validateCPF(value)) throw new Error('Invalid CPF number');
    this.value = value;
  }

  validateCPF(rawCPF: string) {
    if (!rawCPF) return false;
    const CPFNumber = this.sanitizeCPFNumber(rawCPF);
    if (CPFNumber.length !== this.CPF_NUMBER_LENGTH) return false;
    if (this.hasOnlySameDigit(CPFNumber)) return false;

    const validatedNumber = this.validate(CPFNumber);
    const validatorNumber = this.extractValidatorNumber(CPFNumber);

    return validatorNumber === validatedNumber;
  };

  sanitizeCPFNumber(rawCPF: string): string {
    return rawCPF.replace(/[\D]/g, '');
  }

  hasOnlySameDigit(CPFNumber: string): boolean {
    const [firstDigit] = CPFNumber;
    return [...CPFNumber].every(digit => digit === firstDigit);
  }

  validate(CPFNumber: string): string {
    let firstDigit = 0;
    let secondDigit = 0;

    for (let digit = 0; digit < CPFNumber.length - 2; digit++) {
      firstDigit += (10 - digit) * parseInt(CPFNumber[digit]);
      secondDigit += (11 - digit) * parseInt(CPFNumber[digit]);
    };

    let rest = 0;

    rest = (firstDigit % 11);
    firstDigit = (rest < 2) ? 0 : 11 - rest;

    secondDigit += 2 * firstDigit;

    rest = (secondDigit % 11);
    secondDigit = (rest < 2) ? 0 : 11 - rest;

    const validatedNumber = `${firstDigit}${secondDigit}`;

    return validatedNumber;
  }

  extractValidatorNumber(CPFNumber: string): string {
    return CPFNumber.substr(-2);
  }
}
