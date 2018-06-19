var message = "Obrigado Senhor!";
console.log(message);
var epsodio = 1;
console.log("Episodio Atual: " + epsodio);
epsodio += 1;
console.log("Proximo Episodio: " + epsodio);
var varFunc = function semRetorno(param0, param2, param3) {
    console.log("Parâmetro0 " + param0 + " Parâmetro2" + param2 + " Parâmetro3" + param3);
};
varFunc('Vanessa', 1, ["Vanessa", " Meu Cheiro"]);
var arrowFunc = (function (param1) { return console.log("Arrow:" + param1); });
arrowFunc(1);
function paramOpcional(param1, param2) {
    console.log("Param1: " + param1);
    console.log("Param2: " + param2);
}
paramOpcional('Teste Parametro opcional');
function ParamRest() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    return param.reduce(function (a, b, c) { return c; }, 0);
}
console.log(ParamRest(1, 2, 3, 4));
