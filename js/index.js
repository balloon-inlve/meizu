(() => {
  // 记录头部次级导航信息数据
  let sec_nav_data = [];

  // 头部
  const el_header = document.getElementById("header-wrap");
  // 导航
  const el_header_nav = el_header.querySelector(".nav");
  const el_header_nav_items = el_header_nav.querySelectorAll("a");
  // 次级导航
  const el_header_sec_nav = el_header.querySelector(".sec-nav");

  el_header_nav.addEventListener("mouseenter", () => {
    el_header_sec_nav.classList.add("sec-nav-show");
  });
  el_header.addEventListener("mouseleave", () => {
    el_header_sec_nav.classList.remove("sec-nav-show");
  });
  el_header_nav_items.forEach((item, index) => {
    item.addEventListener("mouseenter", (e) => {
      // filter 从总数据中  过滤出type为index 即同类型的数据
      const data = sec_nav_data.filter((val) => val.type === String(index));
      if (data && data.length > 0) {
        el_header_sec_nav.innerHTML = data
          .map((val) => {
            return `<li>
          <a href="###">
            <img
              src="${val.img_url}"
              alt="header-product"
            />
            <span>${val.name}</span>
            <em>&yen;${val.price}</em>
          </a>
        </li>`;
          })
          .join("");
        el_header_sec_nav.classList.add("sec-nav-show");
      } else {
        el_header_sec_nav.classList.remove("sec-nav-show");
      }
    });
  });

  // 请求头部次级导航信息数据
  ajax({
    type: "post",
    url: "/api/qryNavInfo.php",
    success: (str) => {
      const data = JSON.parse(str);
      sec_nav_data = data;
    },
  });

  // 快速回到顶部
  let totop = document.getElementById("to-top");

  // 滚动到300的时候，回到顶部
  window.onscroll = function () {
    var scrollTop = window.scrollY;
    if (scrollTop >= 300) {
      totop.style.display = "block";
    } else {
      totop.style.display = "none";
    }
  };

  totop.onclick = function () {
    // console.log("1111");
    var scrollTop = window.scrollY;
    var timer = setInterval(function () {
      scrollTop -= 40;
      if (scrollTop <= 0) {
        clearInterval(timer);
      }
      window.scrollTo(0, scrollTop);
    }, 30);
  };
})();
