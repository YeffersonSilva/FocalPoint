import '../styles/globals.scss';
import { ReactNode } from 'react';

export const metadata = {
  title: 'FocalPoint',
  description: 'Gerenciador de tarefas',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <header className="header">
            <img src="/logo.svg" alt="FocalPoint" className="logo" />
            <h1 className="welcome">Bem-vindo de volta, Marcus</h1>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}