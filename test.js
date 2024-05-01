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

    const randomName = generateRandomName().replace(/\s/g, '').toLowerCase(); // Remove spaces and convert to lowercase
    const randomNumber = Math.floor(Math.random() * 1000); // Random number for uniqueness

    return `${randomName}${randomNumber}@${randomDomain}`;
}

