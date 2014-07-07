var fs = require('fs');
var http = require('http');

module.exports = function(app) {

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/resume', function(req, res) {
        res.render('resume.ejs');
    });

    app.get('/resume_pdf', function(req, res) {
        fs.readFile('./views/resume.pdf', function(error, content) {
            if (error) {
                res.writeHead(500);
                res.end();
            } else {
                res.writeHead(200, {
                    'Content-Type': 'application/pdf'
                });
                res.end(content, 'utf-8');
            }
        });
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

    app.get('/games', function(req, res) {
        res.render('games.ejs');
    });

    app.get('/tools', function(req, res) {
        res.render('tools.ejs');
    });

    app.get('/contact', function(req, res) {
        res.render('contact.ejs');
    });
};
