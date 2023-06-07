document.querySelector('button[class="button-sumbit"]')
.addEventListener('click' , () => {

    const resultInsert = document.querySelector('.result');
    resultInsert.innerHTML = null;

    const DateTime = document.createElement('p');
    DateTime.style = 'margin: 10px 0 !important;'
    DateTime.innerText = 'CurrentDate :' + new Date();

    resultInsert.append(DateTime);

    const createElement = [
        {
            id: 'Name',
            create: document.createElement('h1'),
            element: [
                document.querySelector('input[id="name"]')
            ]
        },
        {
            id: 'Date',
            create: document.createElement('p'),
            element: [
                document.querySelector('input[id="date"]')
            ]
        },
        {
            id: 'Gender',
            create: document.createElement('p'),
            element: [
                document.querySelector('input[id="male"]'),
                document.querySelector('input[id="famale"]')
            ]
        },
        {
            id: 'Message',
            create: document.createElement('p'),
            element: [
                document.querySelector('textarea[id="message"]')
            ]
        }
    ]

    for (let i in createElement) {
        if (i == 2) {
            createElement[i].element.forEach((element) => {
                if (element.checked) {
                    createElement[i].create.innerText = `Im a ${element.value}`;
                    resultInsert.append(createElement[i].create);
                }
            })
        } else {
            createElement[i].element.forEach((element) => {
                if (element.value.length > 0) {
                    createElement[i].create.innerText = `${createElement[i].id} : ${element.value}`;
                    resultInsert.append(createElement[i].create)
                } 
            })
        }
    }
})


