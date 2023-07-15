<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取通过POST请求发送的用户名和密码
    $username = $_POST["username"];
    $password = $_POST["password"];

    // 在这里执行登录逻辑，比如从数据库中验证用户名和密码

    // 假设验证成功，返回成功消息
    $response = "登录成功";

    // 将响应发送回前端
    echo $response;
}
?>
