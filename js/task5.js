window.addEventListener('DOMContentLoaded', () => {

    const user = localStorage.getItem('userName'),
          dateVisit = localStorage.getItem('date'),
          date = new Date();
    if(user) {
        alert(`Добрый день, ${user}! Давно не виделись. В последний раз вы были у нас ${dateVisit}`)
        localStorage.setItem('date', date)
    } else {
        const userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', 'Igor');
        localStorage.setItem('userName', userName)
        localStorage.setItem('date', date)
    }
        
});