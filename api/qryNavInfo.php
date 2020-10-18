<?php
include "common.php";

// 新建查询
$sql = "SELECT * FROM index_header";

// 执行语句
$res = $conn->query($sql);

$arr = $res->fetch_all(MYSQLI_ASSOC); //从结果集中提取数据

echo json_encode($arr, JSON_UNESCAPED_UNICODE); //把php数据转换为json数据格式返回给前端

// 设置编码
$conn->set_charset('utf8');
