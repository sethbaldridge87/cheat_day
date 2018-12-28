$(document).ready(function(){
    //var userfeed = new Instafeed({
//get: 'user',
//userId: '3316396077',
//limit:3,
//resolution: 'standard_resolution',
//accessToken:'9720192134.1677ed0.543018e5966e40ef8779ca1e199f9b31',
///sortBy: 'most_recent',
//template: '<div class="gallery"><a href="{{image}}"title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>",


//});
//userfeed.run();
//});

var feed = new Instafeed({
    get: 'user',
    userId: '3316396077' , 
    limit:4,
    accessToken: '3316396077.1677ed0.ff6adc3d3a15417098534089f24577a7',
    //resolution: 'standard_resolution',
    resolution: 'low_resolution',
  });
  feed.run();
});