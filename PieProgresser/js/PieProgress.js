var ROLLTIME=1000,
    progressColor="rgb(130,57,53)";
function pieRoll($pie,angle,time) {
    var $leftProgress=$pie.find("span.left_progress"),
        $rightProgress=$pie.find("span.right_progress");
    time=time?time:ROLLTIME;
    angle=angle==360?360:Math.abs(angle)%360;
    if($leftProgress.length&&$rightProgress.length){
        var lastAngle=parseInt($pie.attr("data-angle"));
        var startPercents=parseInt(lastAngle/360*100),
            endPercents=parseInt(angle/360*100),
            currentPercents=startPercents;
        var intervalID=setInterval(function () {
            if (startPercents<endPercents){
                currentPercents+=1;
            }else{
                currentPercents-=1;
            }
            $pie.find("div.progress_num").text(currentPercents+"%");
            if(currentPercents===endPercents){
                clearInterval(intervalID);
            };
        },Math.abs(time/(endPercents-startPercents)));
        if(angle<180){
            if(lastAngle<180){
                $rightProgress.css({
                    "transform":"rotate("+angle+"deg)",
                    "transition":"transform "+time+"ms linear",
                });
            }else{
                var firstTime=(lastAngle-180)/(lastAngle-angle)*time,
                    secondTime=time-firstTime;
                $leftProgress.css({
                    "transform":"rotate(0deg)",
                    "transition":"transform "+firstTime+"ms linear",
                })
                setTimeout(function(){
                    $leftProgress.css("background-color","transparent");
                    $rightProgress.css({
                        "background-color":"inherit",
                        "transform":"rotate("+angle+"deg)",
                        "transition":"transform "+secondTime+"ms linear"
                    });
                },firstTime);
            }
        }else{
            if(lastAngle>180){
                $leftProgress.css({
                    "transform":"rotate("+(angle-180)+"deg)",
                    "transition":"transform "+time+"ms linear",
                });
            }else{
                var firstTime=(180-lastAngle)/(angle-lastAngle)*time,
                    secondTime=time-firstTime;
                $rightProgress.css({
                    "transform":"rotate(180deg)",
                    "transition":"transform "+firstTime+"ms linear",
                });
                setTimeout(function(){
                    $rightProgress.css("background-color","transparent");
                    $leftProgress.css({
                        "background-color":progressColor,
                        "transform":"rotate("+(angle-180)+"deg)",
                        "transition":"transform "+secondTime+"ms linear",
                    });
                },firstTime);
            }
        }
        $pie.attr("data-angle",angle);
    }
}
$(document).ready(function () {
});
