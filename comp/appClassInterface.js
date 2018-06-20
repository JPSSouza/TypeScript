//Estrutura básica de uma classe
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FirtClassTypeScript = /** @class */ (function () {
    function FirtClassTypeScript(propertie) {
        this.propertie1 = propertie;
    }
    FirtClassTypeScript.prototype.showPropertie = function () {
        console.log("Está é a minha propriedade: " + this.propertie1);
    };
    return FirtClassTypeScript;
}());
var teste = new FirtClassTypeScript("Primeira Propriedade");
teste.showPropertie();
var MeuExemplo = /** @class */ (function () {
    function MeuExemplo(propriedad) {
        this.propriedad = propriedad;
    }
    MeuExemplo.prototype.showPropertie = function () {
        console.log(this.propriedad);
    };
    return MeuExemplo;
}());
var MeuExemploFilha = /** @class */ (function (_super) {
    __extends(MeuExemploFilha, _super);
    function MeuExemploFilha(param) {
        return _super.call(this, param) || this;
    }
    MeuExemploFilha.prototype.showPropertie2 = function () {
        _super.prototype.showPropertie.call(this);
    };
    return MeuExemploFilha;
}(MeuExemplo));
var teste2 = new MeuExemploFilha("Herança.");
teste2.showPropertie2();
var MaisDeUmaParamConstruct = /** @class */ (function () {
    function MaisDeUmaParamConstruct(atributo1, atributo2) {
        this.atributo1 = atributo1;
        this.atributo2 = atributo2;
    }
    MaisDeUmaParamConstruct.prototype.showPrivates = function () {
        console.log("Este \u00E9 o valor do meu tributo privado: " + this.atributo2);
    };
    return MaisDeUmaParamConstruct;
}());
var maisDeUm = new MaisDeUmaParamConstruct('Teste', 27);
maisDeUm.showPrivates();
var NaveSimples = /** @class */ (function () {
    function NaveSimples(nome, motor, cor) {
        this.nome = nome;
        this.motor = motor;
        this.cor = cor;
    }
    NaveSimples.prototype.getNave = function () {
        console.log("Nome da nave " + this.nome + ", motor " + this.motor + " e cor " + (this.cor != undefined ? this.cor : "Rosa"));
    };
    return NaveSimples;
}());
var objNaveSimples = new NaveSimples("Primeira Nave", 5);
objNaveSimples.getNave();
var classNaveCarga = /** @class */ (function (_super) {
    __extends(classNaveCarga, _super);
    function classNaveCarga(nome, motor, carga) {
        var _this = _super.call(this, nome, motor) || this;
        _this.carga = carga;
        return _this;
    }
    classNaveCarga.prototype.getNaveCarga = function () {
        _super.prototype.getNave.call(this);
    };
    return classNaveCarga;
}(NaveSimples));
var objNaveCarga = new classNaveCarga("Nave de Carga", 10, 10);
objNaveCarga.getNave();
