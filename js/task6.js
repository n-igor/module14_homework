window.addEventListener('DOMContentLoaded', () => {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 101);
            if(randomNumber % 2 == 0) {
                resolve(randomNumber)
            } else {
                reject(randomNumber)
            }
        }, 3000)
    });
    promise
        .then((res) => {
            console.log(`Завершено успешно. Сгенерированное число — ${res}`)
        })
        .catch((err) => {
            console.log(`Завершено с ошибкой. Сгенерированное число  — ${err}`)
        })
});