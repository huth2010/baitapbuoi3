const Product=require('../Models/Product')
const {mutipleMongoosetoObject, mongoosetoObject}=require('../../utill/index')
class ProductController{
    create(req,res,next){
        res.render('forms/create')  
    }
    new(req,res,next){
        const product=new Product(req.body)
        //console.log('hehehehe'+req.body)
        product.save().then(()=>res.redirect(`back`)).catch(next)
    }
    edit(req,res,next){
        Product.findById(req.params.id).then(product=>res.render('forms/edit',{
            product: mongoosetoObject(product)
        })).catch(next)

    }
    destroy(req,res,next){
        Product.deleteOne({_id: req.params.id}).then(()=>res.redirect('back')).catch(next)
    }
    update(req,res,next){
        Product.updateOne({_id:req.params.id},req.body).then(()=>res.redirect('/')).catch(next)
    }

}

module.exports=new ProductController()