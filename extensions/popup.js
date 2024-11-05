document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('inputText1').value = localStorage.getItem('saveData1') || "";
    document.getElementById('inputText2').value = localStorage.getItem('saveData2') || "";
    document.getElementById('inputText3').value = localStorage.getItem('saveData3') || "";

    document.querySelector('.format').addEventListener("click", formatinput);
    document.querySelector('.copy').addEventListener("click", copyclipboard);
    document.querySelector('.reset').addEventListener("click", clearcontent);
    document.querySelector('.save').addEventListener("click", save);
});

function formatinput() {
    var inputText1 = document.getElementById('inputText1').value;
    var inputText2 = document.getElementById('inputText2').value;
    var inputText3 = document.getElementById('inputText3').value;
    var formattedText1 = "①" + inputText1;
    var formattedText2 = "②" + inputText2;
    var formattedText3 = "③" + inputText3;
    document.getElementById('outputText').value = formattedText1 + "\n" + formattedText2 + "\n" + formattedText3;
}

function copyclipboard() {
    var copyText = document.getElementById('outputText');
    copyText.select();
    document.execCommand("copy");
}

function clearcontent() {
    document.getElementById('inputText1').value = "";
    document.getElementById('inputText2').value = "";
    document.getElementById('inputText3').value = "";
    document.getElementById('outputText').value = "";
    localStorage.removeItem('saveData1');
    localStorage.removeItem('saveData2');
    localStorage.removeItem('saveData3');
}

function save() {
    localStorage.setItem('saveData1', document.getElementById('inputText1').value);
    localStorage.setItem('saveData2', document.getElementById('inputText2').value);
    localStorage.setItem('saveData3', document.getElementById('inputText3').value);
}