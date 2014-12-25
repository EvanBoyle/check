var JSX = require('node-jsx').install(),
  CheckApp = require('./components/CheckApp.react')
  React = require('react');

module.exports = {

  index: function(req, res) {
    var markup = React.renderComponentToString(
        CheckApp()
      );
    res.render('home', {
      markup: markup
    });
  },
}