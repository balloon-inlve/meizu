(() => {
  // 查找节点
  let text1 = document.getElementById("text1");
  let text2 = document.getElementById("text2");
  let btns = document.getElementById("btns");
  let Tips1 = document.getElementById("text1-span1");
  let Tips2 = document.getElementById("text2-span2");
  let Yes = document.getElementById("zhuce-yes");
  let ornot = false; //验证用户名是否存在的开关

  //  【1】、验证用户名是否存在 发送ajax
  text1.onblur = () => {
    let val = text1.value.trim();
    //  帐号是否合法(中文、英文、数字但不包括下划线等符号)
    let reg = /^[\u4E00-\u9FA5A-Za-z0-9]{2,10}$/;
    //   1、非空验证
    if (val) {
      Tips1.innerHTML = "";
      var isok = reg.test(val);
      if (isok) {
        //正则验证通过
        Tips1.innerHTML = "用户名验证成功！";
        Tips1.style.color = "#58bc58";
        // 发送ajax,把用户名存到数据库
        ajax({
          type: "post",
          url: "../api/checkname.php",
          data: {
            name: text1.value.trim(),
          },
          success: (str) => {
            console.log(str);
            if (str == "yes") {
              Tips1.innerHTML = "用户名注册成功！";
              Tips1.style.color = "#58bc58";
              ornot = true;
            } else {
              Tips1.innerHTML = "用户名已存在！";
              Tips1.style.color = "#58bc58";
              ornot = false;
            }
          },
        });
      } else {
        Tips1.innerHTML =
          "用户名只能是中文、英文、数字的最少2位最多10位字符哦！";
        Tips1.style.color = "red";
      }
    } else {
      Tips1.innerHTML = "用户名不能为空哦！";
      Tips1.style.color = "red";
    }
  };
  //密码验证
  text2.onblur = () => {
    let val = text2.value.trim();
    //  密码至少8位，要求必须字母、数字加英文符号（不包含空格）
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
    //   1、非空验证
    if (val) {
      Tips2.innerHTML = "";
      var isok = reg.test(val);
      if (isok) {
        //正则验证通过
        // Tips2.innerHTML = "密码输入成功！";
        // Tips2.style.color = "#58bc58";
      } else {
        Tips2.innerHTML =
          "密码只能是字母、数字加英文(不能包含有空格)的8位字符哦！";
        Tips2.style.color = "red";
      }
    } else {
      Tips2.innerHTML = "密码不能为空哦！";
      Tips2.style.color = "red";
    }
  };
  text1.onfocus = () => {
    Tips1.innerHTML = "用户名只能是中文、英文、数字的最少2位最多10位字符哦！";
    Tips1.style.color = "red";
  };
  text1.oninput = () => {
    Tips1.innerHTML = "";
  };
  text2.onfocus = () => {
    Tips2.innerHTML = "密码只能是字母、数字加英文(不能包含有空格)的8位字符哦！";
    Tips2.style.color = "red";
  };
  text2.oninput = () => {
    Tips1.innerHTML = "";
  };

  //【2】用户名没有存在数据库中就意为可以注册
  btns.onclick = () => {
    if (ornot) {
      ajax({
        type: "post",
        url: "../api/register.php",
        data: {
          name: text1.value.trim(),
          password: text2.value.trim(),
        },
        success: (str) => {
          console.log(str);
          if (str == "yes") {
            Yes.innerHTML = "注册成功!";
            Yes.style.color = "#58bc58";
            setTimeout(function () {
              location.href = "../html/sign.html?name=" + text1.value.trim();
              text1.value = "";
            }, 1500);
          } else {
          }
        },
      });
    }
  };
})();
