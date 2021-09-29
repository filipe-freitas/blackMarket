function validate(documentNumber: String) {
    if (!!!documentNumber) return false;

    if (documentNumber.length < 11 || documentNumber.length > 15) return false;

    documentNumber = documentNumber
        .replaceAll('.', '')
        .replace('-', '')
        .replace(" ", "");

    const validatorNumber = documentNumber.substr(-2);

    try {
        let firstDigit = 0;
        let secondDigit = 0;

        for (let digit = 0; digit < documentNumber.length - 2; digit++) {
            firstDigit += (10 - digit) * parseInt(documentNumber[digit]); //234
            secondDigit += (11 - digit) * parseInt(documentNumber[digit]); //271
        };

        let rest = 0;

        rest = (firstDigit % 11);
        firstDigit = (rest < 2) ? 0 : 11 - rest;

        secondDigit += 2 * firstDigit;

        rest = (secondDigit % 11);
        secondDigit = (rest < 2) ? 0 : 11 - rest;

        return validatorNumber === `${firstDigit}${secondDigit}`;
    } catch (exception) {
        console.error("Erro! - " + exception);
        return false;
    }
}

export default validate;