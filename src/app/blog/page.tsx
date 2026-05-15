export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
        LA IMPORTANCIA DE DESPARASITAR A NUESTRAS MASCOTAS
      </h1>

      {/* First paragraph */}
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
        Muchas de las causas de enfermedades en nuestros perros se dan por la presencia de parásitos es por ello que se
        recomienda la desparasitación frecuente en nuestras mascotas, además hay un riesgo alto de contagio para los
        niños que están en casa.
      </p>

      {/* Second paragraph */}
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
        Existen laboratorios en el mundo que constantemente realizan investigaciones para mejorar la salud de nuestras
        mascotas es así que se han desarrollado moléculas como las isoxazolinas que actúan como ectoparasiticidas de uso
        veterinario, estas se introdujeron por primera vez en Canadá en el año 2014, con los fármacos Afoxolaner y
        Fluralaner en forma de comprimidos. En un comienzo, su uso solo se autorizó para el tratamiento de pulgas y
        garrapatas en perros.
      </p>

      {/* Subtitle */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
        En la actualidad tenemos Fluralaner en diferentes presentaciones.
      </h2>

      {/* Disc list */}
      <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mb-6 space-y-2 ml-4">
        <li>Inyectable</li>
        <li>Pipetas</li>
        <li>Tabletas</li>
      </ul>

      {/* Third paragraph */}
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
        El compromiso de nuestro Laboratorio es seguir brindando soluciones a los profesionales de la salud animal
        siempre con productos innovadores y de muy buena calidad, XTERMIN es el nuevo lanzamiento de Laboratorio
        Vetlinex.
      </p>

      {/* Product features list */}
      <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mb-6 space-y-2 ml-4">
        <li>XTERMIN es una tableta de alta palatabilidad con protección hepática.</li>
        <li>XTERMIN elimina pulgas, garrapatas y ácaros.</li>
        <li>XTERMIN tiempo de protección 90 días.</li>
      </ul>

      {/* Table heading */}
      <p className="text-base sm:text-lg text-gray-900 font-semibold mb-4">XTERMIN contiene:</p>

      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                Producto
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                Composición
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-900 font-medium">XTERMIN 5 (2 kg – 5 kg)</td>
              <td className="px-4 py-3 text-sm text-gray-700">
                Fluralaner 125 mg + Silimarina 50 mg + Ácido linoleico 75 mg
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-900 font-medium">XTERMIN 10 (6 kg – 10 kg)</td>
              <td className="px-4 py-3 text-sm text-gray-700">
                Fluralaner 250 mg + Silimarina 100 mg + Ácido linoleico 150 mg
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-900 font-medium">XTERMIN 20 (11 kg – 20 kg)</td>
              <td className="px-4 py-3 text-sm text-gray-700">
                Fluralaner 500 mg + Silimarina 200 mg + Ácido linoleico 300 mg
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-900 font-medium">XTERMIN 40 (21 kg – 40 kg)</td>
              <td className="px-4 py-3 text-sm text-gray-700">
                Fluralaner 1000 mg + Silimarina 400 mg + Ácido linoleico 600 mg
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-900 font-medium">XTERMIN 60 (41 kg – 60 kg)</td>
              <td className="px-4 py-3 text-sm text-gray-700">
                Fluralaner 1500 mg + Silimarina 600 mg + Ácido linoleico 900 mg
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
