import '../styles/globals.scss';
import { ReactNode } from 'react';

export const metadata = {
  title: 'FocalPoint',
  description: 'Gerenciador de tarefas',
};

function formatDate() {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return new Date().toLocaleDateString('pt-BR', options);
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          
          <p className='logoletra'> <img src="logo.svg" alt="FocalPoint" className="logo" /> FocalPoint</p>
          <h1 className="welcome">Bem-vindo de volta, Marcus</h1>
          <p className="date">{formatDate()}</p>
        </header>
        <main className="mainContent">
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
