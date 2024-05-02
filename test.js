async function generateName() {
    return new Promise(resolve => {
        const firstNames = ["Muh","Ara","James"];
        const lastNames = ["John", "Will", "Jonson"];

        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        resolve(`${randomFirstName} ${randomLastName}`);
    });
}

async function generateEmail() {
    return new Promise(resolve => {
        const domainType = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "station.com"];
        const randomDomain = domainType[Math.floor(Math.random() * domainType.length)];

        generateName().then(randomName => {
            const randomNumber = Math.floor(Math.random() * 1000);
            resolve(`${randomName.replace(/\s/g, '').toLowerCase()}${randomNumber}@${randomDomain}`);
        });
    });
}

async function createRandomContact() {
    return new Promise(resolve => {
        let starterDigit = "4";
        for (let i = 1; i <= 8; i++) {
            starterDigit += Math.floor(Math.random() * 10);
        }

        let mob = document.getElementById("phone");
        mob.click();
        mob.value = starterDigit;



    });
}

async function checkCheckboxes() {
    return new Promise(resolve => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = Math.random() >= 0.5;
        });
        resolve();
    });
}

async function dataFormSubmission() {
    await generateName().then(randomName => document.getElementById('mat-input-7').value = randomName);
    await generateEmail().then(randomEmail => document.getElementById('mat-input-8').value = randomEmail);
    await createRandomContact().then(randomContactNumber => document.getElementById('mat-input-9').value = randomContactNumber);

    const dropdowns = ['mat-input-12', 'mat-input-15', 'mat-input-13', 'mat-input-10', 'mat-input-14'];
    dropdowns.forEach(dropdownId => {
        const dropdownOptions = document.querySelectorAll(`#${dropdownId} option`);
        dropdownOptions[Math.floor(Math.random() * dropdownOptions.length)].selected = true;
    });

    await checkCheckboxes();

    const form = document.querySelector('.enquiry-submit').form;
    form.submit();
}

async function performMultiSubmissions() {
    for (let i = 0; i < 20; i++) {
        await dataFormSubmission();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

document.querySelector('.mat-button-wrapper').click();
setTimeout(performMultiSubmissions, 3000);
