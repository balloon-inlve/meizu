(() => {
  // 详情页

  // 吸顶菜单
  let menu = document.getElementById("menu-bar");

  var iTop = menu.offsetTop;
  /*
    滚动滑轮，获取滚动距离
    如果超过了临界值，就给菜单添加fixed，吸在顶部
  */
  window.onscroll = function () {
    var scrollTop = window.scrollY;
    if (scrollTop >= iTop) {
      menu.className = "fix";
    } else {
      menu.className = "";
    }
  };

  /*
    详情页接收列表页的数据
      * 获取url，进行数据的提取 location.href  location.search
      * 获取到数据是参数->转成对象
      * encodeURI();//转码
      * decodeURI();//解码
      * 渲染到详情页，就可以实现详情页的共享
  
  
  */
  console.log(location.href); //获取整个url
  console.log(location.search); //获取参数：包含?

  var str = decodeURI(location.search.slice(1));
  console.log(str);
  let data = strToObj(str); //参数转成对象
  console.log(data);

  let h5title = document.getElementById("main-right-h5");
  let subtitle = document.getElementById("main-right-p1");
  let Price = document.getElementById("right-grey-price");
  let Img = document.getElementById("main-left-img");

  let html1 = `<h5>${data.title}</h5>`;
  h5title.innerHTML = html1;

  let html2 = `<p>${data.desc}</p>`;
  subtitle.innerHTML = html2;

  let html3 = `<span>${data.price}</span>`;
  Price.innerHTML = html3;

  // 大图切小图
  let img = document.getElementById("main-left-img");
  let list = document.getElementById("list");
  let aimgs = list.getElementsByTagName("img");

  for (var i = 0; i < aimgs.length; i++) {
    aimgs[i].onclick = function () {
      console.log(this);
      //排他思想
      for (var j = 0; j < aimgs.length; j++) {
        aimgs[j].className = "";
      }
      this.className = "active";
      img.src = this.src;
    };
  }
})();
