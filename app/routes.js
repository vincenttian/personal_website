module.exports = function(app) {

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/resume', function(req, res) {
        res.render('resume.ejs');
    });

    app.get('/blog', function(req, res) {
        res.render('blog.ejs');
    });

    app.get('/interests', function(req, res) {
        res.render('interests.ejs');
    });

    app.get('/projects', function(req, res) {
        res.render('projects.ejs');
    });

    app.get('/blueprint', function(req, res) {
        res.render('blueprint.ejs');
    });

    app.get('/webdev', function(req, res) {
        res.render('webdev.ejs');
    });

    app.get('/contact', function(req, res) {
        res.render('contact.ejs');
    });
};
