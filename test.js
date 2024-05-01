async function generateRandomName() {
    return new Promise(resolve => {
        const firstNames = ["John", "Emma", "Michael", "Olivia", "William", "Sophia", "James", "Isabella", "Daniel", "Mia"];
        const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];

        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        resolve(`${randomFirstName} ${randomLastName}`);
    });
}

async function generateRandomEmail() {
    return new Promise(resolve => {
        const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com"];
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];

        generateRandomName().then(randomName => {
            const randomNumber = Math.floor(Math.random() * 1000); // Random number for uniqueness
            resolve(`${randomName.replace(/\s/g, '').toLowerCase()}${randomNumber}@${randomDomain}`);
        });
    });
}

async function createRandomContactNumber() {
    return new Promise(resolve => {
        const dialingCodes = ["02", "03", "07", "08"];
        const randomDialingCode = dialingCodes[Math.floor(Math.random() * dialingCodes.length)];
        const randomDigit = Math.floor(10000000 + Math.random() * 90000000);

        resolve(`+61${randomDialingCode}${randomDigit}`);
    });
}

async function checkCheckboxesRandomly() {
    return new Promise(resolve => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = Math.random() >= 0.5;
        });
        resolve();
    });
}

async function processFormSubmission() {
    await generateRandomName().then(randomName => document.getElementById('mat-input-7').value = randomName);
    await generateRandomEmail().then(randomEmail => document.getElementById('mat-input-8').value = randomEmail);
    await createRandomContactNumber().then(randomContactNumber => document.getElementById('mat-input-9').value = randomContactNumber);

    const dropdowns = ['mat-input-12', 'mat-input-15', 'mat-input-13', 'mat-input-10', 'mat-input-14'];
    dropdowns.forEach(dropdownId => {
        const dropdownOptions = document.querySelectorAll(`#${dropdownId} option`);
        dropdownOptions[Math.floor(Math.random() * dropdownOptions.length)].selected = true;
    });

    await checkCheckboxesRandomly();

    // Submit the form
    const form = document.querySelector('.enquiry-submit').form;
    form.submit();
}

async function performMultipleSubmissions() {
    for (let i = 0; i < 20; i++) {
        await processFormSubmission();
        await new Promise(resolve => setTimeout(resolve, 6000));
    }
}

document.querySelector('.mat-button-wrapper').click();
setTimeout(performMultipleSubmissions, 3000);
