const {Router} = require('express');
const router = Router();


const {renderindex, renderabout} = require('../controllers/index.controller')
router.get('/', renderindex);




module.exports = router;