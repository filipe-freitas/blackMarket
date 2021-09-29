const CPF_NUMBER_LENGTH = 11;

export default function validateCPF(rawCPF: string) {
    if (!rawCPF) return false;
    const CPFNumber = sanitizeCPFNumber(rawCPF);
    if (CPFNumber.length !== CPF_NUMBER_LENGTH) return false;
    if (hasOnlySameDigit(CPFNumber)) return false;

    const validatedNumber = validate(CPFNumber);
    const validatorNumber = extractValidatorNumber(CPFNumber);

    return validatorNumber === validatedNumber;
};

function sanitizeCPFNumber(rawCPF: string): string {
    return rawCPF.replace(/[\D]/g, '');
}

function hasOnlySameDigit(CPFNumber: string): boolean {
    const [firstDigit] = CPFNumber;
    return [...CPFNumber].every(digit => digit === firstDigit);
}

function validate(CPFNumber: string): string {
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

function extractValidatorNumber (CPFNumber: string): string {
    return CPFNumber.substr(-2);
}