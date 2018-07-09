document.getElementById("login").onclick=function (ev) {
    document.getElementById("mask").style.display="block";
    setTimeout(function () {
        hideMask();
    },1000);
}

/**
 * 隐藏遮罩层
 */
function hideMask() {
    document.getElementById("mask").style.display="none";
}