import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const features = [
  {
    name: 'A Su Medida',
    description: 'Ofrecemos un modelo de almacenamiento gradual de bajo costo que se adapta al ritmo de crecimiento de su institución',
    icon: CloudArrowUpIcon,
    url: '1',
  },
  {
    name: 'Visualización',
    description: 'Un completo visor de imágenes que cuenta con las herramientas necesarias para manipular archivos DICOM',
    icon: LockClosedIcon,
    url: '#',
  },
  {
    name: 'Anotaciones',
    description: 'Los técnicos radiologos pueden incorporar anotaciones en cada imagen DICOM para ser visualizados por los médicos.',
    icon: ArrowPathIcon,
    url: '#',
  },
  {
    name: 'Reconocimiento De Voz',
    description: 'Integra la funcionalidad de dictado por voz más intuitivo del mercado. Realice transcripciones de audio a texto instantáneamente',
    icon: FingerPrintIcon,
    url: '#',
  },
  {
    name: 'Inteligencia Artificial',
    description: 'Ayuda a los radiólogos a priorizar casos que amenazan la vida y acelerar la atención al paciente. Con la detección automática de cáncer de pulmón',
    icon: FingerPrintIcon,
    url: '#',
  },
  {
    name: 'Post Procesamiento 3D',
    description: 'Amplio conjunto de funcionalidades avanzadas de medición y cálculo de ROI, MPR, MIP, MinIP, MPR curvo, herramientas avanzadas de Fusión de Escáners.',
    icon: FingerPrintIcon,
    url: '#',
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative  px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* inicio parte 1 **********************************************/}
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Diagn&oacute;stico y Administraci&oacute;n de Radiolog&iacute;a a tu Alcance</h2>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Vamos a iniciar
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Saber mas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* fin parte 1 **********************************************/}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                  <a href={feature.url} className="text-sm font-semibold leading-6 text-gray-900">
                    &nbsp;Saber mas <span aria-hidden="true">→</span>
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div className="relative pl-16">
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Inteligencia Artificial (IA)</h1>
                <p className="mt-4 text-xl text-gray-500">
                  Al suscribirte a nuestros servicios, tendrás acceso a diversas herramientas de Inteligencia Artificial capaces de alertar a los especialistas sobre una lesión encontrada en una
                  imagen médica. Promed cuenta con Inteligencia Artificial en el diagnóstico de: cáncer de pulmón, Covid 19-RX, Covid 19-TAC, cáncer de cerebro, cáncer de mama y cáncer de próstata.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <a href="#" className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                    Saber mas
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pl-16">

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <div className="sm:max-w-lg">
                <img src='/public/IA.jpeg'/>  
              </div>
            </div>
          </div>
          
        </dl>
      </div>
    </div>
  );
}
