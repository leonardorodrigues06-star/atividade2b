console.log("adição- 1");
console.log("subtração- 2");
console.log("multiplicação- 3");
console.log("divisão- 4");
console.log("bhaskhara- B");
console.log("Hipotenusa- H");
console.log("Grandezas eletrônicas- E");
console.log("Logaritmo- L");

let Defdocal = prompt("qual o calculo desejado?(olhar no console para informações das palavras chave para definir as contas)").toUpperCase();

switch (Defdocal) {

    case "L":
        console.log("=== CALCULADORA DE LOGARITMO ===");
        console.log("Fórmula: log_base(logaritmando) = resultado");
        console.log("Ex: log_10(100) = 2  →  base=10, logaritmando=100");
        console.log("Para logaritmo natural (ln), digite 'e' como base");

        let baseInput = prompt("Digite a BASE do logaritmo (ex: 10, 2, ou 'e' para natural):").toUpperCase();
        let logaritmando = Number(prompt("Digite o LOGARITMANDO (número do qual quer o log):"));

        if (logaritmando <= 0) {
            alert("Erro: o logaritmando deve ser maior que zero!");
            break;
        }

        let base;
        if (baseInput === "E") {
            base = Math.E;
        } else {
            base = Number(baseInput);
        }

        if (isNaN(base) || base <= 0 || base === 1) {
            alert("Erro: a base deve ser um número positivo diferente de 1!");
            break;
        }

        const resultado = Math.log(logaritmando) / Math.log(base);

        console.log("=== RESULTADO ===");
        console.log(`log_${baseInput}(${logaritmando}) = ${resultado}`);
        console.log(`Verificação: ${base} ^ ${resultado} ≈ ${Math.pow(base, resultado).toFixed(6)}`);
        alert(`log_${baseInput}(${logaritmando}) = ${resultado.toFixed(6)}`);

        console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
        break;

    case "E":
        console.log("grandezas elétricas selecionadas, favor olhar o console para palavras chave de contas");
        console.log("Resistência- R");
        console.log("corrente- I");
        console.log("Potência- P");
        console.log("Voltagem- V");

        let GE = prompt("Digite a palavra chave para efetuar o cálculo").toUpperCase();
        console.log("caso a grandeza não exista, deixar 0 no lugar dela.");

        switch (GE) {

            case "R":
                let Ir = Number(prompt("digite a corrente do sistema (em Ampér)"));
                let Vr = Number(prompt("digite a voltagem do sistema (em Volts)"));
                let Pr = Number(prompt("digite a potência do sistema (em Watts)"));

                if (Pr == 0) {
                    const R = Vr / Ir;
                    console.log("a resisência do sistema é " + R);
                }

                if (Ir == 0) {
                    const R = (Vr * Vr) / Pr;
                    console.log("a resisência do sistema é " + R);
                }

                if (Vr == 0) {
                    const R = Pr / (Ir * Ir);
                    console.log("a resisência do sistema é " + R);
                } else {
                    console.log("Entradas inválidas (duas ou mais grandezas = 0)");
                }
                break;

            case "I":
                let Pi = Number(prompt("digite a potência do sistema (em Watts)"));
                let Vi = Number(prompt("digite a voltagem do sistema (em Volts)"));
                let Ri = Number(prompt("digite a resistência do sistema (em Ohms)"));

                if (Ri == 0) {
                    const I = Pi / Vi;
                    console.log("A corrente do sistema é " + I);
                }

                if (Vi == 0) {
                    const I = Math.sqrt(Pi / Ri);
                    console.log("A corrente do sistema é " + I);
                }

                if (Pi == 0) {
                    const I = Vi / Ri;
                    console.log("A corrente do sistema é " + I);
                } else {
                    console.log("Entradas inválidas (duas ou mais grandezas = 0)");
                }
                break;

            case "P":
                let Vp = Number(prompt("Digite a voltagem do sistema (em Volts)"));
                let Rp = Number(prompt("Digite a resistência do sistema (em Ohms)"));
                let Ip = Number(prompt("Digite a corrente do sistema (em Ampéres)"));

                if (Vp == 0) {
                    const P = (Ip * Ip) * Rp;
                    console.log("a potência do sistema é " + P);
                }

                if (Rp == 0) {
                    const P = Vp * Ip;
                    console.log("a potência do sistema é " + P);
                }

                if (Ip == 0) {
                    const P = (Vp * Vp) / Rp;
                    console.log("a potência do sistema é " + P);
                }
                break;

            case "V":
                let Iv = Number(prompt("Digite a corrente do sistema (em Ampér)"));
                let Rv = Number(prompt("Digite a resistência do sistema (em Ohm)"));
                let Wv = Number(prompt("Digite a potência do sistema (em Watts)"));

                if (Wv == 0) {
                    const V = Rv * Iv;
                    console.log("A voltagem é de " + V);
                }

                if (Iv == 0) {
                    const V = Math.sqrt(Wv * Rv);
                    console.log("A voltagem é de " + V);
                }

                if (Rv == 0) {
                    const V = Wv / Iv;
                    console.log("A voltagem é de " + V);
                } else {
                    console.log("Entrada inválida (2 ou mais grandezas = a zero)");
                }
        }
        break;

    case "H":
        let cat1 = Number(prompt("digite o primeiro cateto."));
        let cat2 = Number(prompt("digite o segundo cateto"));

        const HIPO = (cat1 * cat1) + (cat2 * cat2);
        const HIPOcal = Math.sqrt(HIPO);

        console.log("a hipotenusa ao quadrado é " + HIPO);
        console.log("a hipotenusa é " + HIPOcal);
        break;

    case "B":
        let bhaa = Number(prompt("digite o A da função"));
        let bhab = Number(prompt("digite o B da função"));
        let bhac = Number(prompt("digite o C da função"));

        const DELTA = (bhab * bhab) - 4 * (bhaa * bhac);
        const BHASM = (-bhab + Math.sqrt(DELTA)) / 2 * bhaa;
        const BHASN = (-bhab - Math.sqrt(DELTA)) / 2 * bhaa;

        alert("(" + BHASN + "," + BHASM + ")");
        break;

    case "1":
        let soma = 0;
        let n = Number(prompt("número de números a calcular"));

        for (i = 0; i < n; i++) {
            var numero = Number(prompt("digite o número a somar/ser somado"));
            soma = soma + numero;
            console.log("a soma total deu " + soma);
        }

        console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
        break;

    case "2":
        let sub = 0;
        let nu = Number(prompt("número de números a calcular"));

        for (i = 0; i < nu; i++) {
            var numero = Number(prompt("digite o número a subtrair/ser subtraido"));
            sub = sub - numero;
            console.log("a subtração  total deu " + sub);
        }

        console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
        break;

    case "3":
        console.log("A conta de multiplicação foi selecionada, ela multiplica até 2 números.");

        let numm1 = Number(prompt("digite o primeiro número a ser multiplicado"));
        let numm = Number(prompt("digite o segundo número a ser multiplicado"));

        const multres = numm1 * numm;

        alert("a multiplicação dos números deu " + multres);
        console.log("programa finalizado, favor recarregar a página para reiniciar a calculadora");
        break;

    case "4":
        console.log("A conta de divisão foi selecioanda, ela divide até 2 números");

        let numa = Number(prompt("digite o número a ser dividido"));
        let numb = Number(prompt("digite o número a dividir"));

        const divres = numa / numb;

        alert("a divisão dos números deu" + divres);
        break;
}