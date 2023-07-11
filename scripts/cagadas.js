
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

colors = {
    0: "gold",
    1: "#C0C0C0",
    2: "#CD7F32",
    3: "rgb(209, 243, 193)",
    4: "rgb(209, 243, 193)"
}

//Cagadas del mes actual
$months = [];
$jp = [];
$bote = [];
$neyen = [];
$daniel = [];
$pablo = [];


$datos_mes_actual = [];
$datos_max_cagadas = [];
$datos_media_mes = [];
$datos_total_cagadas = [];

const filters = document.querySelectorAll('.nav-link')

$data_per_month = {
    "month": String,
    "javier": Number,
    "juanpe": Number,
    "neyen": Number,
    "daniel": Number,
    "pablo": Number
}

$ranking_name = document.getElementsByClassName("participantes-header");
let date = new Date()
$ranking_name[0].innerHTML = month_name[date.getMonth()].charAt(0).toUpperCase() + month_name[date.getMonth()].slice(1);

fetch("https://sheets.googleapis.com/v4/spreadsheets/1uULL2ZIjum7VEx1pWGFIM9zoHa96ot6zMSeWutABC6M/values/dia-mas-cagadas?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {
    $datos_max_cagadas = [
        {name:data.values[0][0], cagadas:parseInt(data.values[0][1])},
        {name:data.values[1][0], cagadas:parseInt(data.values[1][1])},
        {name:data.values[2][0], cagadas:parseInt(data.values[2][1])},
        {name:data.values[3][0], cagadas:parseInt(data.values[3][1])},
        {name:data.values[4][0], cagadas:parseInt(data.values[4][1])}
    ];
    


    $dia_mas_cagadas = $datos_max_cagadas.sort((a, b) => {
        if(a.cagadas==b.cagadas){
            return 0
        } 
        if(a.cagadas>b.cagadas){
            return -1
        } 
        return 1
    } )
})

fetch("https://sheets.googleapis.com/v4/spreadsheets/1uULL2ZIjum7VEx1pWGFIM9zoHa96ot6zMSeWutABC6M/values/total?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {
    $datos_media_cagadas = [
        {name:data.values[1][0], cagadas:parseFloat(data.values[1][2].replace(',', '.'))},
        {name:data.values[2][0], cagadas:parseFloat(data.values[2][2].replace(',', '.'))},
        {name:data.values[3][0], cagadas:parseFloat(data.values[3][2].replace(',', '.'))},
        {name:data.values[4][0], cagadas:parseFloat(data.values[4][2].replace(',', '.'))},
        {name:data.values[5][0], cagadas:parseFloat(data.values[5][2].replace(',', '.'))}
    ];
    

    $datos_media_mes = $datos_media_cagadas.sort((a, b) => {
        if(a.cagadas==b.cagadas){
            return 0
        } 
        if(a.cagadas>b.cagadas){
            return -1
        } 
        return 1
    } )
})

fetch("https://sheets.googleapis.com/v4/spreadsheets/1uULL2ZIjum7VEx1pWGFIM9zoHa96ot6zMSeWutABC6M/values/total?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {
    $datos_total = [
        {name:data.values[1][0], cagadas:parseFloat(data.values[1][1])},
        {name:data.values[2][0], cagadas:parseFloat(data.values[2][1])},
        {name:data.values[3][0], cagadas:parseFloat(data.values[3][1])},
        {name:data.values[4][0], cagadas:parseFloat(data.values[4][1])},
        {name:data.values[5][0], cagadas:parseFloat(data.values[5][1])}
    ];
    

    $datos_total_cagadas = $datos_total.sort((a, b) => {
        if(a.cagadas==b.cagadas){
            return 0
        } 
        if(a.cagadas>b.cagadas){
            return -1
        } 
        return 1
    } )
})

fetch("https://sheets.googleapis.com/v4/spreadsheets/1uULL2ZIjum7VEx1pWGFIM9zoHa96ot6zMSeWutABC6M/values/2023-24?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {
    $months = data.values[0];
    $bote = data.values[1];
    $jp = data.values[2];
    $pablo = data.values[3];
    $daniel = data.values[4];
    $neyen = data.values[5];

    asignarValoresVacios($bote)
    asignarValoresVacios($jp)
    asignarValoresVacios($pablo)
    asignarValoresVacios($daniel)
    asignarValoresVacios($neyen)




    for(let i = 1; i < $months.length; i++) {
        $datos_mes_actual.push([
            {name:"javier", cagadas:parseInt($bote[i])},
            {name:"juanpe", cagadas:parseInt($jp[i])},
            {name:"pablo", cagadas:parseInt($pablo[i])},
            {name:"daniel", cagadas:parseInt($daniel[i])},
            {name:"neyen", cagadas:parseInt($neyen[i])}]
        );
    }

    ordenarCagadasMesActual();

});

filters.forEach((filter) => {
    filter.addEventListener('click', () =>{
        
        $('.navbar-collapse').collapse('hide');

        filters.forEach((filter) => {
            filter.style.setProperty('color', 'gray');
        })

        filter.style.setProperty('color', 'black', 'important');

    });
});

function asignarValoresVacios(array){
    for(let i = 0; i < array.length; i++) {
        if (array[i] == ""){
            array[i] = "0";
        }
    }
}

