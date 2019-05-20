function xuly() {
	var name = document.getElementById('myname').value;
	console.log(name);
	var a = document.getElementById('so1').value;
	var b = document.getElementById('so2').value;
	console.log('a:'+a+'b:'+b);
	//Ket qua
	var tong = parseInt(a) + parseInt(b);
	document.getElementById('ketqua').innerHTML = 'ket qua:' +tong;
}