function color_convert() {
    if (document.color.rouge.value == "") {
        alert("La valeur R n'est pas renseigné !")
    }
    else if (document.color.vert.value == "") {
        alert("La valeur G n'est pas renseigné !")
    }
    else if (document.color.bleu.value == "") {
        alert("La valeur B n'est pas renseigné !")
    }
    else{
        document.getElementById("result_color").style.background = "rgb(" + document.color.rouge.value + "," + document.color.vert.value + "," + document.color.bleu.value + ")";
    }
}