function cagadasMesActual(){
    $ranking_name = document.getElementsByClassName("participantes-header");
    let date = new Date()
    $ranking_name[0].innerHTML =  month_name[date.getMonth()].charAt(0).toUpperCase() + month_name[date.getMonth()].slice(1);
}

function mediaCagadas(){
    $ranking_name = document.getElementsByClassName("participantes-header");
    $ranking_name[0].innerHTML = "Media de cagadas/mes"

    $container_month = document.getElementById("classification")
    $container_month.innerHTML = ``;
    for(let i = 0; i < $datos_media_mes.length; i++) {

        upperName = $datos_media_mes[i].name.toUpperCase();

        $background_color = colors[i];

        $container_month.innerHTML += `
        <div class="card my-3" style="width: 18rem;">
            <img src="./assets/homer-para-pruebas2.png" style="background:linear-gradient( to top left, ${$background_color}, #eee, ${$background_color}); border-top-left-radius:15px; border-top-right-radius:15px;" class="card-img-top" alt="...">
            <div class="card-body">
                <h1 class="card-title" style="font-size:40px">${upperName}</h1>
                <div style="display: flex; justify-content: space-between;"><p style="text-align: end; font-size:30px;" class="card-text">${$datos_media_mes[i].cagadas}</p> <p style="text-align: end; font-size:30px; font-weight:bold;">${i+1}</p></div>
            </div>
        </div>
        
        `;   
    }
}

function cagadasTotalesYear(){
    $ranking_name = document.getElementsByClassName("participantes-header");
    $ranking_name[0].innerHTML = "Cagadas totales del año"

    $container_month = document.getElementById("classification")
    $container_month.innerHTML = ``;
    for(let i = 0; i < $datos_total_cagadas.length; i++) {

        upperName = $datos_total_cagadas[i].name.toUpperCase();

        $background_color = colors[i];

        $container_month.innerHTML += `
        <div class="card my-3" style="width: 18rem;">
            <img src="./assets/homer-para-pruebas2.png" style="background:linear-gradient( to top left, ${$background_color}, #eee, ${$background_color}); border-top-left-radius:15px; border-top-right-radius:15px;" class="card-img-top" alt="...">
            <div class="card-body">
                <h1 class="card-title" style="font-size:40px">${upperName}</h1>
                <div style="display: flex; justify-content: space-between;"><p style="text-align: end; font-size:30px;" class="card-text">${$datos_total_cagadas[i].cagadas}</p> <p style="text-align: end; font-size:30px; font-weight:bold;">${i+1}</p></div>
            </div>
        </div>
        
        `;     
    }
}

function masCagadasEnUnDia(){
    $ranking_name = document.getElementsByClassName("participantes-header");
    $ranking_name[0].innerHTML = "Más cagadas en un día"

    $container_month = document.getElementById("classification")
    $container_month.innerHTML = ``;
    for(let i = 0; i < $dia_mas_cagadas.length; i++) {

        upperName = $dia_mas_cagadas[i].name.toUpperCase();

        $background_color = colors[i];

        $container_month.innerHTML += `
        <div class="card my-3" style="width: 18rem;">
            <img src="./assets/homer-para-pruebas2.png" style="background:linear-gradient( to top left, ${$background_color}, #eee, ${$background_color}); border-top-left-radius:15px; border-top-right-radius:15px;" class="card-img-top" alt="...">
            <div class="card-body">
                <h1 class="card-title" style="font-size:40px">${upperName}</h1>
                <div style="display: flex; justify-content: space-between;"><p style="text-align: end; font-size:30px;" class="card-text">${$dia_mas_cagadas[i].cagadas}</p> <p style="text-align: end; font-size:30px; font-weight:bold;">${i+1}</p></div>
            </div>
        </div>
        
        `;      
    }
}

function ordenarCagadasMesActual(){
    
    let date = new Date();
    
    $ranking_name = document.getElementsByClassName("participantes-header");
    $ranking_name[0].innerHTML = month_name[date.getMonth()].charAt(0).toUpperCase() + month_name[date.getMonth()].slice(1);


    $cagadas_mes = $datos_mes_actual[date.getMonth()].sort((a, b) => {
        if(a.cagadas==b.cagadas){
            return 0
        } 
        if(a.cagadas>b.cagadas){
            return -1
        } 
        return 1
    } )
    $container_month = document.getElementById("classification")
    $container_month.innerHTML = ``;
    time_animation = 1/$cagadas_mes.length;
    for(let i = 0; i < $cagadas_mes.length; i++) {

            upperName = $cagadas_mes[i].name.toUpperCase();

            $background_color = colors[i];

                $container_month.innerHTML += `
                    <div class="card my-3" style="width: 18rem;">
                        <img src="./assets/homer-para-pruebas2.png" style="background:linear-gradient( to top left, ${$background_color}, #eee, ${$background_color}); border-top-left-radius:15px; border-top-right-radius:15px;" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h1 class="card-title" style="font-size:40px">${upperName}</h1>
                            <div style="display: flex; justify-content: space-between;"><p style="text-align: end; font-size:30px;" class="card-text">${$cagadas_mes[i].cagadas}</p> <p style="text-align: end; font-size:30px; font-weight:bold;">${i+1}</p></div>
                        </div>
                    </div>
                    
                    `;  

    }
    
}

