//外部脚本不能包含 <script> 标签。

//1.Canvas上画矩形
var c = document.getElementById("canvasRect1");
var ctx = c.getContext("2d");
//创建一个径向/圆渐变对象，对象作为 strokeStyle 或 fillStyle 属性的值
/*context.createRadialGradient(x0,y0,r0,x1,y1,r1);
x0:渐变的开始圆的 x 坐标
y0:渐变的开始圆的 y 坐标
r0:开始圆的半径
x1:渐变的结束圆的 x 坐标
y1:渐变的结束圆的 y 坐标
r1:结束圆的半径*/
var radialGrd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
radialGrd.addColorStop(0, "red");
radialGrd.addColorStop(1, "white");
//填充径向/圆渐变
ctx.fillStyle = radialGrd;
//fillRect(x,y,width,height) 方法定义了矩形当前的填充方式
//意思是：在画布上绘制 150x50 的矩形，从左上角开始 (0,0)
ctx.fillRect(0, 0, 150, 50);

//在画布上绘制 150x50 的矩形，从(15,5)开始 
c = document.getElementById("canvasRect2");
ctx = c.getContext("2d");
//创建线性渐变对象，对象作为 strokeStyle 或 fillStyle 属性的值
/*context.createLinearGradient(x0,y0,x1,y1);
x0:渐变开始点的 x 坐标
y0:渐变开始点的 y 坐标
x1:渐变结束点的 x 坐标
y1:渐变结束点的 y 坐标*/
var LineGrd = ctx.createLinearGradient(0, 0, 200, 0);
LineGrd.addColorStop(0, "red");
LineGrd.addColorStop(1, "white");
//填充线性渐变
ctx.fillStyle = LineGrd;
ctx.fillRect(15, 5, 150, 50);


//2.Canvas上画线
c = document.getElementById("canvasLine");
ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 60);
ctx.stroke();


//3.Canvas上画圆形/弧线
/*arc() 方法创建弧/曲线（用于创建圆或部分圆）
 如需通过 arc() 来创建圆，
    请把起始角设置为 0，结束角设置为 2*Math.PI
 context.arc(x,y,r,startAngle,endAngle,counterclockwise);
 x:圆的中心的 x 坐标
 y:圆的中心的 y 坐标
 r:圆的半径
 startAngle:起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）
 endAngle:结束角，以弧度计
 counterclockwise:可选。规定应该逆时针还是顺时针绘图。False(默认)= 顺时针，true= 逆时针。
 */
c = document.getElementById("canvasCircle1");
ctx = c.getContext("2d");
ctx.beginPath();       
ctx.arc(95, 30, 20, 0, 1.5 * Math.PI);
ctx.stroke();

c = document.getElementById("canvasCircle2");
ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 30, 20, 0, 2.0 * Math.PI);
ctx.stroke();

//Canvas上绘制太极
c = document.getElementById("canvasTaiji");
ctx = c.getContext("2d");
//①绘制最大白色右半圆
ctx.beginPath();
ctx.arc(60, 60, 40, 1.5 * Math.PI, 0.5 * Math.PI, false);
ctx.fillStyle = "white";
ctx.closePath();
ctx.fill();
//②绘制最大黑色左半圆
ctx.beginPath();
ctx.arc(60, 60, 40, 0.5 * Math.PI, 1.5 * Math.PI, false);
ctx.fillStyle = "black";
ctx.closePath();
ctx.fill();
//③绘制上部中等白色完整圆
ctx.beginPath();
ctx.arc(60, 40, 20, 0, 2 * Math.PI, false);
ctx.fillStyle = "white";
ctx.closePath();
ctx.fill();
//④绘制下部中等黑色完整圆
ctx.beginPath();
ctx.arc(60, 80, 20, 0, 2 * Math.PI, false);
ctx.fillStyle = "black";
ctx.closePath();
ctx.fill();
//⑤绘制上部最小黑色完整圆
ctx.beginPath();
ctx.arc(60, 40, 3, 0, 2 * Math.PI, false);
ctx.fillStyle = "black";
ctx.closePath();
ctx.fill();
//⑥绘制下部最小白色完整圆
ctx.beginPath();
ctx.arc(60, 80, 3, 0, 2 * Math.PI, false);
ctx.fillStyle = "white";
ctx.closePath();
ctx.fill();


//4.Canvas上绘制文本
c = document.getElementById("canvasText1");
ctx = c.getContext("2d");
ctx.font = "30px Aria";
//fillText(text,x,y) - 在 canvas 上绘制实心的文本
ctx.fillText("Hello World", 10, 50);

c = document.getElementById("canvasText2");
ctx = c.getContext("2d");
ctx.font = "30px Aria";
//strokeText(text,x,y) - 在 canvas 上绘制空心的文本
ctx.strokeText("Hello World", 10, 50);


//5.Canvas上放置图像
/*src路径问题参考：https://blog.csdn.net/holly_Z_P_F/article/details/85172617 */
c = document.getElementById("canvasImage");
ctx = c.getContext("2d");
var img = new Image();
img.src = "../images/sign.jpg";
ctx.drawImage(img,0,0,200,120);

