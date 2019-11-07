//功能:
//-:创建30个食物,其中15显示15隐藏
//-:从海葵头顶出生,向上漂浮
//1.创建食物构造函数fruitObj
var fruitObj=function(){
   //1.1添加二个属性保存食物位置xy
   this.x=[];
   this.y=[];
   //1.2添加二个属性保存图片
   this.orange;
   this.blue;
   //1.2.1添加属性保存食物类型
   this.fruitType=[];
   //1.3添加一个属性保存速度
   this.spd=[];
   //1.4添加一个属性状态显示隐藏
   //true 显示  false隐藏
   this.alive=[];
   //1.5添加一个属性海葵下标
   this.aneNo=[];
   //1.6添加一个属性海葵的宽度
   this.l=[];
   
}
//2.为食物构造函数添加属性 num=30
fruitObj.prototype.num=30;
//3.为食物构造函数添加函数init初始化
fruitObj.prototype.init=function(){
   //3.1创建蓝色图片对象并且下载
   this.blue=new Image();
   this.blue.src="src/blue.png";
   //3.2创建橙色图片对象并且下载
   this.orange=new Image();
   this.orange.src="src/fruit.png";
   //3.3创建循环遍历所有食物
   for(var i=0;i<this.num;i++){
   //3.4状态true
    this.alive[i]=false;
   //3.5x,y 随机
   this.x[i]=0;
   this.y[i]=0;
   //3.6食物类型
   this.fruitType[i]="blue";
   //3.7食物宽度
   this.l[i]=0;
   //3.8速度 
   this.spd[i]=3;
   }
}
//4.为食物构造函数添加函数draw绘制
fruitObj.prototype.draw=function(){
   //4.1创建循环遍历每个食物
   for(var i=0;i<this.num;i++){
   //4.2判断显示状态食物绘制
   if(this.alive[i]){
   //4.3判断食物类型  "blue"
   if(this.fruitType[i]=="blue"){
        //4.4获取蓝色图片绘制
        var pic=this.blue;
   }else{
        //4.5否则橙色图片
        var pic=this.orange;
   }
   //4.6判断食物宽度小于14增长
   if(this.l[i]<14){
        this.l[i]+=this.spd[i]*10;
   }else{
       //4.7大于14个像素向上漂
       this.y[i]-=this.spd[i]*30;
   }
   //4.8绘制图片
   ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);//宽度,高度
   //4.9当食物漂出屏幕状态false
   if(this.y[i]<-14){
        this.alive[i]=false;
   } 

  }
 }//for end
}
//5.将fruit.js添加index.html
//6.在main.js创建食物对象
//7.创建函数监听画布上活动食物数量
   //不足15挑
function fruitMonitor(){
    //7.1创建变量保存累加数值
    var sum=0;
    //7.2创建循环遍历食物
    for(var i=0;i<fruit.num;i++){
        //7.3判断食物状态显示  变量++
    if(fruit.alive[i]==true){
            sum++;
    }
        //7.4如果显示食物不足15
        //7.5调用挑选函数 48
    if(sum<15){
        sendFruit();//挑选函数
        return;
    }
  }
}
//8.创建函数在不隐藏食物挑一个
function sendFruit(){
    //按下标顺序挑选
    //8.1创建循环遍历食物
    for(var i=0;i<fruit.num;i++){
        //8.2如果当前状态隐藏
        if(fruit.alive[i]==false){
        //8.3出生  函数
        fruit.born(i);
        //8.4返回
        return;
        }
    }
}
//9.创建方法让挑选食物出生
    //i第几个食物
fruitObj.prototype.born=function(i){
    //9.1修改当前下标i食物状态为true
    this.alive[i]=true;
    //9.2修改当前下标i食物宽度为0
    this.l[i]=0;
    //9.3修改当前下标i食物类型
    this.fruitType[i]=Math.random()<0.9?"blue":"orange";
    //9.4当前下标i食物第几个海葵
    var idx=Math.floor(Math.random()*ane.num);
    //9.5修改当前下标i食物x,y
    this.x[i]=ane.headX[idx];
    this.y[i]=ane.headY[idx];
    //9.6修改当前下标i食物速度
    this.spd[i]=Math.random()*0.017+0.003;             
}
//10.gameloop中调用第一个监听函数