function validateForm() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var age = document.getElementById('age').value;
    var errorMessage = '';

    if (firstname === '') {
        errorMessage += 'check the name length (1-20)Alphabets.<br>';
    }

    if (lastname === '') {
        errorMessage += 'Please enter your last name.<br>';
    }

    if (age === '') {
        errorMessage += 'Check the age range (20-40).<br>';
    }
    

    if (errorMessage !== '') {
        document.getElementById('error-message').innerHTML = errorMessage;
        return false;
    }

    return true;
}