//data.js
//负责分数的计算和显示
//1.创建分数的构造函数  dataObj
 var dataObj=function(){
     //1.1游戏分数
     this.scope=0;
 }
//2.为分数构造函数添加绘制方法 draw
dataObj.prototype.draw=function(){
    //2.1保存画笔1的状态
    ctx1.save();
    ctx1.fillStyle="#fff";
    ctx1.font="30px SimHei";
    //2.2绘制分数
    ctx1.fillText("SCORE:"+this.scope,canWidth*0.5,canHeight-100);
    //2.3恢复画笔1状态
    ctx1.restore();
}
//3.将data.js添加index.html文件中
//4.在main.js创建分数对象并且调用方法
//5.在collsion.js加分