import React from 'react';

function TarievenTable({ forSchools }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto mx-auto border-collapse w-full max-w-3xl text-sm">
        <thead>
          <tr className={forSchools ? "bg-blue-100" : "bg-green-100"}>
            <th className="border px-4 py-2 text-left">Dienst</th>
            <th className="border px-4 py-2 text-center">Duur</th>
            <th className="border px-4 py-2 text-center">Investering (€)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">AI Introductieworkshop</td>
            <td className="border px-4 py-2 text-center">2 uur (max. {forSchools ? "20" : "15"} deelnemers)</td>
            <td className="border px-4 py-2 text-center">{forSchools ? "€250" : "€325"}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-2">AI Quick-Scan + Advies</td>
            <td className="border px-4 py-2 text-center">1,5 + 1,5 uur</td>
            <td className="border px-4 py-2 text-center">{forSchools ? "€300" : "€400"}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Implementatiehulp</td>
            <td className="border px-4 py-2 text-center">Halve dag (3-4 uur)</td>
            <td className="border px-4 py-2 text-center">{forSchools ? "€375" : "€475"}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-2">Inspiratiesessie</td>
            <td className="border px-4 py-2 text-center">1 uur</td>
            <td className="border px-4 py-2 text-center">{forSchools ? "€200" : "€250"}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Kleine AI-projecten</td>
            <td className="border px-4 py-2 text-center">1 dag</td>
            <td className="border px-4 py-2 text-center">{forSchools ? "€450" : "€550"}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-3 text-xs text-gray-500 italic text-center">
        Transparante prijsstructuur zonder verrassingen • BTW-vrij • Reiskosten: €0,40/km (vanaf Brussel)
      </div>
      <div className="mt-3 text-center">
        <a href="#contact" className="text-blue-600 text-sm font-medium hover:underline">
          Interesse? Plan direct een gratis kennismakingsgesprek met Zakaria →
        </a>
      </div>
      <div className="mt-2 text-xs text-center text-gray-600">
        Prijzen bewust 20-30% onder marktgemiddelde voor toegankelijke AI-adoptie
      </div>
    </div>
  );
}

export default TarievenTable;
