var form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("contact-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Submitted successfully!";
            status.classList.remove('uk-text-danger');
            status.classList.add('uk-text-success');
            window.location.reload();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! Try Again!";
                    status.classList.add('uk-text-danger');
                    status.classList.remove('uk-text-success');
                    window.location.reload();
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! Try Again!";
        status.classList.add('uk-text-danger');
        status.classList.remove('uk-text-success');
        window.location.reload();
    });
}
form.addEventListener("submit", handleSubmit);