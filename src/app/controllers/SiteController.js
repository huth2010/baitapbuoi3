const Product=require('../Models/Product')
const {mutipleMongoosetoObject}=require('../../utill/index')
class SiteController{
    index(req,res,next){
        Product.find({}).then((product)=>{
           res.render('home',{
            product: mutipleMongoosetoObject(product)
           }) 
        }).catch(next)
        
    }
   
}

module.exports=new SiteController()