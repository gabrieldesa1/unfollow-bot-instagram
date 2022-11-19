let contador = 0;

document.querySelectorAll('._aade').forEach((item, index) => {
    setTimeout(() => {
        if (item.innerText == 'Seguindo') {
            item.click();
            document.querySelectorAll('._a9-_').forEach((item, index) => {
                if (item.innerText == 'Deixar de seguir') {
                    item.click();
                    contador++;
                    console.log(`Parou de seguir ${contador} `);
                }
            })
        }
    }, index * 10000)
})



