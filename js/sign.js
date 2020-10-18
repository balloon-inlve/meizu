(() => {
  //获取元素
  let sign_use = document.getElementById("sign-use");
  let sign_psw = document.getElementById("sign-psw");
  let btn = document.getElementById("btn");
  let Tips = document.getElementById("sign-yes");
  let bye = document.getElementById("sign-out");
  let signok = document.getElementById("dengluok");

  //   【1】点击“登录”按钮
  btn.onclick = () => {
    console.log("111");
    let val1 = sign_use.value.trim();
    let val2 = sign_psw.value.trim();
    // 通过cookie看用户是否登录了，登录了不可重复登录，没登陆才可登录
    let name = getcookie("username");
    if (val1 && val2) {
      if (name) {
        Tips.innerHTML = "您已经在登录状态中。";
        Tips.style.color = "red";
        setTimeout(function () {
          location.href = "../index.html";
        }, 1500);
      } else {
        ajax({
          type: "post",
          url: "../api/sign.php",
          data: {
            val1,
            val2,
          },
          success: (str) => {
            console.log(str);
            // 存cookie
            if (str == "yes") {
              Tips.innerHTML = "登录成功！";
              Tips.style.color = "#58bc58";
              signok.innerHTML = "欢迎您登录我们网站!";
              signok.style.color = "#22a4ff";
              setTimeout(function () {
                location.href = "../index.html";
              }, 1500);
              setdata();
            } else {
              Tips.innerHTML = "用户名不存在或者密码不正确！";
              Tips.style.color = "red";
            }
          },
        });
      }
    } else {
      Tips.innerHTML = "选项不能为空哦！";
      Tips.style.color = "red";
    }
  };

  function setdata() {
    setcookie("username", sign_use.value.trim(), 7);
  }
  //   【2】点击“退出”按钮
  bye.onclick = () => {
    // 退出
    let x = confirm("您确定要退出吗?");
    if (x) {
      removeCookie("username");
      signok.innerHTML = "欢迎您访问我们网站!";
      signok.style.color = "#c95c39";
    }
  };

  let name1 = getcookie("username");
  if (name1) {
    signok.innerHTML = "欢迎您登录我们网站!";
    signok.style.color = "#22a4ff";
  } else {
    signok.innerHTML = "欢迎您访问我们网站!";
    signok.style.color = "#c95c39";
  }
})();
