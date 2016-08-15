module.exports = {
  renderHome: function(req, res) {
    if (req.session.lastVisit) {
      console.log('SESSION ' + req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('static_pages/index', {
      title: 'Hello WDI'
    });
  },
  renderAbout: function(req, res) {
    res.render('static_pages/about', {
      title: 'About WDI'
    });
  },
  renderContact: function(req, res) {
    res.render('static_pages/contact', {
      title: 'Contact WDI'
    });
  }
}
