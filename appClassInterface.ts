//Estrutura básica de uma classe

class FirtClassTypeScript{
  propertie1:string
  constructor(propertie: string){
    this.propertie1 = propertie
  }
  showPropertie(){
    console.log("Está é a minha propriedade: " + this.propertie1);
  }
}
let teste = new FirtClassTypeScript("Primeira Propriedade");
teste.showPropertie();

class MeuExemplo{
  constructor(public propriedad:string){}
  showPropertie(){
    console.log(this.propriedad);
  }
}
class MeuExemploFilha extends MeuExemplo{
  constructor(param:string){
    super(param);
  }
  showPropertie2(){
      super.showPropertie();
  }
}
let teste2 = new MeuExemploFilha("Herança.")
teste2.showPropertie2();

class MaisDeUmaParamConstruct {

  constructor(public atributo1:string, private atributo2:number){}
  showPrivates(){
    console.log(`Este é o valor do meu tributo privado: ${this.atributo2}`);
  }
}
let maisDeUm = new MaisDeUmaParamConstruct('Teste',27);
maisDeUm.showPrivates();

interface NaveCarga{
  carga:number
}

class NaveSimples{
  constructor( public nome: string, private motor: number, public cor?: string ){}
  getNave(){
    console.log(`Nome da nave ${this.nome}, motor ${this.motor} e cor ${this.cor != undefined? this.cor: "Rosa" }`);
  }
}
let objNaveSimples = new NaveSimples("Primeira Nave", 5);
objNaveSimples.getNave();

class classNaveCarga extends NaveSimples implements NaveCarga{

  constructor(nome:string, motor:number, public carga:number){
    super(nome, motor);
  }
  getNaveCarga(){
    super.getNave();
  }
}
let objNaveCarga = new classNaveCarga("Nave de Carga", 10, 10);
objNaveCarga.getNave();
