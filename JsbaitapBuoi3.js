function xuly(){
	//bài 1
	var diemtoan = document.getElementById('diemtoan').value;
	var diemhoa = document.getElementById('diemhoa').value;
	var diemly = document.getElementById('diemly').value;
	console.log('diemtoan:'+diemtoan+'diemly:'+diemly+'diemhoa:'+diemhoa);
	var tong = parseInt(diemhoa) + parseInt(diemly) + parseInt(diemtoan);
	var trungbinh = (parseInt(diemhoa) + parseInt(diemly) + parseInt(diemtoan))/3;
	document.getElementById('ketqua').innerHTML = 'ketqua'+ tong;
	document.getElementById('trungbinh').innerHTML = 'ketqua'+ trungbinh;
	//bài 2
	var doC = document.getElementById('doC').value;
	console.log('doC:'+doC);
	var doF = parseInt (doC)*1.8+32;
	document.getElementById('KQ').innerHTML = 'KQ:' +doF;
	//bài 3:
	
	var r = document.getElementById('r').value;
	console.log('r'+r);
	var dientich = parseInt (r)*parseInt (r)*3.14;
	document.getElementById('dientich').innerHTML = 'dientich:' +dientich;
	//bài 4
	var s = document.getElementById('s').value;
	console.log('s'+s);
	var chuvi = parseInt(s)*2*3.14;
	document.getElementById('chuvi').innerHTML = 'chuvi:' +chuvi;
}