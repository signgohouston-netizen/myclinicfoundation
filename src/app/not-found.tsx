import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-7xl font-extrabold text-brand-500">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" size="lg" withArrow>
          Back to home
        </Button>
        <Button href="/find-help" variant="secondary" size="lg">
          Find help
        </Button>
      </div>
    </section>
  );
}
