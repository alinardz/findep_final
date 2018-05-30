const baseUrl = 'https://findep.herokuapp.com';

//MOSTRAR METAS
export function getMetas() {
    return fetch(baseUrl + '/metas')
        .then(r => r.json())
        .then(data => data);
}

//AGREGAR META
export function addMeta(meta) {
    console.log(meta)
    let formData = new FormData();
    //es como un push para objetos
    for (let k in meta) {
        formData.append(k, meta[k]);
    }
    return fetch(baseUrl + '/metas/new', {
            method: 'post',
            credentials: "include",
            body: formData
        })
        .then(r => r.json())
        .then(meta => meta);
}



//BORRAR META
export function deleteMeta(id) {
    return fetch(baseUrl + '/metas/borrar/' + id, {
            method: 'delete'
        })
        .then(r => r.json())
        .then(meta => meta)
}

//EDITAR META
export function editMeta(id, meta) {
    const formData = new FormData()
    for (let k in meta) {
        formData.append(k, meta[k]);
    }
    return fetch(baseUrl + '/metas/edit/' + id, {
            method: 'put',
            body: formData
        })
        .then(r => r.json())
        .then(meta => meta)
}