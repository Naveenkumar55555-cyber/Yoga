const select = document.getElementById('select');

document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://yogasewaapi.herokuapp.com/asanas')
        .then((options) => {
            options = options.data;
            let out = "";

            for (let option of options) {
                out += `<option>${option.name.en} | ${option.name.sn}</option>`;
            }
            document.getElementById('select').innerHTML += out;
        });
});

select.addEventListener('change', () => {
    axios.get(`https://yogasewaapi.herokuapp.com/asanas/${select.selectedIndex}`)
        .then((data) => {
            data = data.data;
            document.getElementById('name').innerText = data.name.en;
            document.getElementById('body').innerText = data.body;
            document.getElementById('img').innerHTML = `<img alt="${data.name.en}" src="${data.img}"  width="300" height="300">`;
        });
});