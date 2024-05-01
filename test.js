function generateRandomName() {
    const firstNames = ["John", "Emma", "Michael", "Olivia", "William", "Sophia", "James", "Isabella", "Daniel", "Mia"];
    const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
}

function generateRandomEmail() {
    const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com"];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];

    const randomName = generateRandomName().replace(/\s/g, '').toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000); // Random number for uniqueness

    return `${randomName}${randomNumber}@${randomDomain}`;
}


function createRandomContactNumber() {
    const dialingCodes = ["02", "03", "07", "08"];
    const randomDialingCode = dialingCodes[Math.floor(Math.random() * dialingCodes.length)];
    const randomDigit = Math.floor(10000000 + Math.random() * 90000000);

    return `+61${randomDialingCode}${randomDigit}`;
}

function checkCheckboxesRandomly() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = Math.random() >= 0.5;
    });
}

function processFormSubmission() {
    document.getElementById('mat-input-7').value = generateRandomName();
    document.getElementById('mat-input-8').value = generateRandomEmail();
    document.getElementById('mat-input-9').value = createRandomContactNumber();


}

function performMultipleSubmissions() {
    for (let i = 0; i < 20; i++) {
        setTimeout(processFormSubmission, i * 6000);
    }
}

document.querySelector('.mat-button-wrapper').click();
setTimeout(performMultipleSubmissions, 3000);