import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 bg-secondary/30" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conversemos sobre tu <span className="text-accent">proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos listos para escucharte y hacer realidad tus ideas
          </p>
        </div>

        <div className="w-[80%] mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-card text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">Información de Contacto</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
                    <Phone className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Teléfono</h4>
                  <p className="text-muted-foreground">33 3123 2332</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
                    <Mail className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  {/* ⚠️ DATO PENDIENTE - Reemplazar con email real */}
                  <p className="text-muted-foreground">⚠️ PENDIENTE</p>
                </div>

                <a 
                  href="https://www.google.com/maps/place/Cobay/@20.6652942,-103.4039242,17z/data=!3m1!5s0x8428ae7eee2c69cb:0x34a7635880cda8e3!4m15!1m8!3m7!1s0x8428ae7ef03c7519:0x27c770375c881295!2sCobay!8m2!3d20.6652892!4d-103.4013493!10e1!16s%2Fg%2F11c1s8vcb3!3m5!1s0x8428ae7ef03c7519:0x27c770375c881295!8m2!3d20.6652892!4d-103.4013493!16s%2Fg%2F11c1s8vcb3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Dirección</h4>
                  <p className="text-muted-foreground">
                    San Pablo 710, Chapalita<br />
                    44500 Guadalajara, Jal.<br />
                    México
                  </p>
                </a>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg shadow-elegant text-center">
              <h4 className="text-xl font-bold mb-4">Horario de Atención</h4>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
