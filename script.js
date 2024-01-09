let operatore = "";
let totale = null;
let input = "";

let inserisciNumero = function (n) {
  let display = document.getElementById("display");
  input += n;
  display.value = input;
};

let cancella = function () {
  operatore = "";
  totale = null;
  input = "";
  display.value = "";
};

let inserisciOperatore = function (o) {
  if (input !== "") {
    operatore = o;
    totale = totale !== null ? parseFloat(totale) : parseFloat(input);
    input = "";
    document.getElementById("display").value = totale;
  }
};

let calcola = function () {
  if (input && operatore && totale) {
    switch (operatore) {
      case "+":
        totale = parseFloat(totale) + parseFloat(input);
        break;
      case "-":
        totale = parseFloat(totale) - parseFloat(input);
        break;
      case "*":
        totale = parseFloat(totale) * parseFloat(input);
        break;
      case "/":
        totale = parseFloat(totale) / parseFloat(input);
        break;
    }
  }

  document.getElementById("display").value = totale;
};
