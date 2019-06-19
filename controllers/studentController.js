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


exports.show = (req, res) => {
  Student.findById(
    req.params.id)
  .then(student => {
    res.render('student/show',{
      student: student,
      title: student.firstname
    });
  })
  .catch(err => {
      console.error(`ERROR: ${err}`);
    });
}


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

exports.edit = (req, res) => {
  Student.findById(req.params.id)
    .then(student => {
      res.render('student/edit', {
        title: `Edit ${student.firstname}`,
        student: student
      })
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};


exports.update = (req, res) => {
  console.log("done")
  Student.updateOne(req.body.id
    , req.body.student, {
      runValidators: true
    })
    .then(() => {
      res.redirect('/student');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};


exports.destroy = (req, res) => {
  Student.deleteOne(req.body.id)
    .then(() => {
      res.redirect('/student');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};