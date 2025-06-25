import { Input } from "@/components/Input/Input";
import { ButtonSub } from "@/components/Buttons/index";


export const ContactForm = () => {
  return (
    <form className="w-full h-full bg-[#22203b] p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 gap-6 text-gray-600">       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            id="name"
            label="Nombre"
            placeholder="Ingresa tu nombre"
            icon="arcticons:nameless-cat"
          />
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="correo@ejemplo.com"
            icon="streamline-freehand:send-email-fly"
          />
        </div>        
        <Input
          id="subject"
          label="Asunto"
          placeholder="¿Sobre qué quieres hablar?"
          icon="uis:subject"
        />

       
        <Input
          id="message"
          label="Mensaje"
          placeholder="Escribe tu mensaje..."
          textarea
          rows={6}
          icon="ant-design:message-filled"
        />    
        <div>
          <ButtonSub
            type="submit"
            variant="primary"
            icon="streamline-sharp:mail-send-email-message"
            iconPosition="left"
          >
            Enviar mensaje
          </ButtonSub>
        </div>
      </div>
    </form>
  );
};