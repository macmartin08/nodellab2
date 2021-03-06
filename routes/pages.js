const router = require('express').Router();
// Our controller
const PagesController = require('../controllers/PagesController');
// Our routes
router.get(`/`, PagesController.show);
router.get(`/about`, PagesController.show);
// We have to export our changes
module.exports = router;