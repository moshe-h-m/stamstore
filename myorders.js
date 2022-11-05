const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sofer_id = urlParams.get('id')

let bool = 0
function init1() {


    window.fetch("http://localhost:3000/orders/")
        .then(res => res.json())
        .then(data => {

            data.forEach(ord => {
                if (sofer_id == ord.sofer_id) {
                    print1(ord.header, ord.order_items, ord.id);
                    bool = 1

                }
            })

        }).then(() => {
            if (!bool) {
                window.alert(`${bool} dir sofer you d'ont have an order yet`)
            }
        })


}

function print1(header1, orders, id) {


    const div1 = document.createElement('div')
    div1.className = "card div1"
    div1.style = "width: 1200px; height: 300px;"
    div1.align = "center"

    const h31 = document.createElement('h4')
    h31.innerText = `     dir ${header1} !`
    const h32 = document.createElement('h5')
    h32.innerText = `     you have an order:  ${orders}`
    h33 = document.createElement('h5')
    h33.innerText = `     order number:  ${id}`
    const br1 = document.createElement('br')
    div1.innerHTML += br1.outerHTML
    div1.innerHTML += h31.outerHTML
    div1.innerHTML += br1.outerHTML
    div1.innerHTML += h32.outerHTML
    div1.innerHTML += br1.outerHTML
    div1.innerHTML += h33.outerHTML

    const divune = document.getElementById("mydiv")
    divune.appendChild(div1)

}