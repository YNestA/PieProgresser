/**
 * Created by yang on 16-11-5.
 */
$(document).ready(function () {
    var $myPieProgresser=$("#my_pie_progresser");
    //pieRoll($myPieProgresser,50,1000);
    	pieRoll($myPieProgresser,90,2000);
    	setTimeout(function(){
    		pieRoll($myPieProgresser,210,2000);
    	},2000);
    	setTimeout(function(){
    		pieRoll($myPieProgresser,300,2000);
    	},4000);
    	setTimeout(function(){
    		pieRoll($myPieProgresser,360,2000);
    	},6000);
    	setTimeout(function(){
    		pieRoll($myPieProgresser,300,2000);
    	},8000);
    	setTimeout(function(){
    		pieRoll($myPieProgresser,210,2000);
    	},10000);
    	setTimeout(function(){
    		pieRoll($myPieProgresser,90,2000);
    	},12000);
    	setTimeout(function(){
    		pieRoll($myPieProgresser,10,2000);
    	},14000);
});
