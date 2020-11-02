const xmlString = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`;

const parser = new DOMParser()
const xmlDOM = parser.parseFromString(xmlString, 'text/xml')
// console.log(xmlDOM)

const list = xmlDOM.querySelector('list'),
    students = list.querySelectorAll('student'),
    name = list.querySelectorAll('name'),
    nameFirst = list.querySelectorAll('first'),
    nameSecond = list.querySelectorAll('second'),
    age = list.querySelectorAll('age'),
    prof = list.querySelectorAll('prof')
    
    let result = {};
    result.list = [];

    for (let i = 0; i < students.length; i++) {
        result.list.push({name : `${nameFirst[i].textContent} ${nameSecond[i].textContent}`, age : Number(`${age[i].textContent}`), prof : `${prof[i].textContent}`, lang : `${name[i].getAttribute('lang')}`})
    }
