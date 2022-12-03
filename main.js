//FUNCIÓN PARA SABER SI UN NÚMERO ES PRIMO

function numPriRango(num){
    let primo = true;
    if(num==1 || ((num%2)==0 && num>2)){
        primo = false;
    }else{
        for ( let i = 2; i < (num/2); i++){
            if (num%i==0){
                primo = false;
                break;
            }
        }
    }
    return primo;
}

//FUNCIÓN PARA TABULAR LOS NÚMEROS PRIMOS EN UN RANGO

function primoEnRangoDado(){
    let primerNum = parseInt(prompt(`Indica el primer número`));
    let psegundoNum = parseInt(prompt(`Indica el segundo número`));

    if (primerNum>0 && psegundoNum>0) {
        let cantprimos = 0;
        alert(`Primos en rango dado`);
        for (let i = primerNum; i <= psegundoNum; i++) {
            if (numPriRango(i)) {
                document.write(`${i} <br>`);
                cantprimos++;
            }
            /*if (i%20==0) {
                document.write(`Parar`) ;
            }*/
        }
    }

}

//FUNCIÓN PARA SABER SI UN NÚMERO DADO ES PRIMO
function esNumeroPrimo(){
    let primo = true;
    let num = parseInt(prompt(`indica un número`))
    if(num==1 || ((num%2)==0 && num>2)){
        primo = false;
    alert(`El número ${num} no es primo`)
    }else{
        for ( let i = 2; i < (num/2); i++){
            if (num%i==0){
                primo = false;
            }
        }
        alert(`El número ${num} es primo`)
    }
    return primo;
}

// FUNCION PARA SABER SI UN NÚMERO ES FIBONACCI
function esFibonacci(limit){
    let num = parseInt(prompt(`Indica un número para buscar en la lista de fibonacci`))
    let fib = [0,1];
    for(let i = 2; i<limit; i++){
            fib[i] = fib[i-1] + fib[i-2];
    }
    if (fib.indexOf(num)===-1) {
        alert(`${num} no es fibonacci`)
      }else if (fib.indexOf(num)>-1) {
        alert(`${num}  es fibonacci`)
      }
return fib;
}

// FUNCION PARA SABER SI UN ATLETA ES APTO

function atletaApto(){
    let contador = 0;
    let suma = 0; 
     for (let i = 0; i <= 10;  i++) {
         let tiempo = parseInt(prompt(`¿Qué tiempo hizo el atleta`));
         if (tiempo>16) {
             contador = contador+1
         }
         suma = suma+tiempo; 
     }
     let promedio = suma/10;
     alert(`El promedio de tiempo es: ${promedio} minutos`);
     alert(`Tiempos mayores a 16 minutos: ${contador}`);
 
     if (contador== 0 || contador == 1 || promedio<=15) {
         alert(`El atleta es apto`);
     }else{alert(`El atleta no es apto`);}
   }

   //FUNCIÓN PARA OBTENER EL PROMEDIO DE CALIFICACIONES DE UN GRUPO "n" DE ALUMNOS

   function promedioNotas(){
    let cantAlumnos = parseInt(prompt(`¿Cuantos alumnos son en el grupo`));
let suma = 0;
for (let i = 0 ; i <cantAlumnos; i++) {
   let nota = parseInt(prompt(`Ingrese una nota`));
    suma = suma+nota;    
}
let promedio = suma/cantAlumnos;
alert(`El promedio del grupo es ${promedio}`);
}

//FUNCION PARA CALCULAR PROMEDIO DE GRUPOS, MATERIAS Y ALUMNOS.
 

function promedios(){
    let suma1 = 0;
    let suma2 = 0;
    let suma3 = 0;

    let grupos = parseInt(prompt(`Cuantos grupos son en total`));
    suma3 = 0; 
    for (let a = 1; a <= grupos; a++) {
        let alumnos = parseInt(prompt(`Cuantos alumnos son en total`));
        suma2 = 0;
        for (let b = 1; b <=alumnos; b++) {
            let materias = parseInt(prompt(`Cuantas materias son en total`));
            suma1 = 0;
            for (let c = 1; c <=materias; c++) {
                alert(`Ingresa las calificaciones`)
                let c1 = parseInt(prompt(`Ingresa una nota`));
                let c2 = parseInt(prompt(`Ingresa una nota`));
                let c3 = parseInt(prompt(`Ingresa una nota`));

                suma1 = suma1 + (c1+c2+c3)/3;
            }
            let promedioB = suma1/materias;
        alert(`El promedio del alumno ${b} es ${promedioB}`);
        suma2 = suma2 + (suma1/materias);
    }
    let promedioA = suma2/alumnos;
    alert(`El promedio del grupo  ${a} es ${promedioA}`);
    suma3 = suma3 + (suma2/alumnos);
}

let promedioGrupos = suma3/grupos;
alert(`El promedio de los ${grupos} grupos es ${promedioGrupos}`);
}

