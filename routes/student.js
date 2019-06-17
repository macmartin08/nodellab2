const router = require('express').Router();

const StudentController =require('../controllers/studentController')

router.get(`/`, StudentController.index);
router.get(`/new`, StudentController.new);
router.get(`/:id`, StudentController.show);
//router.get(`/:id/edit`, StudentController.edit);
router.post(`/`, StudentController.create);
//router.post(`/update`, StudentController.update);
//router.post(`/destroy`, StudentController.destroy);

module.exports = router;