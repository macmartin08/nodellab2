const Student = require('../models/student');

exports.index = (req, res) => {
	Student.find()
    .then(students => {
      res.render('student/index', {
        students: students,
        title: 'Archive'
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
}


exports.show = (req, res) => {}


exports.new = (req, res) => {
	res.render('student/new', {
    title: `New Student`
  });
}


exports.create = (req, res) => {
	Student.create(req.body.student)
    .then(() => {
      res.redirect('/student');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
}