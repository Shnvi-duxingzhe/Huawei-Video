function search() {
    let oDiv = document.getElementsByClassName('sort-search-page')[0];
    if (oDiv.style.display == 'none'){
        oDiv.style.display = 'block'
    }else{
        oDiv.style.display = 'none'
    }
}
function cancel() {
    let oDiv = document.getElementsByClassName('sort-search-page')[0];
    oDiv.style.display = 'none'
}