<?php
include "common.php";
//列表页

// 写语句
$sql = 'SELECT * FROM list2data';

// 执行语句
$res = $conn->query($sql); //得到的是一个结果集

$arr = $res->fetch_all(MYSQLI_ASSOC); //数组[[],[]]

//把数据传给前端：对象->字符串
echo json_encode($arr, JSON_UNESCAPED_UNICODE);
