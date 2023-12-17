const requireAuth = (req, res, next) => {
    if (req.session.username) {
        next(); // Kullanıcı yetkili, devam et
    } else {
        res.redirect('/login'); // Kullanıcı yetkili değil, login sayfasına yönlendir
    }
}

module.exports = requireAuth;