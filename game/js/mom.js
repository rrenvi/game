//功能:
//-大鱼外观图片
//-大鱼跟随鼠标移动
//-大鱼吃食物
//1.创建大鱼构造函数momObj
var momObj=function(){
   //1.1创建2个变量保存大鱼位置x,y
   this.x;
   this.y;
   //1.2创建一个变量保存大鱼角度
   this.angle;
   //1.3创建一个变量保存大鱼眼睛图片
   this.bigEye=[];
   //1.4创建一个变量保存大鱼身体
   this.bigBody=[];
   //1.5创建一个变量保存大鱼尾巴
   this.bigTail=[];
}
//2.为大鱼构造函数添加方法init
momObj.prototype.init=function(){
    //2.1为大鱼x,y赋值屏幕中心
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    //2.2为大鱼角度赋值0
    this.angle=0;
    //2.3创建循环赋值大鱼的眼睛
    for(var i=0;i<2;i++){
        this.bigEye[i]=new Image();
        this.bigEye[i].src="src/bigEye"+i+".png";
    }
    //2.4创建循环赋值大鱼身体
    for(var i=0;i<8;i++){
        this.bigBody[i]=new Image();
        this.bigBody[i].src="src/bigSwim"+i+".png";
    }
    //2.5创建循环赋值大鱼尾巴
    for(var i=0;i<8;i++){
        this.bigTail[i]=new Image();
        this.bigTail[i].src="src/bigTail"+i+".png";
    }
}
//3.为大鱼构造函数胡添加方法draw
momObj.prototype.draw=function(){
    //3.01获取鼠标位置赋值大鱼位置
    this.x=mx;
    this.y=my;
    //3.1保存画笔1状态
    ctx1.save();
    //3.2移动画布原点到大鱼位置
    ctx1.translate(this.x,this.y);
    //3.3修改画笔角度同大鱼角度
    ctx1.rotate(this.angle);
    //3.4绘制大鱼身体图片
    ctx1.drawImage(this.bigBody[0],0,0);
    //3.5绘制大鱼尾巴
    ctx1.drawImage(this.bigTail[0],0+39,0+6);
    //3.6绘制大鱼眼睛
    ctx1.drawImage(this.bigEye[0],0+20,0+20);
    //3.7恢复画笔1状态
    ctx1.restore();
    //为c1绑定鼠标移动事件
        //获取offsetX  offsetY
        //大鱼x y 
}
//4.将mom.js添加index.html文件中
//5.在main.js创建大鱼对象并调用方法
//6.创建函数获取鼠标位置赋值mx,my
function handleMove(event){
    mx=event.offsetX;
    my=event.offsetY;
    console.log(mx+":"+my);
}