import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validate = (data: any) => {
    const errors: { [key: string]: string } = {};

    if (!data.name) {
      errors.name = "El nombre es obligatorio.";
    }

    if (!data.email) {
      errors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,24}$/.test(data.email)) {
      errors.email = "El email no es válido.";
    }

    if (!data.subject) {
      errors.subject = "El asunto es obligatorio.";
    }

    if (!data.message) {
      errors.message = "El mensaje es obligatorio.";
    } else if (data.message.length < 10) {
      errors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    return errors;
  };

  const handleSubmit = async (form: HTMLFormElement) => {
    const formData = new FormData(form);

    const data = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      subject: formData.get("subject")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    const errors = validate(data);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      throw new Error("Validation error");
    }

    setFormErrors({});
    setLoading(true);

    try {
      await emailjs.send(
        "service_hjw3o2e",
        "template_co92xqp",
        data,
        "m4ckPeDJl9-pok9-k"
      );
      form.reset();
      return { success: true, message: "✅ ¡Tu mensaje ha sido enviado!" };
    } catch (err) {
      console.error("FAILED...", err);
      return {
        success: false,
        message: "❌ Ocurrió un error al enviar el mensaje. Intenta más tarde.",
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    formErrors,
    handleSubmit,
  };
};