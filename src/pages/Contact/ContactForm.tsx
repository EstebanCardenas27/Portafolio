import { useState, useEffect } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { Input } from "@/components/Input/Input";
import { ButtonSub } from "@/components/Buttons/index";

export const ContactForm = () => {
  const {
    loading,
    formErrors,
    handleSubmit,
  } = useContactForm();

  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [modalSuccess, setModalSuccess] = useState(false);
  
  useEffect(() => {
    if (modalMessage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalMessage]);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setModalMessage(null);
          setModalSuccess(false);
          const result = await handleSubmit(e.currentTarget);
          if (result?.success) {
            setModalMessage(result.message);
            setModalSuccess(true);
          } else {
            setModalMessage(result?.message || "❌ Ocurrió un error inesperado.");
            setModalSuccess(false);
          }
        }}
        className="w-full backdrop-blur border border-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg"
      >
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="name"
              name="name"
              label="Nombre"
              placeholder="Ingresa tu nombre"
              icon="mdi:user"
              error={formErrors.name}
            />
            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="correo@ejemplo.com"
              icon="lsicon:email-send-filled"
              error={formErrors.email}
            />
          </div>
          <Input
            id="subject"
            name="subject"
            label="Asunto"
            placeholder="¿Sobre qué quieres hablar?"
            icon="uit:subject"
            error={formErrors.subject}
          />
          <Input
            id="message"
            name="message"
            label="Mensaje"
            placeholder="Escribe tu mensaje..."
            textarea
            rows={6}
            icon="ant-design:message-filled"
            error={formErrors.message}
          />

          <div>
            <ButtonSub
              type="submit"
              variant="primary"
              icon="message-circle"
              iconPosition="left"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </ButtonSub>
          </div>
        </div>
      </form>

      {modalMessage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] z-50"
          onClick={() => setModalMessage(null)}
        >
          <div
            className="glass-panel p-10 shadow-[0_0_20px_rgba(255,255,255,0.8)] max-w-sm mx-auto text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className={modalSuccess ? "text-green-500" : "text-red-500"}>
              {modalMessage}
            </p>
            <div className="mt-10 flex justify-center">
              <button
                className="px-4 py-1 bg-teal-500 rounded-xl hover:bg-teal-600 text-white cursor-pointer"
                onClick={() => setModalMessage(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};