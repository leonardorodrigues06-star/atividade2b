
console.log("adição");
console.log("subtração");
console.log("multiplicação");
console.log("divisão");
console.log("bhaskara");
let Defdocal = prompt("qual o calculo desejado?(olhar no terminal para informações das palavras para definir as contas)");


if(Defdocal == "bhaskara"){
let bhaa = Number(prompt("digite o A da função"));
let bhab = Number(prompt("digite o B da função"));
let bhac = Number(prompt("digite o C da função"));
const DELTA = (bhab*bhab)-4*(bhaa*bhac);
const BHASM = (-bhab+Math.sqrt(DELTA))/2*bhaa;
const BHASN = (-bhab-Math.sqrt(DELTA))/2*bhaa;
alert("("+BHASN+","+ BHASM+")");
}

if(Defdocal == "adição"){
    console.log("a conta de soma foi selecionada, ela calcula até 5 números.");
let numa = Number(prompt("digite o primeiro número a somar"));
let numb = Number(prompt("digite o segundo número a somar"));
let numc = Number(prompt("digite o terceiro número a somar"));
let numd = Number(prompt("digite o quarto número a somar"));
let nume = Number(prompt("digite o quinto número a somar"));
const somares = numa+numb+numc+numd+nume;
alert("a soma dos números deu "+ somares);
console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");

}

if(Defdocal == "subtração"){
    console.log("A conta de subtração foi selecionada, ela subtrai até 5 números")
let numa = Number(prompt("digite o primeiro número a ser subtraido"));
let numb = Number(prompt("digite o segundo número a subtrair"));
let numc = Number(prompt("digite o terceiro número a subtrair"));
let numd = Number(prompt("digite o quarto número a subtrair"));
let nume = Number(prompt("digite o quinto número a subtrair"));
const subres = numa-numb-numc-numd-nume
alert("a subtração dos números é "+ subres)
console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
}

if (Defdocal == "multiplicação"){
    console.log ("A conta de multiplicação foi selecionada, ela multiplica até 2 números.")
let numa = Number(prompt("digite o primeiro número a ser multiplicado"))
let numb = Number(prompt("digite o segundo número a ser multiplicado"))
const multres = numa*numb
alert("a multiplicação dos números deu "+ multres)
console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
}

if (Defdocal == "divisão"){
    console.log("A conta de divisão foi selecioanda, ela divide até 2 números");
    let numa = Number(prompt("digite o número a ser dividido"));
    let numb = Number(prompt("digite o número a dividir"));
    const divres = numa/numb;
    alert("a divisão dos números deu" + divres);
}