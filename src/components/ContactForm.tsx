"use client"

import type React from "react"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
    comentario: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form data:", formData)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Contáctanos</h2>
          <p className="text-gray-600">Nos encantaría saber de ti</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombreCompleto" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="comentario" className="block text-sm font-medium text-gray-700 mb-1">
              Comentario
            </label>
            <textarea
              id="comentario"
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              placeholder="Escribe tu comentario aquí..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  )
}
