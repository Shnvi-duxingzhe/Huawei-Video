// 个人看点
var sites = [
    { "kd":"悟空"}, 
    { "kd":"悟净"}, 
    { "kd":"悟能"}, 
    { "kd":"唐僧"},
    { "kd":"八戒"}, 
    { "kd":"猴哥"},
    { "kd":"二师兄"}, 
    { "kd":"沙师弟"}
];


for(var j=0;j<sites.length;j++){ 
    document.getElementById("kd"+j).innerHTML=sites[j].kd; }