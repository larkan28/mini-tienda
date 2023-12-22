import { Producto } from "./producto"

export class Carrito {
    producto: Producto
    cantidad: number

    constructor(_producto: Producto, _cantidad: number) {
        this.producto = _producto
        this.cantidad = _cantidad
    }
}