<?php
include "common.php";

//登录功能

// 接收前端传过来的数据
$val1 = isset($_REQUEST['val1']) ? $_REQUEST['val1'] : 'liaoxi';
$val2 = isset($_REQUEST['val2']) ? $_REQUEST['val2'] : '12345678';


//新建查询
$sql = "SELECT * FROM userinf WHERE usename='$val1' AND psw='$val2'";

// 执行语句
$res = $conn->query($sql);

// var_dump($res);

if ($res->num_rows) {
    //登录成功
    echo 'yes';
} else {
    // 登录失败
    echo 'no';
}
