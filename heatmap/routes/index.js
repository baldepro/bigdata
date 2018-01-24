var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var HBase = require('hbase-client');

  var app = express();

  // habse connection
  var client = HBase.create({
    zookeeperHosts: [
      '10.0.8.3:16010' // only local zookeeper
    ],
    zookeeperRoot: '/hbase',
  });
  client.getRow('ZTworldcitiespop2', '\x00\x00\xBBk', ['FamilyLat:latitude', 'FamilyLong:longitude', 'FamilyPop:population'], function (err, row) {
    if(err) console.log(err);
    console.log(row);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
