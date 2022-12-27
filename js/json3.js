
// 全网热播
var sites = [
    { "mc":"花木兰"}, 
    { "mc":"无问西东"}, 
    { "mc":"大话西游"}, 
    { "mc":"巅峰之夜"}
];


for(var i=0;i<sites.length;i++){ 
    document.getElementById("mc"+i).innerHTML=sites[i].mc; }