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
