var express = require('express');
var router = express.Router()
var Course= require("../models/course");


module.exports.getassignment= function (req, res, next) {
    Course.findById(req.params.courseid)
        .then((course) => {
            res.statuscode = 200
            res.json(course.assignments);
        }, (err) => next(err))
        .catch((err) => next(err))
}