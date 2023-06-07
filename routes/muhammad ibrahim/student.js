var express = require('express')
router = express.Router();
var Course = require('../models/course')
var studentController = require('../controllers/studentcontroller')
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.get('/:courseid/coursematerial',studentController.getmaterials)
module.exports=router; 
router.get('/:courseid/getassignment',studentController.getmaterials)
module.exports=router; 