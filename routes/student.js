var express = require('express');
var router = express.Router();
var Quiz = require('../models/quiz');
const Assignment = require('../models/assignment')
var Materials = require('../models/material')
var Student = require('../models/student');


//View Quiz
router.get('/viewQuiz/:qid', function (req, res, next) {
	Quiz.find({ _id: req.params.qid }).exec(function (error, results) {
		if (error) {
			return next(error);
		}
		res.json(results);
	});
});

//Attempt Quiz
router.post('/attempt-quiz', function (req, res) {
	let numCorrect = 0;
	for (let i = 0; i < req.body.length; i++) {
		if (req.body[i].submittedAnswer === req.body[i].correctAnswer) {
			numCorrect++;
		}
	}
	res.send({
		numCorrect: numCorrect,
		numQuestions: req.body.length,
	});
});

//Dashboard
router.get(
	"/viewdashboard/:id",
	asyncHandler(async (req, res) => {
	  console.log("Req accepted");
	  const id = req.params.id;
	  console.log(req.body);
	  const StudentDashboard = await Student.findById(id);
	  console.log(StudentDashboard);
	  if (StudentDashboard) {
		res.json({ data: StudentDashboard });
	  } else {
		throw new Error("Error Occured. Student Not Found");
	  }
	})
  );

// View Assignment
exports.viewAssignments = async(req, res, next) => {
    try {
        let data = await Assignment.find({_id : req.params.id})
		res.status(200).json(data)

    }catch(e){
        res.status(400).json({
            "success": false,
            "error":e.message
        })
    }
}

//Material download
app.get('/download', (req, res) => {
    
    const file = `${__dirname}/path/to/file.zip`;
    res.download(file);
});


//View Grade
router.get('/grades/:studentId', function (req, res, next) {
	Student.find({ _id: req.params.studentId }).exec(function (error, results) {
		if (error) {
			return next(error);
		}
		res.json(results.grades);
	});
});

//View Marks
app.get('/viewMarks/:sid', (req, res) => {
    Student.find({_id : req.params.sid}).exec(function(err,result){
        if(err) throw err;
        else{
            res.json(result)
        }
    })    
});

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;
