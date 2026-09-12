const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');


const homeController = require('../controllers/homeController');
const aboutController = require('../controllers//aboutController');


router.get('/restaurants/:id/menu', menuController.getMenuByRestaurant); 
router.get('/', homeController.getHome);
router.get('/about', aboutController.getAbout);

module.exports = router;

