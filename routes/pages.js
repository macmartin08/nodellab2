const router = require('express').Router();
// Our controller
const PagesController = require('../controllers/pagesController');
// Our routes
router.get(`/`, PagesController.show);
// We have to export our changes
module.exports = router;