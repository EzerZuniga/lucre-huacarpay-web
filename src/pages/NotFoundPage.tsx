import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/routes';
import { Button } from '@/shared/ui';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <p className="text-8xl font-extrabold text-wetland-lagoon mb-4">404</p>
        <h1 className="text-3xl font-bold text-wetland-ink mb-4">Página no encontrada</h1>
        <p className="text-wetland-ink-soft mb-8 leading-relaxed">
          La página que buscas no existe o fue movida. Regresa al inicio para seguir explorando la
          Laguna Huacarpay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to={ROUTES.HOME} variant="primary">
            Volver al inicio
          </Button>
          <Button to={ROUTES.CONTACT} variant="outline">
            Contactarnos
          </Button>
        </div>
        <Link
          to={ROUTES.HOME}
          className="mt-8 block text-sm text-wetland-ink-soft hover:text-wetland-lagoon transition-colors"
        >
          ← Inicio
        </Link>
      </div>
    </div>
  );
}
