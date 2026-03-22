import Container from '@/components/common/Container';

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Dnyaneshwar Panchal. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, NestJS and MongoDB.</p>
      </Container>
    </footer>
  );
}

export default Footer;