import { Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

function NotFoundPage() {
  return (
    <section className="section-space">
      <Container className="text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">404 Error</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Page not found</h1>
        <p className="mt-4 text-slate-400">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default NotFoundPage;