module.exports=(req,res,next)=>{
    if(!req.session.isLogged){
        return res.redirect('/login');
    }
    next();
}