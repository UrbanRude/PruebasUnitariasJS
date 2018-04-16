var index = require('../src/index');
var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

describe("Pruebas unitarias del archivo JS",function(){
    it("SumarDosNumeros retorna con numero",function(){
        expect(index.sumarDosNumeros(0,0)).to.be.a("number");
    });
    it("SumarDosNumero puede sumar dos numeros 1+2",function(){
        expect(index.sumarDosNumeros(1,2)).equal(3);
    });
    it("RestarDosNumeros puede restar 1-2",function(){
        expect(index.restarDosNumeros(1,2)).equal(-1);
    });
    it("Dividir no puede dividir entre cero",function(){
        expect(index.dividirDosNumeros(5,0)).equal(Infinity);
    });
    it("Dividir no puede dividir entre ceroII",function(){
        expect(index.dividirDosNumeros(0,5)).equal(Infinity);
    });
});

