function sayed() {
    var f, t;
    f = Number(document.getElementById("test").value);

    t = (f - 32) * 5 / 9;

    c = t.toFixed(2);

    document.getElementById("dekhbo").innerHTML = c + "<span>&#8451;</span>";


}