// FUNCIÓN PARA SUMAR UNA SERIE DE 100,98,96,94,92...HASTA 0.
function sumarSerieNum(){
    let x = 100;
    let suma = 0;
    while (x>0) {
        suma = suma + x;
        x = x -2;
    }
    alert(`la suma de los numeros es ${suma}`)
}

//FUNCIÓN QUE CONTABILIZA CANTIDAD DE CLIENTES Y TOTAL DE VENTAS DEL DIA
function registroTienda(){
    
    let contador = 0;
    let suma = 0;
    let x = 0;
    do {let compra = parseInt(prompt(`Ingresa el total de la compra`));
    suma = suma + compra; 
    contador = contador +1;
    x = parseInt(prompt`Pulsa 1 para agregar cliente, cualquier otra tecla para finalizar`);
    } while (x==1);
    alert(`La venta de hoy ha sido ${suma} y la cantidad de clientes este dia fueron ${contador}`)
}

//FUNCIÓN QUE INDICA SI EL ORDEN DE 2 NÚMEROS ES CRECIENTE O DECRECIENTE

function ordenDeNumeros(){
    let num1 = parseInt(prompt(`Indica el primer número`));
    let num2 = parseInt(prompt(`Indica el segundo número`));
    if (num1<num2) {
        alert(`El orden de los números ${num1} y ${num2} es creciente`);
    }else{
        alert(`El orden de los números ${num1} y ${num2} es decreciente`);

    }
}

//FUNCIÓN QUE APLICA 20% DE DESCUENTO A COMPRA MARCADA CON ETIQUETA ROJA

function controlGast(){
    
    let suma1 = 0;
    let suma2 = 0;
    let compraSinDesc = parseInt(prompt(`Ingresa el precio si el artículo NO tiene etiqueta roja, si no pulsa 0`));
    let compraConDesc = parseInt(prompt`Ingresa el precio si el artículo SI tiene etiqueta roja, si no pulsa 0`);

    while (compraSinDesc>0 || compraConDesc>0) {
    suma1 = suma1 + compraSinDesc; 
    suma2 = suma2 + compraConDesc;
    compraSinDesc = parseInt(prompt(`Ingresa el precio si el artículo NO tiene etiqueta roja, si no pulsa 0`));
    compraConDesc = parseInt(prompt`Ingresa el precio si el artículo SI tiene etiqueta roja, si no pulsa 0`);
    }

    let totalCompra = suma1 + suma2; 
    let descuento = (suma2/100)*20;
    let TotalPagar = suma1 + (suma2-descuento);
    alert(`La compra  ha sido ${totalCompra} y el descuento por artículos de etiqueta roja es ${descuento}, el total a pagar es ${TotalPagar}`)
}

//FUNCIÓN QUE CUENTA VOTOS SEGÚN SECCIÓN 

function controlVotos(){
    let suma1 = 0;
    let suma2 = 0;
    let suma3 = 0;
    let continuar = parseInt(prompt(`Pulsa 1 para contabilizar votantes, pulsa otra tecla para finalizar`));
    do {
        let seccion = parseInt(prompt(`¿A qué seción perteneces? Pulsa: 1 para NORTE, 2 para SUR, 3 para CENTRO.`));
    if (seccion>0 && seccion<4) {
        if (seccion==1) {
            suma1 = suma1 + 1;
        }else if (seccion==2) {
            suma2 = suma2 + 1;
        } else {
            suma3 = suma3 + 1;
        }
    }else{
        alert(`Escribe una sección correcta`);
    }
    
    continuar = parseInt(prompt(`Pulsa 1 para continuar registro, pulsa otra tecla para finalizar`));
    } while (continuar==1);

    alert(`La sección norte tiene ${suma1} votantes`);
    alert(`La sección centro tiene ${suma3} votantes`);
    alert(`La sección sur tiene ${suma2} votantes`);

    if (suma1==suma2 && suma1==suma3 && suma3==suma2) {
        alert(`Las tres secciones tienen el mismo número de votantes`)
    }else if (suma1>suma2 ) {
        if (suma1>suma3) {
            alert(`La sección norte tiene más votantes: ${suma1}`);
        }else {
            alert(`La sección centro tiene más votantes: ${suma3}`);
        }
        
    } else if(suma2>suma3){
        alert(`La sección sur tiene más votantes: ${suma2}`);
        
    }else{
        alert(`La sección centro tiene más votantes: ${suma3}`);
    }
    let totalAsistentes = suma1 + suma2 + suma3;
    alert(`El total de personas asistentes fue: ${totalAsistentes}`);

    return totalAsistentes;
}
