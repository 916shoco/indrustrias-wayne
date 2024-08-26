const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware('gerente'), resourceController.addResource);
router.get('/list', authMiddleware, resourceController.listResources); // Acesso público autenticado
router.put('/update/:id', authMiddleware, roleMiddleware('gerente'), resourceController.updateResource);
router.delete('/delete/:id', authMiddleware, roleMiddleware('administrador de segurança'), resourceController.deleteResource);

module.exports = router;
