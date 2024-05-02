async function generateRandomName() {
    return new Promise(resolve => {
        const firstNames = ["Muh","Ara","James", "Isabella", "Daniel", "Mia"];
        const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis"];

        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        resolve(`${randomFirstName} ${randomLastName}`);
    });
}

async function generateRandomEmail() {
    return new Promise(resolve => {
        const mailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "station.com"];
        const randomDomain = mailDomains[Math.floor(Math.random() * mailDomains.length)];

        generateRandomName().then(randomName => {
            const randomNumber = Math.floor(Math.random() * 1000);
            resolve(`${randomName.replace(/\s/g, '').toLowerCase()}${randomNumber}@${randomDomain}`);
        });
    });
}

async function createRandomContactNumber() {
    return new Promise(resolve => {
        const dialingCodes = ["02", "03", "07", "08"];
        const randomDialingCode = dialingCodes[Math.floor(Math.random() * dialingCodes.length)];
        const randomDigit = Math.floor(100000 + Math.random() * 900000);

        resolve(`${randomDialingCode}${randomDigit}`);
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
