
var warenkorb = [];

function zumWarenkorb(nr) {
    var seminar = document.getElementById('seminar' + nr).innerHTML;
    warenkorb.push(seminar);
    warenkorbAusgeben();
}

function warenkorbAusgeben() {
    var ausgabe = '';
        for (var i = 0; i < warenkorb.length; ++i) {
            warenkorb.sort();
            ausgabe += '<li id="nr' + i + '">';
            ausgabe += warenkorb[i];
            ausgabe += '<input type="button" value="X" id="loeschen" onclick="loescheNr(' + i + ');" />';
            ausgabe += '</li>';
    }
    document.getElementById('liste').innerHTML = ausgabe;
}

function loescheNr(id) {
    warenkorb.splice(id, 1);
    warenkorbAusgeben();
}
