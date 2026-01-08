let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
 
let key = $.getElementById('key')
let locationKye = $.getElementById('location')
let which = $.getElementById('which')
let code = $.getElementById('code')

let keyCode = $.getElementById('keyCode')
/// اگر میخایم مثلا F5 باشد صفحه رو رفرش نشه باید متغییر ها رو بریزیم تو یک متغییر دیگه و اونو چاپ کنیم
document.body.addEventListener('keydown', function (event) {
	console.log(event)
	
	if (event.code === 'Space'){
		key.innerHTML = "Space"
	}else if (event.code){
		key.innerHTML = event.key
	}
	
	locationKye.innerHTML = event.location
	which.innerHTML = event.keyCode
	code.innerHTML = event.code
	keyCode.innerHTML = event.keyCode

	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
}) 