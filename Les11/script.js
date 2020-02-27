const dom = {
    inp: document.querySelector('#inp-info'),
    btn: document.querySelector('#btn-memo'),
};

dom.btn.addEventListener('click', () =>{
    const coo = new Cookie();
    coo.set(Date.now(), dom.inp.value, 1);
    const arr = JSON.parse(localStorage.getItem('inputs')) || [];
    arr.push(dom.inp.value);
    localStorage.setItem('inputs', JSON.stringify(arr));
    // setCookie(Date.now(), dom.inp.value, 2);
});


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i <ca.length; i++) {
      let c = ca[i];
      c = c.trim();
      if (c.indexOf(name) == 0) {
        return c.slice(name.length);
      }
    }
    return "";
  }


function deleteCookieName(cName) {
    document.cookie = `${cName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}


class Cookie {
    del(cname) {
        document.cookie = `${cName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }

    get(cname) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i <ca.length; i++) {
          let c = ca[i];
          c = c.trim();
          if (c.indexOf(name) == 0) {
            return c.slice(name.length);
          }
        }
        return "";
    }

    set(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}
//COOKIE

//LocalStorage
//SessionStorage


localStorage.setItem('name', "Stan");

