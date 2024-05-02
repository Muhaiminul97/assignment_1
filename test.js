async function generateName() {
    return new Promise(resolve => {
        const firstNames = ["Muh","Ara","James"];
        const lastNames = ["John", "Will", "Jonson"];

        const setFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const setLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        resolve(`${setFirstName} ${setLastName}`);
    });
}

async function generateEmail() {
    return new Promise(resolve => {
        let domainType = ["gmail.com", "yahoo.com", "station.com"];
        const randomDomain = domainType[Math.floor(Math.random() * domainType.length)];

        generateName().then(randomName => {
            const randomNumber = Math.floor(Math.random() * 1000);
            resolve(`${randomName.replace(/\s/g, '').toLowerCase()}${randomNumber}@${randomDomain}`);
        });
    });
}

async function createRandomContact() {
        let starterDigit = "4";
        for (let n = 1; n <= 8; n++) {
            starterDigit += Math.floor(Math.random() * 10);
        }

        let mob = document.getElementById("phone");
        mob.click();
        mob.value = starterDigit;


}

async function checkMultiCheckboxes() {
    return new Promise(resolve => {
        const checkboxesSelect = document.querySelectorAll('input[type="checkbox"]');
        checkboxesSelect.forEach(checkbox => {
            checkbox.checked = Math.random() >= 0.5;
        });
        resolve();
    });
}

async function dataFormSubmission() {
    await generateName().then(randomName => document.getElementById('mat-input-7').value = randomName);
    await generateEmail().then(randomEmail => document.getElementById('mat-input-8').value = randomEmail);
    await createRandomContact().then(randomContactNumber => document.getElementById('mat-input-9').value = randomContactNumber);

    const dropdownList = ['mat-input-12', 'mat-input-15', 'mat-input-13', 'mat-input-10', 'mat-input-14'];
    dropdownList.forEach(dropdownId => {
        const dropdownOptIn = document.querySelectorAll(`#${dropdownId} option`);
        dropdownOptIn[Math.floor(Math.random() * dropdownOptIn.length)].selected = true;
    });

    await checkMultiCheckboxes();

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
