function sendMail() {
    Email.send({
        SecureToken : "9b2898ee-d697-43bd-bafc-8298ee2c3011",
        To : 'yogasewa3@gmail.com',
        From : 'yogasewa3@gmail.com',
        Subject : "This is the subject",
        Body : `Name: ${document.getElementById('_name').value} <br>
                Email: ${document.getElementById('_mail').value} <br>
                Message: ${document.getElementById('_message').value}`
    }).then(
      message => alert(message)
    );
}

function reset() {
    document.getElementById('_name').value = '';
    document.getElementById('_mail').value = '';
    document.getElementById('_message').value = '';
}