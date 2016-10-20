var express = require('express');//FIRST add your variables and then install them
var expresstestCtrl = express.Router();




expresstestCtrl.get('/practice', function(req,res,next){
	res.send('this went well')
});

module.exports = expresstestCtrl;