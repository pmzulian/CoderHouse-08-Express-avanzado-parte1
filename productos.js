class GenerarProductos{
    
    productos = [];

    getId(){
        return this.productos.length + 1
    }

    guardar(producto){
        this.productos.push(producto)
    }

    listarTodos(){
        return (this.productos);
    }

    listarIndividual(id){
        return (this.productos[id-1]);
    }

}

const nuevosProductos = new GenerarProductos()

nuevosProductos.guardar(
  {
    id: nuevosProductos.getId(),
    title: "Computadora Desktop",
    price: 120000,
    thumbnail:"https://www.flaticon.es/icono-gratis/ordenador-de-sobremesa_1792525",
  }
);

nuevosProductos.guardar({
  id: nuevosProductos.getId(),
  title: "Televisor SmarTV",
  price: 90000,
  thumbnail: "https://www.flaticon.es/icono-gratis/televisor_4384367",
});

// nuevosProductos.listarIndividual(2)


export default GenerarProductos;