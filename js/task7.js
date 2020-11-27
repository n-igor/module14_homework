window.addEventListener('DOMContentLoaded', ()=> {

    const btn = document.querySelector('.btn'),
          inputUserId = document.querySelector('.inp'),
          myList = document.querySelector('ul');
    
    
    btn.addEventListener('click', () => {
        if(inputUserId.value == '') {
            alert('ID не введен')
        } else {
            const url = `https://jsonplaceholder.typicode.com/users/${inputUserId.value}/todos`       
            myList.innerHTML = ''    
            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    if(data.length == 0) {
                        console.log('Пользователь с указанным id не найден')
                        // Небольшая рекомендация: сообщение о том, что запрос нельзя выполнить по той или иной причине, лучше выводить в документ, так чтобы его мог видеть пользователь. Сейчас сообщение выводится в консоль и с точки зрения пользователя сайт "сломан", т.к. клик на кнопку был, а результата никакого нет
                    }
                    for (let i = 0; i < data.length; i++) {
                        const listItem = document.createElement('li');
                        if(data[i].completed) {
                            listItem.classList.add('through')
                        }
                        listItem.innerHTML = data[i].title;
                        myList.append(listItem)
                    }
                })
        }
        
            
    })      
})