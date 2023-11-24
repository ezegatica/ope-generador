import Generator from './components/generator';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <Generator />
        <div className="footer">
          <hr />
          <p className="text-center mt-2 text-lg">
            Oficina del Presidente electo de la República Argentina
          </p>
        </div>
      </div>
    </div>
  );
}
