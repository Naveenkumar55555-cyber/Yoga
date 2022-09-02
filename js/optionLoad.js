document.addEventListener('DOMContentLoaded', () => {
    fetch('https://yoga-sewa-api.herokuapp.com/asanas')
        .then((response) => {
            return response.json();
        })
        .then((options) => {
            let out = "";

            for (let option of options) {
                out += `
                    <option>${option.name.en}</option>
                `;
            }
            document.getElementById('select').innerHTML += out;
        });
});