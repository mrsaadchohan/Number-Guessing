import inquirer from 'inquirer';
async function numberguessing() {
    const sytemnumber = Math.floor(Math.random() * 100);
    const answer = await inquirer.prompt([
        {
            type: "Number",
            name: "guess",
            message: "Enter number between 1 to 10",
        }
    ]);
    const guess = answer.guess;
    console.log(`Your guess is ${guess} \n and system guess is  ${sytemnumber}`);
    if (guess === sytemnumber) {
        console.log("Your guess is correct");
    }
    else {
        console.log("Your guess is incorrect try again");
    }
}
;
async function again() {
}
numberguessing();
