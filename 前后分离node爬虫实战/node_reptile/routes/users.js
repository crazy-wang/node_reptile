var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs')
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
    // var url = 'http://www.cnblogs.com'
    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // res.header("Content-Type", "application/json; charset=utf-8")
            //返回的body为抓到的网页的html内容
            // var buf = iconv.decode(body, 'utf8')
            var $ = cheerio.load(body) //当前的$符相当于拿到了所有的body里面的选择器
            var company = $('.r_company_con li').html() //拿到导航栏的内容
            console.log('#####################')
            // 一定要用.text();获得文本；html()会显示出中文字符编码；目前暂不知道原因。
            console.log($('.r_company_con').text())
            console.log('#####################')
            console.log($('.r_company_con li').text())
            var jobs = []
            $('.r_company_con li').each(function () {
                var job = {}
                job.company = $(this).find('a').text()
                jobs.push(job)
            })
            // res.send(company)
            fs.writeFileSync('data.json', JSON.stringify(jobs)); // 存到本地
            // fs.writeFileSync('./data/data.json', JSON.stringify(jobs)); // 存到本地data.json里。必须先有data文件夹才可以
            res.send(jobs)
            // res.json(jobs)
        }
    })
})


module.exports = router;
