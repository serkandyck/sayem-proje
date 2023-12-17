const requireAuth = (req, res, next) => {
    if (req.session.username) {
        console.log("Burdayım be", req.session.username);
        next(); // User is authenticated, continue to next middleware
    } else {
        console.log("Nasıl burdayım şak diye");
        res.redirect('/login'); // User is not authenticated, redirect to login page
    }
}

module.exports = requireAuth;