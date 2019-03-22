var seeMore = document.getElementsByClassName("see-more");
var detailDesc = document.getElementsByClassName("detail__desc");

seeMore[0].onclick = myFunctionA;
detailDesc[0].onclick = myFunctionA;

function myFunctionA() {
  if (detailDesc[0].style.height === "60px") {
    detailDesc[0].style.height = "max-content";
    seeMore[0].innerHTML = "一部表示";
  } else {
    detailDesc[0].style.height = "60px";
    seeMore[0].innerHTML = "全て表示";
  }
}

seeMore[1].onclick = myFunctionB;
detailDesc[1].onclick = myFunctionB;

function myFunctionB() {
  if (detailDesc[1].style.height === "60px") {
    detailDesc[1].style.height = "max-content";
    seeMore[1].innerHTML = "一部表示";
  } else {
    detailDesc[1].style.height = "60px";
    seeMore[1].innerHTML = "全て表示";
  }
}
