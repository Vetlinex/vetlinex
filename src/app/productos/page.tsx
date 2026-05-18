"use client"

import { useState } from "react"
import Image from "next/image"
import { products } from "@/lib/Products"

export default function VeterinaryCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")

  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))]

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((p) => p.category === selectedCategory)

 

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Catálogo de Productos Veterinarios</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipo y suministros veterinarios profesionales para el cuidado moderno de los animales.
          </p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-md border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 group"
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden">
                <Image src={`/productos/${product.image}`} width={200} height={200} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
              </div>

              {/* Product Content */}
              <div className="p-4 flex flex-col h-32">
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground text-lg mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
