document.getElementById("login").onclick=function (ev) {
    console.log("点击");
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