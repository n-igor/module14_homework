window.addEventListener('DOMContentLoaded', () => {

    const imageArea = document.querySelector('.images'),
          message = document.querySelector('.message')
          finalBtn = document.querySelector('.final_btn');

    function useFetch(url) {
        fetch(url)
            .then((response) => { return response.json(); })
            .then((data) => { 
                data.forEach(item => {
                    const img = document.createElement('img')
                    img.classList.add('img')
                    img.setAttribute('src', `${item.download_url}`)
                    imageArea.append(img)
                });
            })
            .catch(() => { console.log('error') });
    }

    if(localStorage.getItem('url')) {
        useFetch(localStorage.getItem('url'))
    }

    finalBtn.addEventListener('click', (e) => {
        e.preventDefault()
        imageArea.innerHTML = ''
        const numInput = document.querySelector('.final_number').value,
              limitInput = document.querySelector('.final_limit').value

        if((+numInput < 1 || +numInput > 10 || numInput == '') && (+limitInput < 1 || +limitInput > 10 || limitInput == '')) {
        message.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
        } else if(+numInput < 1 || +numInput > 10 || numInput == '') {
            message.textContent = 'Номер страницы вне диапазона от 1 до 10'
        } else if(+limitInput < 1 || +limitInput > 10 || limitInput == '') {
            message.textContent = 'Лимит вне диапазона от 1 до 10'
        } else {
            let url = `https://picsum.photos/v2/list?page=${numInput}&limit=${limitInput}`            
            useFetch(url)

            localStorage.setItem('url', url)

        }
           
    })

})

