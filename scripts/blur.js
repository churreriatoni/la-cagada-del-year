
const $participants = document.querySelectorAll(".participant-container");
const $persons  = []

$participants.forEach(($participant) => {
    $boxes = $participant.querySelectorAll(".participant-box")
    $boxes.forEach(($box) => {
        $persons.push($box);
    })
    
});


month_number= {
    "enero": 0,
    "febrero": 1,
    "marzo": 2,
    "abril": 3,
    "mayo": 4,
    "junio": 5,
    "julio": 6,
    "agosto": 7,
    "septiembre": 8,
    "octubre": 9,
    "noviembre": 10,
    "diciembre": 11
}

month_name = {
    0: "enero",
    1: "febrero",
    2: "marzo",
    3: "abril",
    4: "mayo",
    5: "junio",
    6: "julio",
    7: "agosto",
    8: "septiembre",
    9: "octubre",
    10: "noviembre",
    11: "diciembre"
}

//Cagadas del mes actual
$months = [];
$jp = [];
$bote = [];
$neyen = [];
$daniel = [];
$pablo = [];

$datos = [];

$data_per_month = {
    "month": String,
    "javier": Number,
    "juanpe": Number,
    "neyen": Number,
    "daniel": Number,
    "pablo": Number
}


fetch("https://sheets.googleapis.com/v4/spreadsheets/1uULL2ZIjum7VEx1pWGFIM9zoHa96ot6zMSeWutABC6M/values/2023-24?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {
    $months = data.values[0];
    $bote = data.values[1];
    $jp = data.values[2];
    $pablo = data.values[3];
    $daniel = data.values[4];
    $neyen = data.values[5];

    for(let i = 1; i < $months.length; i++) {
        $datos.push([
            {name:"javier", cagadas:$bote[i]},
            {name:"juanpe", cagadas:$jp[i]},
            {name:"pablo", cagadas:$pablo[i]},
            {name:"daniel", cagadas:$daniel[i]},
            {name:"neyen", cagadas:$neyen[i]}]
        );
    }


});

    function ordenarCagadasMesActual(){
        let date = new Date();
        console.log($datos[date.getMonth()].sort((a, b) => a.cagadas - b.cagadas).reverse());
    }

    function ordenarCagadas(month3){
        window.location.href = "./participants-pages/rankings.html";
        console.log($datos[month_number[month3]].sort((a, b) => a.cagadas - b.cagadas).reverse());
    }

$persons.forEach(($person) => {
    console.log("HESFASF")
    $person.addEventListener('mouseenter', () => {
        
        $myPerson = $person;
        console.log($myPerson.innerText)

        $persons.forEach(($person) => {
            
            $person.style.filter = "blur(3px) grayscale(1.1)";
            $person.style.scale = "1";
            $person.style.zIndex = "1";
            $myPerson.style.transition = "0.3s all ease-in-out";
        })


        $myPerson.style.filter = "blur(0px)";
        $myPerson.style.contrast = "1.1";
        $myPerson.style.scale = "1.05";
        $myPerson.style.boxShadow = "0px 0px 10px 5px black";
        $myPerson.style.zIndex = "2";
        $myPerson.style.transition = "0.3s ease-in-out";
    })

    $person.addEventListener('mouseleave', () => {
        $myPerson = $person;

        $persons.forEach(($person) => {
            $person.style.filter = "blur(0px)";
            $person.style.scale = "1";
            $person.style.zIndex = "1";
            $myPerson.style.transition = "0.3s all ease-in-out";
        })

        $myPerson.style.scale = "1";
        $myPerson.style.zIndex = "1";
        $myPerson.style.transition = "0.3s ease-in-out";
        $myPerson.style.boxShadow = "none";

    })})/*

    $article.addEventListener('click', () => {

        $shitter_name = $article.getElementsByTagName("img")[0].getAttribute("alt");
        let card = document.getElementById("detail");
        $shitter_name_lower = $shitter_name.toLowerCase();

        card.innerHTML = `
        <div class="row">
            <h2 id="shitting-name">Las cagadas de ${$shitter_name}</h2>
        </div>
        <div class="data">
            <img class="col-6-md" src="assets/homer-para-pruebas.png" style="scale: 1.1;" alt="*">
            <table class="table-data col-6-md">
                <tr>
                    <th>Enero</th>
                    <td>${$datos[0][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Febrero</th>
                    <td>${$datos[1][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Marzo</th>
                    <td>${$datos[2][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Abril</th>
                    <td>${$datos[3][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Mayo</th>
                    <td>${$datos[4][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Junio</th>
                    <td>${$datos[5][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Julio</th>
                    <td>${$datos[6][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Agosto</th>
                    <td>${$datos[7][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Septiembre</th>
                    <td>${$datos[8][$shitter_name_lower]}</td>
                </tr>
                <tr>    
                    <th>Octubre</th>
                    <td>${$datos[9][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Noviembre</th>
                    <td>${$datos[10][$shitter_name_lower]}</td>
                </tr>
                <tr>
                    <th>Diciembre</th>
                    <td>${$datos[11][$shitter_name_lower]}</td>
                </tr>
            </table>
        </div>
        `
        card.style.backgroundColor = $article.style.backgroundColor;

    })

    $article.addEventListener('click', () => {

        location.href = "https://www.youtube.com/"

    })
})*/
