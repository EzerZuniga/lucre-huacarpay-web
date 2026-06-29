import { Component, type ReactNode, type ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  readonly hasError: boolean;
  readonly error: Error | null;
}

const INITIAL_STATE: ErrorBoundaryState = { hasError: false, error: null };

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleReset = this.handleReset.bind(this);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // En producción, aquí se enviaría a un servicio de monitoreo (Sentry, Datadog, etc.)
    console.error('[ErrorBoundary]', error.message, info.componentStack);
  }

  handleReset(): void {
    this.setState(INITIAL_STATE);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-md">
            <p className="text-6xl mb-4">⚠️</p>
            <h2 className="text-2xl font-bold text-wetland-ink mb-3">Algo salió mal</h2>
            <p className="text-wetland-ink-soft mb-8 leading-relaxed">
              Ha ocurrido un error inesperado. Por favor recarga la página o intenta de nuevo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-3 bg-wetland-lagoon text-wetland-foam rounded-xl font-semibold hover:bg-wetland-lagoon-dark transition-colors"
              >
                Intentar de nuevo
              </button>
              <button
                onClick={() => window.location.replace('/')}
                className="px-6 py-3 border-2 border-wetland-lagoon text-wetland-lagoon rounded-xl font-semibold hover:bg-wetland-lagoon hover:text-wetland-foam transition-colors"
              >
                Ir al inicio
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
