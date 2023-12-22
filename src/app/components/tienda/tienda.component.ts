import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  comprado: boolean = false;

  listaProductos: Producto[] = [
    { nombre: "Papa", precio: 200 },
    { nombre: "Zanahoria", precio: 300 },
    { nombre: "Tomate", precio: 250 },
    { nombre: "Cebolla", precio: 100 }
  ]

  listaCarrito: Carrito[] = []

  comprarProducto(seleccionado: Producto) {
    for (let i = 0; i < this.listaCarrito.length; i++) {
      const element = this.listaCarrito[i];
      
      if (element.producto == seleccionado) {
        element.cantidad++;
        return;
      }
    }

    let carrito: Carrito = {
      producto: seleccionado,
      cantidad: 1
    }

    this.listaCarrito.push(carrito)
  }

  limpiarCarrito() {
    this.listaCarrito = [];
  }

  verTotal(): number {
    let resultado: number = 0;

    for (let i = 0; i < this.listaCarrito.length; i++) {
      resultado += this.listaCarrito[i].producto.precio * this.listaCarrito[i].cantidad;
    }

    return resultado;
  }

  quitarProducto(indice: number) {
    this.listaCarrito[indice].cantidad--;

    if (this.listaCarrito[indice].cantidad <= 0)
      this.listaCarrito.splice(indice, 1)
  }

  finalizarCompra() {
    this.comprado = true;
    this.limpiarCarrito();
  }

  cerrarAlerta() {
    this.comprado = false;
  }
}

class Producto {
  nombre: string;
  precio: number;

  constructor(_nombre: string, _precio: number) {
    this.nombre = _nombre;
    this.precio = _precio;
  }
}

class Carrito {
  producto: Producto
  cantidad: number

  constructor(_producto: Producto, _cantidad: number) {
    this.producto = _producto
    this.cantidad = _cantidad
  }
}
