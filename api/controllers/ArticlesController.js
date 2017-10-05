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
    },
    delete: function(req, res){
        Articles.destroy({id: req.params.id}).exec((err) => {
            if(err){
                res.send(500, {error: 'database error'})
            }
            res.redirect('/articles/list');
        });

        return false;
    },
    edit: function(req, res){
        Articles.findOne({id:req.params.id}).exec((err, article) => {
            if(err){
                res.send(500, {error: 'database error'})
            }

            res.view('edit', {article:article});
        })
    },
    update: function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Articles.update({id: req.params.id},{title: title, body: body}).exec((err) => {
            if(err){
                res.send(500, {error: 'database error'})
            }
            res.redirect('/articles/list');
        });
        return false;
    }	
};

