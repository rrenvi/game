//功能:海葵
//-50条
//-左右摆动
//1.创建海葵构造函数obj
var aneObj=function(){
    //添加起点坐标x  //y轴固定不变
    this.rootX=[];
    //添加终点坐标xy
    this.headX=[];
    this.headY=[];
    //添加摆动幅度
    this.amp=[];
    //连续变化的数值范围-1~1
    this.alpha=0;
};
//2.为海葵构造函数添加属性num=50
aneObj.prototype.num=50;
//3.为海葵构造函数添加方法init初始化
aneObj.prototype.init=function(){
   //创建循环遍历所有海葵
   for(var i=0;i<this.num;i++){
   //为起点坐标x赋值
   this.rootX[i]=i*16+Math.random()*20; //Math.random随机数
   //为终点坐标x赋值
   this.headX[i]=this.rootX[i];
   //为终点坐标y赋值
   this.headY[i]=canHeight-300+Math.random()*50;
   //为摆动的浮动赋值20~40
   this.amp[i]=20+Math.random()*20;
   }
   console.log(this);
}
//4.为海葵构造函数添加方法draw方法
aneObj.prototype.draw=function(){
    //4.1保存画笔2状态
    //保存画布的圆心、角度、颜色...
    ctx2.save();
    //4.2样式 宽 圆角透明度
    ctx2.strokeStyle="#3b154e";
    ctx2.lineWidth=20;
    ctx2.globalAlpha=0.5;
    ctx2.lineCap="round";
    //4.3计算非常小小数并返回
      //-1~1范围 摆动幅度
      this.alpha+=0.0008*36;
      var p=Math.sin(this.alpha);
    //4.4创建循环遍历每条海葵
    for(var i=0;i<this.num;i++){
    //4.5开始一条新路劲
    ctx2.beginPath();
    //4.6重新计算终点坐标
    this.headX[i]=this.rootX[i]+this.amp[i]*p;
    //4.7移动起始点
    ctx2.moveTo(this.rootX[i],canHeight)
    //4.8绘制一条贝塞尔曲线
    //quadraticCurveTo(控制点x,y,终点x,y);
    ctx2.quadraticCurveTo(this.rootX[i],canHeight-100,this.headX[i],this.headY[i]);
    //4.9描边
    ctx2.stroke();
    }//for end
    //4.10恢复画笔2状态
    ctx2.restore();
}
//5.将ane.js添加index.html
//6.main.js创建海葵对象并且调用相关方法
