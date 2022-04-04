"use strict"
let sections=document.getElementsByTagName("section")

function hideSections() {
    for (let i=0;i<sections.length;i++) {
        sections[i].style.display="none"
    }
}
function displaySection (id) {
    hideSections()
    document.getElementById(id).style.display="block"
}