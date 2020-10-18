(() => {
  /*
        数据渲染：
            前端：
                * 结构html写好，css写好，删除重复的结构保留一个即可
                * 发送ajax，获取数据，数据渲染
            后端：
                * 写接口：查询数据库，把数据做好，发给前端
    
    */

  // 查找元素
  let main_ul1 = document.getElementById("main-ul1");

  function init() {
    //初始化数据
    ajax({
      type: "get",
      url: "../api/list1.php",
      success: (str) => {
        console.log(str);
        create(str);
      },
    });

    function create(str) {
      let arr = JSON.parse(str); //将json字符串转换成对象
      console.log(arr);
      let html = arr
        .map(function (item) {
          return `<li data-id="${item.id}">
                        <a href="###" class="ul1-li-img">
                        <img
                            src="${item.img_url}"
                            alt=""
                            width="320"
                            height="320"
                        />
                        </a>
                        <a href="###" class="ul1-li-title">
                        <h3>${item.title}</h3>
                        </a>
                        <p class="ul1-li-p">
                        ${item.desc}
                        </p>
                        <p class="ul1-li-price">
                        <em>￥</em>
                        <span>${item.price}</span>
                        </p>
                    </li>`;
        })
        .join("");
      main_ul1.innerHTML = html;

      let alis = main_ul1.getElementsByTagName("li");

      // 循环绑定点击事件
      for (var i = 0; i < alis.length; i++) {
        alis[i].index = i;
        alis[i].onclick = function () {
          // 有数据要用url传输,要写成这种格式：name:apple&price=8999
          // console.log(this.index);
          // console.log(arr[this.index]);
          var str = objToStr(arr[this.index]);
          window.open("details.html?" + str);
        };
      }
    }
  }
  init();
})();
