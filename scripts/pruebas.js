fetch("https://sheets.googleapis.com/v4/spreadsheets/1uULL2ZIjum7VEx1pWGFIM9zoHa96ot6zMSeWutABC6M/values/total?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {

    data.values.forEach(dato => {
        console.log(dato[2])
    });

        
})