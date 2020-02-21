function loadData(link = '/data/data.csv', isJSON = false) {
    // Create obj
    const aja = new XMLHttpRequest();

    // Options for get data
    // aja.onreadystatechange = function() {
    //     if(this.readyState == 4 && this.status == 200)
    //     console.log(`readystate: ${this.readyState}, status: ${this.status}`);
    //     console.log(this.responseText);
    // }

    aja.onload = function () {
        if (this.status == 200) {
            showData(this.responseText, isJSON);
        }
    }
    // Options for sending data
    aja.open('GET', link);

    //Sending

    aja.send();

    // return 'Ok the message was returned' + link;
}

const url = 'https://randomuser.me/api/';

// loadData(url);
loadData('/data/data.json', true);

function showData(data, isJSON) {
    let phones;
    if (isJSON) {
        phones = JSON.parse(data);
    } else {
        phones = data.split(/\n/).map(str => str.split(';'))
    }
    console.log(phones)
    console.table(phones)
}