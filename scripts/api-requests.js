$months = [];
$jp = [];
$bote = [];

$datos = [];

$data_per_month = {
    "month": String,
    "bote": Number,
    "jp": Number
}


fetch("https://sheets.googleapis.com/v4/spreadsheets/1uULL2ZIjum7VEx1pWGFIM9zoHa96ot6zMSeWutABC6M/values/bote-jp?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {
    $months = data.values[0];
    $bote = data.values[1];
    $jp = data.values[2];

    for(let i = 1; i < $months.length; i++) {
        $datos.push({
            "month": $months[i],
            "bote": $bote[i],
            "jp": $jp[i]
        });
    }
    console.log($datos[5].bote);

});

