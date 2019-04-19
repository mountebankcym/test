var tools={
	getStyle : function (obj, attr) {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
	
	linearMove : function (obj, attr, end, time) {
		clearInterval(obj.timer);
		var start = parseInt(this.getStyle(obj, attr));
		//console.log(start)
		var distance = end - start;
		var steps = parseInt(time/30);
		var speed = distance / steps;
		obj.timer = setInterval(function () {
			//console.log(1);
			start += speed;
			obj.style[attr] = start + "px";
			if(Math.abs(start - end) < Math.abs(speed)) {
				clearInterval(obj.timer);
				obj.style[attr] = end + "px";
			}
		},30);
		
	},
	
	
	getBody : function () {
		return {
			width : document.documentElement.clientWidth || document.body.clientWidth,
			height : document.documentElement.clientHeight || document.body.clientHeight
		}
	},
	setStyle : function (obj, attrObj) {
		for(var key in attrObj) {
			obj.style[key] = attrObj[key];
		}
	},
	showCenter : function (obj) {
		obj.style.display = "block";
		let _this = this;
		function center () {
			var top = (_this.getBody().height - obj.offsetHeight) / 2;
			var left = (_this.getBody().width - obj.offsetWidth) / 2;
			_this.setStyle(obj,{
				position :"absolute",left : left + "px",top : top + "px"
			});
		};
		center();
		window.onresize = center;
	}
	
}