/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'PromedCloud RIS/PACS.',
    href: '#',
    price: '',
    imageSrc: 'http://localhost:8080/images/promed-cloud-web-02-_Mesa-de-trabajo-1-copia-min-1536x864.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'PromedCloud Portal.',
    href: '#',
    price: '',
    imageSrc: 'http://localhost:8080/images/PROMED-CLOUD_Mesa-de-trabajo-1-copia-2-1536x864.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'PromedCloud Drive.',
    href: '#',
    price: '',
    imageSrc: 'http://localhost:8080/images/cloud-drive-1536x864.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'PromedCloud Voice.',
    href: '#',
    price: '',
    imageSrc: 'http://localhost:8080/images/PROMED-CLOUD_Mesa-de-trabajo-1-copia-3-1536x864.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'PromedCloud IA.',
    href: '#',
    price: '',
    imageSrc: 'http://localhost:8080/images/PROMED-CLOUD-06-1536x868.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
