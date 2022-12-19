var sites = [
	{ "name":"设置"}, 
    { "name":"帮助与客服"}, 
    { "name":"问题与建议"}, 
    { "name":"关于"},
];


for(var i=0;i<sites.length;i++){ 
    document.getElementById("name"+i).innerHTML=sites[i].name; }