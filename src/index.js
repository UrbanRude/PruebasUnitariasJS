exports.sumarDosNumeros = function(a,b){
    return a+b;
}

exports.restarDosNumeros = function(a,b){
    return a-b;
}
exports.dividirDosNumeros = function(a,b){
    return a/b;
}
exports.multiplicarDosNumeros = function(a,b){
    return a*b;
}
exports.addDatos = function(json){
    json.hola = "hola";
    return json;
}
exports.validarDatos = function(){
    var json = {nombre:"Urbano",apellidos:"Ceron Santillan",edad:24};
    return json;
}