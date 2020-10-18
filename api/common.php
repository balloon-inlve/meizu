<?php
header('Content-type:text/html;charset=utf-8');
// 连接数据库
$servername = 'localhost';
$username = 'root'; //登录数据库用户名
$password = ''; //默认没有密码，是空字符串
$dbname = 'meizu';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    // 证明连接失败
    die("连接失败:" . $conn->connect_error);
} else {
    // echo '连接成功';
}

// 查询接口 qry
// 修改接口 mod
// 删除接口 del
