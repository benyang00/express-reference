module.exports = {
  renderHome: function(req, res) {
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
