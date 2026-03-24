import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import PageSeo from '@/components/common/PageSeo';

function NotFoundPage() {
  return (
    <>
      <PageSeo
        title="404"
        description="The page you are looking for could not be found."
      />
      <section className="section-space">
        <Container className="text-center">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-800 bg-slate-900/40 p-10 shadow-soft">
            <p className="display-kicker text-primary">404 Error</p>
            <h1 className="display-title mt-4 text-4xl text-white">Page not found</h1>
            <p className="mt-4 text-slate-400">
              The page you are looking for does not exist or may have been moved.
            </p>
            <div className="mt-8">
              <Link to="/">
                <Button>Go Back Home</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default NotFoundPage;
