//功能:
//-.创建所有的全局变量，
//-.游戏中的所有对象，
//-.调用游戏对象中的方法

//1.创建函数game  入口函数
//1.1创建两个全局变量保存画布
var c1;
var c2;
//1.2创建两个全局变量保存画笔对象
var ctx1;
var ctx2;
//1.3创建两个全局变量保存画布宽高
var canWidth;
var canHeight;
//1.4创建两个全局变量保存背景图片
var bgPic;
//1.5创建全局变量保存海葵对象
var ane;
//1.6创建全局变量保存食物对象
var fruit;
//1.7创建全局变量保存大鱼对象
var mom;
//1.8创建俩个全局变量保存鼠标位置
var mx=0;
var my=0;
//1.6创建全局对象保存鼠标位置
var data;

function game(){
    init();
    gameloop();
}
//2.创建函数init  初始化(创建对象)
function init(){
    //2.1获取两个画布赋值c1 c2
    c1=document.getElementById("c1");
    c2=document.getElementById("c2");
    //2.2依据画布获取画笔对象赋值ctx1 ctx2
    ctx1=c1.getContext("2d");
    ctx2=c2.getContext("2d");
    //2.3获取画布宽高赋值canWidth;canHeight
    canWidth=c1.width;
    canHeight=c1.height;
    //2.3创建背景图片并且下载图片
    bgPic=new Image();
    bgPic.src="src/background.jpg";
    // console.log(c1);
    // console.log(c2); 
    // console.log(ctx1);
    // console.log(ctx2);
    // console.log(canHeight+":"+canWidth);
    //2.5创建海葵对象并调用初始化方法
    ane =new aneObj();//全局中保存
    ane.init();
    //2.6创建食物对象并调用初始化方法
    fruit=new fruitObj();
    fruit.init();
    //2.7创建大鱼对象并调用初始化方法
    mom=new momObj();
    mom.init();
    //2.8为画布1绑定鼠标移动事件
    c1.addEventListener("mousemove",handleMove);
    //2.9创建分数对象并调用初始化方法
    data=new dataObj();
}
//3.创建函数gameloop 循环调用绘制方法
function gameloop(){
    //3.1创建定时器
    requestAnimationFrame(gameloop);
    //3.2.绘制背景图片
    ctx2.drawImage(bgPic,0,0);
    //3.3绘制海葵
    ane.draw();
    //3.3.0调用碰撞检测函数
    momFruitsCollsion();
    //3.3.1调用监听函数
    fruitMonitor();
    //3.4绘制食物
    fruit.draw();
    //3.4.1清除画布
    ctx1.clearRect(0,0,canWidth,canHeight);
    //3.5绘制大鱼
    mom.draw();
    //3.6绘制分数
    data.draw();

}
//4.当网页加载成功调用game函数
document.body.onload=game;
//5.main.js添加index.html