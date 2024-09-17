import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css'],
})
export class CardGalleryComponent implements OnInit {
  imagenes = [
    {
      url: 'https://th.bing.com/th/id/OIP.d140-Rmw44u9ZZxH7ny_XgAAAA?rs=1&pid=ImgDetMain',
      title: 'Chigüiro (Capibara)',
      description:
        'El capibara, chigüiro o carpincho (Hydrochoerus hydrochaeris) es una especie de roedor de la familia de los cávidos, nativa de Sudamérica.',
      category: 'Animal',
      favorite: false,
    },
    {
      url: 'https://th.bing.com/th?id=OIP.HVRvOyaEVHDEzJdCmjRTSQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      title: 'Montañas Nevadas',
      description:
        'Un paisaje impresionante de montañas nevadas bajo un cielo despejado.',
      category: 'Paisaje',
      favorite: false,
    },
    {
      url: 'https://th.bing.com/th/id/R.72942bfb8076af5ac9bae92778e60ff1?rik=yvjKEQEIm1iaFA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-5EOTJHMrbMM%2fUkCRHrvtcpI%2fAAAAAAAAACQ%2fZuadQWx9cgs%2fs1600%2ffondo_hd_43_flor_cerezo-20466.jpg&ehk=WdK%2fQSSqevmxTw5Jd5D4QOWILip58AAgxjHiZQKEUsE%3d&risl=&pid=ImgRaw&r=0',
      title: 'Flor de Cerezo',
      description:
        'La flor de cerezo es una de las imágenes más icónicas de la primavera en Japón.',
      category: 'Flor',
      favorite: false,
    },
    {
      url: 'https://angeladearte.wordpress.com/wp-content/uploads/2016/08/120503_exp_scream-ex-crop-rectangle3-large.jpg?w=568&h=312&crop=1',
      title: 'El Grito',
      description:
        'Una obra de arte famosa creada por el pintor noruego Edvard Munch en 1893.',
      category: 'Arte',
      favorite: false,
    },
    {
      url: 'https://content.nationalgeographic.com.es/medio/2023/08/29/jirafa-cerca_f24044d3_1080865883_230829140941_800x800.jpg',
      title: 'Jirafa',
      description:
        'La jirafa es el animal terrestre más alto, conocida por su largo cuello y manchas características.',
      category: 'Animal',
      favorite: false,
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXRhcmRlY2VyJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
      title: 'Atardecer en la Playa',
      description:
        'Un hermoso atardecer en una playa tropical con palmeras y cielo naranja.',
      category: 'Paisaje',
      favorite: true,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCPpKf92u-FP6_iniNI3mwGQ7N8u8itq2Hg&s',
      title: 'Girasol',
      description:
        'El girasol es conocido por su gran flor amarilla y su capacidad de girar siguiendo el sol.',
      category: 'Flor',
      favorite: false,
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
      title: 'El Beso',
      description:
        'Una obra maestra de Gustav Klimt, que representa un abrazo lleno de pasión y ternura.',
      category: 'Arte',
      favorite: false,
    },
    {
      url: 'https://img.freepik.com/foto-gratis/vista-pantera-negra-estado-salvaje_23-2150374842.jpg',
      title: 'Pantera Negra',
      description:
        'La pantera negra, una variante melánica del leopardo, es conocida por su elegante pelaje negro y su agilidad.',
      category: 'Animal',
      favorite: false,
    },
    {
      url: 'https://antwrp.gsfc.nasa.gov/apod/image/1009/starryrhone_vangogh_big.jpg',
      title: 'Noche Estrellada sobre el Ródano',
      description:
        'Una pintura de Vincent van Gogh que captura el reflejo de las estrellas en el río Ródano.',
      category: 'Arte',
      favorite: false,
    },
    {
      url: 'https://arc-anglerfish-arc2-prod-elespectador.s3.amazonaws.com/public/3HZ6MB7VFNB6NH64EVA35NKS3A.jpg',
      title: 'Dunas Blancas',
      description:
        'Un paisaje deslumbrante de dunas de yeso en el Parque Nacional de Dunas Blancas en Nuevo México.',
      category: 'Paisaje',
      favorite: false,
    },
    {
      url: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/04/11/62544a2cabfa1.jpeg',
      title: 'Lirio Calla',
      description:
        'El lirio calla es una flor elegante y pura que es popular en arreglos florales.',
      category: 'Flor',
      favorite: false,
    },
    {
      url: 'https://historia.nationalgeographic.com.es/medio/2021/03/05/01-mona-lisa-marco-gioconda-louvre_f81b8956_550x807.jpg',
      title: 'La Mona Lisa',
      description:
        'Una de las pinturas más famosas del mundo, creada por Leonardo da Vinci en el siglo XVI.',
      category: 'Arte',
      favorite: true,
    },
    {
      url: 'https://img.freepik.com/fotos-premium/jirafa-desierto-kalahari_1048944-5389067.jpg',
      title: 'Jirafa en el Kalahari',
      description:
        'Una jirafa en su hábitat natural en el desierto del Kalahari, con su largo cuello asomando entre los árboles secos.',
      category: 'Animal',
      favorite: false,
    },
    {
      url: 'https://i1.sndcdn.com/artworks-k6QFvuSclq31VKEh-GM9uVQ-t500x500.jpg',
      title: 'El Grillo de Luna',
      description:
        'Un crillo en la luna, una hermosa pintura que combina elementos naturales con un toque surrealista.',
      category: 'Arte',
      favorite: false,
    },
  ];

  selectImagen: any = null;
  filterCategory: string = 'All';
  favoriteImages: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  // Abrir modal
  openModel(imagen: any): void {
    this.selectImagen = imagen;
  }

  // Cerrar modal
  closeModal(): void {
    this.selectImagen = null;
  }

  // Imgane favorita
  toggleFavorite(imagen: any): void {
    imagen.favorite = !imagen.favorite;
    this.favoriteImages = this.imagenes.filter((img) => img.favorite);
  }

  // Filtro
  filterImagenes(category: string): any[] {
    if (category === 'All') {
      return this.imagenes;
    }

    return this.imagenes.filter((img) => img.category === category);
  }
}
