$(document).ready(function() {
    // 注册表单提交事件
    $("#registerForm").submit(function(event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        // 获取用户名和密码
        var username = $("#registerUsername").val();
        var password = $("#registerPassword").val();

        // 发送注册请求到后端
        $.ajax({
            url: "register.php",
            type: "POST",
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                $("#message").html(response); // 显示后端返回的消息
            }
        });
    });

    // 登录表单提交事件
    $("#loginForm").submit(function(event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        // 获取用户名和密码
        var username = $("#loginUsername").val();
        var password = $("#loginPassword").val();

        // 发送登录请求到后端
        $.ajax({
            url: "login.php",
            type: "POST",
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                if (response === "登录成功") {
                    // 登录成功后重定向到用户主页或其他页面
                    window.location.href = "home.html";
                } else {
                    $("#message").html(response); // 显示后端返回的消息
                }
            }
        });
    });
});
