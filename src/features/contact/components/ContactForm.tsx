import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { Button, Input, Spinner } from '@/shared/ui';
import { useContactForm } from '../hooks/useContactForm';

interface ContactFormProps {
  /** Whether to show the subject as a select dropdown (full page) or text input (section) */
  subjectAsSelect?: boolean;
}

export default function ContactForm({ subjectAsSelect = false }: ContactFormProps) {
  const { formData, errors, status, serverMessage, handleChange, handleSubmit } = useContactForm();

  const isSubmitting = status === 'loading';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nombre"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          required
          error={errors.name}
          disabled={isSubmitting}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          required
          error={errors.email}
          disabled={isSubmitting}
        />
      </div>

      {subjectAsSelect ? (
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-wetland-ink mb-2">
            Asunto <span className="text-red-500 ml-1">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-wetland-sand rounded-xl bg-wetland-foam text-wetland-ink-soft focus:outline-none focus:ring-2 focus:ring-wetland-lagoon focus:border-transparent transition-all duration-300"
          >
            <option value="">Selecciona un asunto</option>
            <option value="info">Información general</option>
            <option value="visit">Visitas guiadas</option>
            <option value="collaboration">Colaboración</option>
            <option value="research">Investigación</option>
            <option value="volunteer">Voluntariado</option>
            <option value="other">Otro</option>
          </select>
          {errors.subject && (
            <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
      ) : (
        <Input
          label="Asunto"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="¿Sobre qué quieres hablar?"
          required
          error={errors.subject}
          disabled={isSubmitting}
        />
      )}

      <Input
        label="Mensaje"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Escribe tu mensaje aquí..."
        rows={subjectAsSelect ? 6 : 5}
        required
        error={errors.message}
        disabled={isSubmitting}
      />

      {/* Status messages */}
      {status === 'success' && serverMessage && (
        <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
          <FiCheck size={20} />
          <p>{serverMessage}</p>
        </div>
      )}

      {status === 'error' && serverMessage && (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
          <FiAlertCircle size={20} />
          <p>{serverMessage}</p>
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full text-lg py-4" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner size="sm" color="white" className="mr-2" />
            Enviando...
          </>
        ) : (
          <>
            <FiSend className="mr-2" />
            Enviar mensaje
          </>
        )}
      </Button>
    </form>
  );
}
