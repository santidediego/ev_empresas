var express = require('express');
//var router = express.Router();
var assert = require("assert");




var lista = new Array();

//assert
function lista_alumnos(req, res){
   res.render('lista_alumnos', {
      lista: lista
   });
}



exports.get_lista_alumnos = function(req, res){
	listar_alumnos(req, res)
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
   var item = req.body.alumno;
   for(var i = lista.length; i--;) {
       if(lista[i].alumno === item) {
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
   var emp = req.body.emp;
   var alumno = req.body.alumno;
   var fechainicio = req.body.fechainicio;
   var fechafinalizacion = req.body.fechafinalizacion;
   var calificacion = req.body.calificacion;
   lista.push({
      emp: emp,
      alumno: alumno,
      fechainicio: fechainicio,
      fechafinalizacion: fechafinalizacion,
      calificacion: calificacion

   })


   anadir_empresa(req, res);
}