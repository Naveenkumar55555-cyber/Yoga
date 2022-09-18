function sendMail() {
    Email.send({
        SecureToken: "9b2898ee-d697-43bd-bafc-8298ee2c3011",
        To: 'yogasewa3@gmail.com',
        From: 'yogasewa3@gmail.com',
        Subject: "New Submission on Contact Form",
        Body: `Name: ${document.getElementById('_name').value} <br>
               Email: ${document.getElementById('_mail').value} <br>
               Message: ${document.getElementById('_msg').value}`
    }).then(
        message => alert(message)
    );
    reset();
}

function reset() {
    document.getElementById('_name').value = '';
    document.getElementById('_mail').value = '';
    document.getElementById('_msg').value = '';
}