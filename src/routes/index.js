const express = require('express');
const tutorial = require('./tutorial');
const profiles = require('./profile');
const planas = require('./planA');
const planbs = require('./planB');


const router = express.Router();

router.use('/tutorials', tutorial);
router.use('/profiles', profiles);
router.use('/planas', planas);
router.use('/planbs', planbs);

module.exports = router;
