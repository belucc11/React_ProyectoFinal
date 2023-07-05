const misProductos = [
    { id: "1", nombre: "Argentina", precio: 500, img: "../img/argentina.png", idCat: "2" },
    { id: "2", nombre: "Paw Patrol", precio: 180, img: "../img/pawpatrol.png", idCat: "2" },
    { id: "3", nombre: "Spiderman", precio: 900, img: "../img/spiderman.png", idCat: "2" },
    { id: "4", nombre: "Bella", precio: 300, img: "../img/bella.png", idCat: "1" },
    { id: "5", nombre: "Moana", precio: 200, img: "../img/moana.png", idCat: "1" },
    { id: "6", nombre: "Lina", precio: 900, img: "../img/lina.png", idCat: "1" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}