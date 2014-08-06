function Person(){
	this.name = "yangssem";
	this.tel = "010-0000-0000";
	this.info = function(){
		return this.name + this.tel;
	};
}

function ScoreDTO(){
	var kor = 0;
	var eng = 0;
	var math = 0;
	
	this.getKor = function(){
		return kor;
	};
	this.setKor = function(k){
		kor = k;
	};
	
	this.getEng = function(){
		return eng;
	};
	this.setEng = function(e){
		eng = e;
	};
	
	this.getMath = function(){
		return math;
	};
	this.setMath = function(m){
		math = m;
	};
}

function ScoreDAO(){
	var sdtos = [];
	
	this.select = function(){
		return sdtos;
	};
	this.insert = function(sdto){
		sdtos.push(sdto);
	};
	this.update = function(i,sdto){
		sdtos.splice(i,1,sdto);
	};
	this.deleteData = function(i){
		sdtos.splice(i,1);
	};
}


