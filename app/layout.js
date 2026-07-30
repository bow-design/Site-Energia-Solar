import './globals.css';
import PageTransition from '../components/PageTransition';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Empresa Solar',
  description: 'Projetos inteligentes de energia solar para residências, empresas e propriedades rurais.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteNav />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
