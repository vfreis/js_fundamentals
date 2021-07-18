const prompt = require('prompt')
prompt.start();
prompt.get([countt])
console.log(countt)

function fibonacci (limite) {

fib = [1, 2]

        for (i = 2;i < limite; i++) {
            fib[i] = fib[i-2] + fib[i-1]    
        }

        for(c = 0; c < fib.length; c++) {
            console.log(fib[c])
        }

}

