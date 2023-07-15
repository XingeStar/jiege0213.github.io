<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取通过POST请求发送的用户名和密码
    $username = $_POST["username"];
    $password = $_POST["registerPassword"];

    // 在这里执行注册逻辑，比如将用户名和密码保存到数据库中

    // 假设注册成功，返回成功消息
    $response = "注册成功";

    // 将响应发送回前端
    echo $response;
}
?>
