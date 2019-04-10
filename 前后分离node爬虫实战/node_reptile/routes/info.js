var express = require('express');
var router = express.Router();
// var request = require('request');
var http = require('http')
var cheerio = require('cheerio');
// var iconv = require('iconv-lite')

/* GET users listing. */
// router.get('/', function (req, res, next) {
//
//     //var url = 'http://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91?kd=%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91&spc=1&pl=&gj=&xl=&yx=&gx=&st=&labelWords=label&lc=&workAddress=&city=%E5%85%A8%E5%9B%BD&requestId=&pn=1';
//     var url = 'http://www.cnblogs.com'
//     request(url, function (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             console.log('#####################')
//             console.log(body)
//             console.log('#####################')
//             //返回的body为抓到的网页的html内容
//             var $ = cheerio.load(body) //当前的$符相当于拿到了所有的body里面的选择器
//             var navText = $('.post_nav_block').html() //拿到导航栏的内容
//             console.log('#####################')
//             console.log(navText)
//             console.log('#####################')
//             res.send(navText)
//         }
//     })
// })

router.get('/', function (req, res, next) {
    var url = 'http://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91?kd=%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91&spc=1&pl=&gj=&xl=&yx=&gx=&st=&labelWords=label&lc=&workAddress=&city=%E5%85%A8%E5%9B%BD&requestId=&pn=1';
    // var url = 'http://www.loldytt.com/Dongzuodianying/WKC/'
    http.get(url, function (res) {
        var length=0;
        var arr=[];
        res.on("data",function(chunk){
            arr.push(chunk);
            length+=chunk.length;
        });
        res.on("end",function(){
            var data=Buffer.concat(arr,length);
            console.log(data.toString(), '好嗨哦');
        })
    })
})


module.exports = router;
