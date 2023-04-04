const express=require('express')
const router=express.Router();
const productController=require('../app/controllers/ProductController')

router.get("/create",productController.create)
router.get('/:id/edit',productController.edit)
router.post('/new',productController.new)
router.put('/:id',productController.update)
router.delete('/:id',productController.destroy)



module.exports=router