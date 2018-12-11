const sysCtrl = require('../controllers/systemController');
const express = require('express');
const router = express.Router();

router.get('/', sysCtrl.getSystems);
router.post('/', sysCtrl.addSystem);
router.delete('/:name', tokenMiddleware, sysCtrl.delSystem);
router.get('/:name', sysCtrl.getOneSystem);

//testing
router.put('/:name', sysCtrl.updateGroup)

module.exports = router;
