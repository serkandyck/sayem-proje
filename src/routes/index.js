

exports.appRoute = router => {

    // Home Page
    router.get('/', (req, res) => {
        res.render('index');
    });
}