function disp(val) {
    document.getElementById("space").value += val;
}
function clean() {
    document.getElementById("space").value = "";
    console.clear();
}
function del() {
    var x = document.getElementById("space").value;
    var y = x.substr(0, x.length - 1);
    document.getElementById("space").value = y;
}
function solve() {
    let expression = document.getElementById("space").value;
    try {
        var result = eval(expression);
        document.getElementById("space").value = result;
        console.log("Equation: ", expression);
        console.log("Number of elements: ", expression.length);
        console.log("Answer: ", result);
    } catch (ex) {
        alert("Oops! Something went wrong! Press F12 for more info.");
        console.error(ex.message);
    }
}
function press() {
    document.addEventListener('keydown', function(act) {
        if (act.key === "=") solve();
        else if (act.key === "Delete") clean(); 
        else console.info(act.key);
    });
}
function restrict(inp, chr) {
    inp.value = inp.value.split('').filter(char => !chr.includes(char)).join('');
}
function able() {
    let a = document.getElementById("space");
    let b = document.getElementById("enable");
    if (a.disabled == true) {
        a.disabled = false;
        a.style.cursor ="text";
        b.innerHTML = "Disable keyboard input";
        press();
    } else {
        a.disabled = true;
        a.style.cursor = "not-allowed";
        b.innerHTML = "Enable keyboard input";
    }
}