var wona = 0;
var shipingi_ert_kiloze = 8; //ert kiloze 8  dolari
var qalaqamde = 0;
var girebuleba = 0;
var dolaris_kursi = 0;


function wonis_gadasaxadi(girebuleba, wona) {
    girebuleba = girebuleba + (wona * shipingi_ert_kiloze);
    girebuleba = Number(girebuleba);


    if (girebuleba > 123) {
        girebuleba += girebuleba * 0.18;
    }

    document.getElementById("pasuxi").innerHTML = girebuleba.toFixed(2);

    return girebuleba;
}

function larshi(girebuleba) {
    girebuleba = girebuleba * dolaris_kursi;
    return girebuleba;
}

function miwodeba_qalaqshi(girebuleba) {
    girebuleba = girebuleba + qalaqamde;
    return girebuleba
}


function getRate(from, to) {
    var script = document.createElement('script');
    script.setAttribute('src', "http://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D" + from + to + "%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json&callback=parseExchangeRate");
    document.body.appendChild(script);
}

function parseExchangeRate(data) {
    var name = data.query.results.row.name;
    var rate = parseFloat(data.query.results.row.rate, 10);
    dolaris_kursi = rate;
}

function my_onliad(){
    getRate("USD", "GEL");
}

window.onload = my_onliad;

function aba() {

    girebuleba = document.getElementById("fasi").value;
    wona = document.getElementById("wona").value;
    qalaqamde = document.getElementById("qalaqi").value;

    qalaqamde = Number(qalaqamde);

    girebuleba = Number(girebuleba);

    wona = Number(wona);


    girebuleba = wonis_gadasaxadi(girebuleba, wona);

    girebuleba = Number(girebuleba);

    girebuleba = larshi(girebuleba);

    girebuleba = Number(girebuleba);

    girebuleba = miwodeba_qalaqshi(girebuleba);

    girebuleba = Number(girebuleba);

    document.getElementById("larshi_gadayvana").innerHTML = girebuleba.toFixed(2);
}