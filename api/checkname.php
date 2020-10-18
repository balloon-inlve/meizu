<?php
include "common.php";
// 验证用户名是否存在


// 接收前端传过来的数据
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';


//新建查询
$sql = "SELECT * FROM userinf WHERE usename='$name'";

// 执行语句
$res = $conn->query($sql);

// var_dump($res);

if ($res->num_rows) {
    //查找到，不能注册
    echo 'no';
} else {
    echo 'yes';
}
