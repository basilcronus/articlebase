/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list: function(req, res){
        Articles.find({}).exec((err, articles) => {
            if(err){
                res.send(500, {error: 'database error'})
            }
            res.view('list', {articles: articles});
        })
    },
    add: function(req, res){
        res.view('add');
    },
    create: function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Articles.create({title: title, body: body}).exec((err) => {
            if(err){
                res.send(500, {error: 'database error'})
            }
            res.redirect('/articles/list');
        })
    }
	
};

