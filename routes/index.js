const laptopsRouter = require('./laptops')
const routes = (app)=>{
    app.use('/laptops',laptopsRouter)
}

module.exports = routes