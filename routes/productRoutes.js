const {Router} = require('express')

const router = Router()

// Request: GET
// Route: /api/products
// Access: Private
// Desc: Get all products
router.get('/', (req, res, next) => res.json({message: "display all products"}));

// Request: GET
// Route: /api/products/:pid
// Access: Private
// Desc: Get one products
router.get('/:pid', (req, res, next) => res.json({message: "display one product"}));

// Request: POST
// Route: /api/products/
// Access: Private
// Desc: Create new product
router.post('/', (req, res, next) => res.json({message: "creating new product"}));

// Request: PUT
// Route: /api/products/:pid
// Access: Private
// Desc: Update product
router.put('/:pid', (req, res, next) => res.json({message: "Update product"}));

// Request: DELETE
// Route: /api/products/:pid
// Access: Private
// Desc: Delete product
router.delete('/:pid', (req, res, next) => res.json({message: "Delete product"}));

module.exports = router;