let message: string = "Obrigado Senhor!";
console.log(message);

let epsodio: number = 1;
console.log("Episodio Atual: " + epsodio);

epsodio += 1;
console.log("Proximo Episodio: " + epsodio );

let varFunc = function semRetorno (param0:string, param2:number, param3:string[]){
  console.log("Parâmetro0 " + param0 + " Parâmetro2" + param2 + " Parâmetro3" + param3);
}
varFunc('Vanessa',1, ["Vanessa", " Meu Cheiro"]);

let arrowFunc = ( param1=> console.log("Arrow:" + param1));
arrowFunc(1);

function paramOpcional(param1:string, param2?:number):void{
  console.log( "Param1: "+ param1 );
  console.log( "Param2: "+ param2 );
}
paramOpcional('Teste Parametro opcional');

function ParamRest(...param:number[]):number{
  return param.reduce((a,b,c)=> c,0);
}
console.log(ParamRest(1,2,3,4));

let paramTst:number = 1;
console.log("O parâmetro é:" + paramTst + " Na chamada da função era:" + testaMenor12(paramTst));
let x9: string[];
let addX9 = function(...sNome:string[]):boolean{
  x9 = sNome;
  return true;
};
addX9('você','Naiara');
console.log("Meus x9's eram " + x9[0] + ' e ' + x9[1]);

let testaMenor12 = function (paramNumber: number):boolean{
    return paramNumber < 12
}
console.log(`Teste crase : ${testaMenor12(10)}`);
