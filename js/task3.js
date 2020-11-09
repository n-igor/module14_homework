document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button'),
        select = document.querySelector('select'),
        data = document.querySelectorAll('.data');
    let value = ''

    function useRequest(func) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', '../revenue.json')
        xhr.onload = function () {
            if (xhr.status != 200) {
                alert(xhr.status)
            } else {
                const res = JSON.parse(xhr.response)
                func(res)
            }
        }
        xhr.send()
    }

    function showData(res) {
        data.forEach((item, i) => {
            data[i].innerHTML = (res[value]["q" + (i + 1)])
        })
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (select.value != 'none') {
            value = select.value
            useRequest(showData)
        } else {
            alert('Выберите год')
        }

    })
})