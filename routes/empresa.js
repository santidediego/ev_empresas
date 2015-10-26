var express = require('express');
//var router = express.Router();
var assert = require("assert");




var lista = new Array();

function lista_alumnos(req, res){
   res.render('lista_alumnos', {
      lista: lista
   });
}



exports.get_lista_alumnos = function(req, res){
	lista_alumnos(req, res)
};




function anadir_empresa(req, res){
   res.render('anadir_empresa', {
      lista: lista
   });
}

//
function borrar_empresa(req, res){
   res.render('borrar_empresa', {
      lista: lista
   });
}

exports.post_borrar_empresa = function(req, res){
   var al = req.body.alumno;
   for(var i = lista.length; i--;) {
       if(lista[i].alumno === al) {
              lista.splice(i, 1);
          }
      }

   borrar_empresa(req, res);
}

exports.get_borrar_empresa = function(req, res){
   borrar_empresa(req, res);
}
//

exports.get_anadir_empresa = function(req, res){
   anadir_empresa(req, res);
}

exports.post_anadir_empresa = function(req, res){
   var empresa = req.body.empresa;
   var alumno = req.body.alumno;
   var inicio = req.body.inicio;
   var fin = req.body.fin;
   var calificacion = req.body.calificacion;
   lista.push({
      empresa: empresa,
      alumno: alumno,
      inicio: inicio,
      fin: fin,
      calificacion: calificacion

   })

   //Para las aserciones voy a comprobar si existen los objetos que he mandado por el formulario
   assert(empresa,"Nombre de la empresa introducida");
   assert(alumno,"Nombre de alumno introducido");
   assert(inicio,"Fecha de inicio introducida")
   assert(fin,"Fecha de finalización introducida");
   assert(calificacion,"Calificación introducida")
   console.log("Si has llegado aquí, han pasado todos los tests");
   anadir_empresa(req, res);
}