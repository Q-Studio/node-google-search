var client = require('cheerio-httpcli');
var fs = require('fs');
//--------input
var query = process.argv[2];

//--------global
var lasturl='';
var debug=1;    //dubug mode

GoogleSearch(query,0);  

function GoogleSearch(query,page)
{
	var onepageresults=[];
	client.fetch('http://www.google.com/search', {q:query,num:100,start:page*100}, function (err, $, res, body) {

		if($('li[class="g"]>div>h3>a').last().text()!= lasturl) // To check whether current page is last
			{				
				$('li[class="g"]>div>h3>a').each(function (idx) {
					var oneresult = {};
					oneresult['title']=$(this).text(); 			
					oneresult['url']=$(this).attr('href'); 
					oneresult['des']=$(this).parents('.rc').children('div[class="s"]').children('div').children('span').text();
					onepageresults.push(oneresult);
				});
				if(debug)console.log(onepageresults);
				lasturl=$('li[class="g"]>div>h3>a').last().text();
				//if(debug)console.log(lasturl);
				GoogleSearch(query,++page);					
			}
		else			//muiltiple pages are downloaded!
			{
				if(debug)console.log('Total pages: '+(page-1));
				return;
			}
	});
}

