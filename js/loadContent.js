document.getElementById('select').addEventListener('change', () => {
    fetch('https://yoga-sewa-api.herokuapp.com/asanas')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            document.getElementById('name').innerText = data[select.selectedIndex - 1].name.en;
            document.getElementById('body').innerText = data[select.selectedIndex - 1].body;
            document.getElementById('img').innerHTML = `<img src="${data[select.selectedIndex - 1].img}"  width="300" height="300">`;
        });
});