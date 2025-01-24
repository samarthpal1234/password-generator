// Select the input field and button
const passwordbox = document.getElementById("password");
const generateBtn = document.getElementById("createbutton");

// Define password length and character sets
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "?!@#$%^&*";
const allchar = uppercase + lowercase + number + symbol;

// Function to generate a random password
function createpassword() {
    let password = "";

    // Ensure at least one character from each category
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest of the password with random characters
    while (password.length < length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    // Shuffle the password for randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    // Display the password in the input field
    passwordbox.value = password;
}

// Attach event listener to the button
generateBtn.addEventListener("click", createpassword);
