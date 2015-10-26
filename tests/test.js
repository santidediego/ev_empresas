var assert=require("assert");
app=require(__dirname+"/../app.js");

describe('Empresa', function(){
	    it('Debe cargar', function(){
	        assert(app, "La página carga correctamente");
	    });
});