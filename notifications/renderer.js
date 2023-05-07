document.getElementById("notifications").innerHTML = `
<p>After launching this application, you should see the system notification.</p>
<button id="button-notify">Notify From Renderer</button>
`;
const NOTIFICATION_TITLE = "标题";
const NOTIFICATION_BODY = "来自渲染进程的通知. 点击后将在控制台输出信息.";
const CLICK_MESSAGE_SHOW = "已展示通知";
const CLICK_MESSAGE_CLICK = "已点击通知";
const CLICK_MESSAGE_CLONE = "已关闭通知";

const button = document.getElementById("button-notify");

button.addEventListener("click", () => {
  const notify = new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY });

  notify.addEventListener("show", () => {
    console.log(CLICK_MESSAGE_SHOW);
  });

  notify.addEventListener("click", () => {
    console.log(CLICK_MESSAGE_CLICK);
  });

  notify.addEventListener('close',()=>{
    console.log(CLICK_MESSAGE_CLONE);
  })

});
