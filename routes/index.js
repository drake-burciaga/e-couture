var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let booklist = [
    {
        title: 'Tightrope - Americans Reaching for Hope',
        author: 'Nicholas D. Kristof and Sheryl WuDunn',
        publishedAt: new Date('2020-01-20'),
    },
    {
        title: 'Dear Edward',
        author: 'Ann Napolitano',
        publishedAt: new Date('2019-12-18'),
    },
    {
        title: 'I Am the Lorax',
        author: ' Courtney Carbone',
        publishedAt: new Date('2020-05-17'),
    },
    {
      title: 'Drake Burciaga - Autobiography',
      author: ' Drake Burciaga',
      publishedAt: new Date('2021-01-01'),
  }
];


  res.render('index', { books: booklist });
});

module.exports = router;
