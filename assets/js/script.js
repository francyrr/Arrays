const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baño: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Moderno departamento en el corazón de la ciudad, cerca de todas las comodidades.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baño: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baño: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
];

// propiedades en venta
const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baño: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baño: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baño: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
];
//
const pathname = window.location.pathname;

function cardGenerator(
  img,
  title,
  description,
  location,
  bedrooms,
  bathrooms,
  price,
  allowSmoke,
  allowPets
) {
  return `<section >
  <div class="col">
      <div class="card">
          <img class="card-img-top" src="${img}" alt="Imagen de la carta">
          <div class="card-body">
              <h1 class="card-title">${title}</h1>
              <p class="card-text">${description}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${location}</p>
              <p><i class="fas fa-bed"></i> ${bedrooms} habitaciones</p>
              <p><i class="fas fa-bath"></i> ${bathrooms} baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${price}</p>
              <div>${allowSmoke ? '<p class="text-danger"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}</div>
              <div>${allowPets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten Mascotas</p>'}</div>
          </div>
      </div>
  </div>
</section>`;
}

if (pathname === "/index.html") {
  const ventas_container = document.querySelector("#cards_ventas_container");
  const alquiler_container = document.querySelector(
    "#cards_alquiler_container"
  );

  //
  const ventas = propiedades_venta;

  ventas.forEach(
    ({
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      baño,
      costo,
      smoke,
      pets,
    }) =>
      (ventas_container.innerHTML += cardGenerator(
        src,
        nombre,
        descripcion,
        ubicacion,
        habitaciones,
        baño,
        costo,
        smoke,
        pets
      ))
  );
  //

  const alquiler = propiedades_alquiler;

  alquiler.forEach(
    ({
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      baño,
      costo,
      smoke,
      pets,
    }) =>
      (alquiler_container.innerHTML += cardGenerator(
        src,
        nombre,
        descripcion,
        ubicacion,
        habitaciones,
        baño,
        costo,
        smoke,
        pets
      ))
  );
} else if (pathname === "/propiedades_venta.html") {
  // 
  const ventas_container = document.querySelector("#cards_ventas_container");

  propiedades_venta.forEach(
    ({
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      baño,
      costo,
      smoke,
      pets,
    }) =>
      (ventas_container.innerHTML += cardGenerator(
        src,
        nombre,
        descripcion,
        ubicacion,
        habitaciones,
        baño,
        costo,
        smoke,
        pets
      ))
  );

  
} else if (pathname === "/propiedades_alquiler.html") {
  const alquiler_container = document.querySelector(
    "#cards_alquiler_container"
  );

  propiedades_alquiler.forEach(
    ({
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      baño,
      costo,
      smoke,
      pets,
    }) =>
      (alquiler_container.innerHTML += cardGenerator(
        src,
        nombre,
        descripcion,
        ubicacion,
        habitaciones,
        baño,
        costo,
        smoke,
        pets
      ))
  );
}
