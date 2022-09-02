function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById('_name').value,
        to_name: "Team",
        message: `${document.getElementById('_mail').value}
        
        ${document.getElementById('_message').value}`,
    };

    emailjs.send('gmail', 'template_30dv6mg', tempParams)
        .then(function(res) {
            console.log(res.status);
        });
}