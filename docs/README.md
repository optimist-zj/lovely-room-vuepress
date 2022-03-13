<!-- ---
title: 条件类型
author: 冴羽
date: '2021-12-12'
--- -->

<Introduce-JunAndYu/>
:heartpulse: :heartpulse:

<!-- 编程猫小游戏 -->

<!-- <video style="width:100%" preload="auto" id="codemaoVideo" controls atuoplay="autoplay" loop src="https://vd3.bdstatic.com/mda-nc1378vs1bre7ea8/sc/cae_h264_delogo/1646188610879783959/mda-nc1378vs1bre7ea8.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1646277373-0-0-fb33568b8c658e4a2f395385b4d9f0b1&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=2773590100&vid=3773678739224812617&abtest=100815_2&klogid=2773590100"></video> -->
<!-- <video style="width:100%" preload="auto" id="codemaoVideo" controls atuoplay="autoplay" loop src="https://cdn-community.codemao.cn/community_frontend/homepage_demo_video/3_%E9%A3%9E%E8%B7%83%E4%B8%9B%E6%9E%97.mp4"></video> -->
<!-- <img src="../image/yu.jpg" />  -->

<!-- <script>
(function(window,document,undefined){
        var hearts = [];
        window.requestAnimationFrame = (function(){
                return window.requestAnimationFrame ||
                           window.webkitRequestAnimationFrame ||
                           window.mozRequestAnimationFrame ||
                           window.oRequestAnimationFrame ||
                           window.msRequestAnimationFrame ||
                           function (callback){
                                   setTimeout(callback,1000/60);
                           }
        })();
        init();
        function init(){
                css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
                attachEvent();
                gameloop();
        }
        function gameloop(){
                for(var i=0;i<hearts.length;i++){
                    if(hearts[i].alpha <=0){
                            document.body.removeChild(hearts[i].el);
                            hearts.splice(i,1);
                            continue;
                    }
                    hearts[i].y--;
                    hearts[i].scale += 0.004;
                    hearts[i].alpha -= 0.013;
                    hearts[i].el.style.cssText = "left:"+hearts[i].x+"px;top:"+hearts[i].y+"px;opacity:"+hearts[i].alpha+";transform:scale("+hearts[i].scale+","+hearts[i].scale+") rotate(45deg);background:"+hearts[i].color;
            }
            requestAnimationFrame(gameloop);
        }
        function attachEvent(){
                var old = typeof window.onclick==="function" && window.onclick;
                window.onclick = function(event){
                        old && old();
                        createHeart(event);
                }
        }
        function createHeart(event){
            console.log('event',event)
            var d = document.createElement("div");
            d.className = "heart";
            hearts.push({
                    el : d,
                    x : event.clientX - 5,
                    y : event.clientY - 5,
                    scale : 1,
                    alpha : 1,
                    color : randomColor()
            });
            document.body.appendChild(d);
    }
    function css(css){
            var style = document.createElement("style");
                style.type="text/css";
                try{
                    style.appendChild(document.createTextNode(css));
                }catch(ex){
                    style.styleSheet.cssText = css;
                }
                document.getElementsByTagName('head')[0].appendChild(style);
    }
        function randomColor(){
                return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
        }
})(window,document);

</script> -->
