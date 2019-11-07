//创建js文件完成碰撞检测
//1.创建函数完成大鱼碰撞食物检测
function momFruitsCollsion(){
    //创建循环遍历所有食物
    for(var i=0;i<fruit.num;i++){
    //判断当前食物是显示状态吗？
    if(fruit.alive[i]){
    //计算当前食物与大鱼之间距离<900
    //<30像素
    var len = calLength2(
        fruit.x[i],fruit.y[i],
        mom.x,mom.y
    );
    //当前食物消失,alive[i]=false
    if(len<900){
        fruit.alive[i]=false
        //加分数
        //判断食物类型  蓝100 橙200
        if(fruit.fruitType[i]=="blue"){
            var p=100;
        }else{
            var p=200;
        }//修改分数
        data.scope+=p;
    }//if end 
    }//if end alive
    }//for end
}
//2.将collsion.js添加index.html
//3.将commFuntions.jstianjiaindex.html
//4.main.js  gameloop调用碰撞函数
