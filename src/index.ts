let clave : string = "";
let contclave: number = 0;
while (contclave < 3 && clave !== "eureka") {
  clave = prompt("ingrese su clave");
  
  if (clave === "eureka") {
    console.log ("bienvenido");
  }else{
    console.log ("agotaste los intentos");
    contclave ++;
}
