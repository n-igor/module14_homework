document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button'),
        select = document.querySelector('select'),
        data = document.querySelectorAll('.data'),
        val = document.querySelector('.val'),
        link = document.createElement('a')
    let value = '';
    

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
        let money = [];
        data.forEach((item, i) => {
            data[i].innerHTML = res[value]["q" + (i + 1)]
            money.push(res[value]["q" + (i + 1)])
        })
        link.classList.add('info')
        link.innerHTML = `<a target="_blank" href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${value} год',data:[${money}]}]}}">Открыть график</a>`;
        val.append(link); 
        
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (select.value != 'none') {
            value = select.value
            link.remove()
            useRequest(showData)
        } else {
            alert('Выберите год')
        }

    })
})