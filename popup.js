function formatinput() {
    var inputText1 = document.getElementById('inputText1').value;
    var inputText2 = document.getElementById('inputText2').value;
    var inputText3 = document.getElementById('inputText3').value;
    var formattedText1 = "①" + inputText1;
    var formattedText2 = "②" + inputText2;
    var formattedText3 = "③" + inputText3;
    document.getElementById('outputText').value = formattedText1 + "\n" + formattedText2 + "\n" + formattedText3;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.format').addEventListener("click", formatinput);
});

function copyclipboard() {
    var copyText = document.getElementById('outputText');
    copyText.select();
    document.execCommand("copy");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.copy').addEventListener("click", copyclipboard);
});

function clearcontent() {
    var inputText1 = document.getElementById('inputText1').value;
    var inputText2 = document.getElementById('inputText2').value;
    var inputText3 = document.getElementById('inputText3').value;
    document.getElementById('inputText1').value = "";
    document.getElementById('inputText2').value = "";
    document.getElementById('inputText3').value = "";
    document.getElementById('outputText').value = "";
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.reset').addEventListener("click", clearcontent);
});