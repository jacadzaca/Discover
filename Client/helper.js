function fetchdata(url,cback){
    var req = new XMLHttpRequest();
    req.open("GET",url,true);
    req.addEventListener("load",cback);
    req.send();
}

function logreq(event){
    console.log("Event:")
    console.log(event.target.response)
}

function parse_news_item(dat){
    var item = {};
    item.title = dat.slice(dat.search("<title>")+7,dat.search("</title>"));
    item.description = dat.slice(dat.search("<description>")+13,dat.search("</description>"));
    item.url = dat.slice(dat.search("<link>")+6,dat.search("</link>"));;
    item.img = dat.slice(dat.search("<img>")+5,dat.search("</img>"));;
    return item;

}

function get_rss_list(data){
    var items = data.split("<item>").splice(1);
    return items.map(parse_news_item).reverse();
}

//https://davidwalsh.name/query-string-javascript
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
