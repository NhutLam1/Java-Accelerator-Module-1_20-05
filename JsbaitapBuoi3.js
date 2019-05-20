function xuly(){
	var diemtoan = document.getElementById('diemtoan').value;
	var diemhoa = document.getElementById('diemhoa').value;
	var diemly = document.getElementById('diemly').value;
	console.log('diemtoan:'+diemtoan+'diemly:'+diemly+'diemhoa:'+diemhoa);
	var tong = parseInt(diemhoa) + parseInt(diemly) + parseInt(diemtoan);
	var trungbinh = (parseInt(diemhoa) + parseInt(diemly) + parseInt(diemtoan))/3;
	document.getElementById('ketqua').innerHTML = 'ketqua'+ tong;
	document.getElementById('trungbinh').innerHTML = 'ketqua'+ trungbinh;

}