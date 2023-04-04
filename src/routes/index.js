const siteRouter=require('./site')
const productRouter=require('./products')
const route=(app)=>{
app.use('/',siteRouter)
app.use('/products',productRouter)
}
module.exports=route