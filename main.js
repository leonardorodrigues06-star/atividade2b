console.log("adição- 1");
console.log("subtração- 2");
console.log("multiplicação- 3");
console.log("divisão- 4");
console.log("bhaskara- B");
let Defdocal = prompt("qual o calculo desejado?(olhar no console para informações das palavras chave para definir as contas)");


if(Defdocal == "B"){
let bhaa = Number(prompt("digite o A da função"));
let bhab = Number(prompt("digite o B da função"));
let bhac = Number(prompt("digite o C da função"));
const DELTA = (bhab*bhab)-4*(bhaa*bhac);
const BHASM = (-bhab+Math.sqrt(DELTA))/2*bhaa;
const BHASN = (-bhab-Math.sqrt(DELTA))/2*bhaa;
alert("("+BHASN+","+ BHASM+")");
}
switch(Defdocal){
case Defdocal == "1" :
    let soma = 0;
    let n = Number(prompt("número de números a calcular"));
    for( i=0; i<n; i++ ) {
    var numero = Number(prompt("digite o número a somar/ser somado"));
    soma = soma + numero; 
    console.log("a soma total deu "+ soma)};
console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
break;
    
case  Defdocal == "2" :
    let sub = 0;
    let nu = Number(prompt("número de números a calcular"));
    for( i=0; i<nu; i++ ) {
    var numero = Number(prompt("digite o número a subtrair/ser subtraido"));
    sub = sub - numero; 
    console.log("a subtração  total deu "+ sub)};
console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
break;

case Defdocal == "3" :
    console.log ("A conta de multiplicação foi selecionada, ela multiplica até 2 números.")
let numm1 = Number(prompt("digite o primeiro número a ser multiplicado"))
let numm = Number(prompt("digite o segundo número a ser multiplicado"))
const multres = numm1*numm
alert("a multiplicação dos números deu "+ multres)
console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
break;


case Defdocal == "4" :
    console.log("A conta de divisão foi selecioanda, ela divide até 2 números");
    let numa = Number(prompt("digite o número a ser dividido"));
    let numb = Number(prompt("digite o número a dividir"));
    const divres = numa/numb;
    alert("a divisão dos números deu" + divres);
    break;
    }
