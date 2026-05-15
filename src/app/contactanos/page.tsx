import ContactForm from "@/components/ContactForm";
import { GoogleMapLab } from "@/components/GoogleMapLab";

export default function Contacto() {
  return (
<main className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Contáctanos</h1>
          <p className="text-muted-foreground">Completa el formulario y nos pondremos en contacto contigo</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="w-full">
            <ContactForm />
          </div>
          <div className="w-full">
            <GoogleMapLab />
          </div>
        </div>
      </div>
    </main>
  )
}