const baseUrl = 'https://findep.herokuapp.com';

//MOSTRAR REGISTRO
export function getRegistros() {
    return fetch(baseUrl + '/registros')
        .then(r => r.json())
        .then(data => data);
}

//AGREGAR REGISTRO
export function addRegistro(registro) {
    console.log(registro)
    let formData = new FormData();
    //es como un push para objetos
    for (let r in registro) {
        formData.append(r, registro[r]);
    }
    return fetch(baseUrl + '/registros/new', {
            method: 'post',
            credentials: "include",
            body: formData
        })
        .then(r => r.json())
        .then(registro => registro);
}



//BORRAR REGISTRO
export function deleteRegistro(id) {
    return fetch(baseUrl + '/registros/borrar/' + id, {
            method: 'delete'
        })
        .then(r => r.json())
        .then(registro => registro)
}

//EDITAR REGISTRO
export function editRegistro(id, registro) {
    const formData = new FormData()
    for (let k in registro) {
        formData.append(k, registro[k]);
    }
    return fetch(baseUrl + '/registros/edit/' + id, {
            method: 'put',
            body: formData
        })
        .then(r => r.json())
        .then(registro => registro)
}