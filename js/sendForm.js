const form = document.querySelector('.form-test-drive');
//https://jsonplaceholder.typicode.com/
form.addEventListener('submit', (event) =>{
	event.preventDefault()

let data={}

for(let {name, value} /*деструктуризация*/of form.elements){

if(name){//отсекаем кнопку, у нее нет name 
	//console.dir(value);
	data[name] = value
	}
	
}
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		//body: data
		body: JSON.stringify(data)
	})
	.then(response =>{
		if (response.status === 200 || response.status === 201){
			return response.json()
		} else{
			throw new Error(response.status)
		}
	})
	.then(data =>{
		alert('Данные успешно переданы')
		form.reset()
	}).catch(error =>{
		alert('Произошла ошибка, статус ' + error.message)
	})
})