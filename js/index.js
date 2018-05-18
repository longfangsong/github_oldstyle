let origin_left = document.getElementsByClassName("dashboard-sidebar")[0];
let origin_right = document.getElementsByClassName("news")[0];
let parent = document.getElementById("dashboard");
parent.insertBefore(origin_right, origin_left);