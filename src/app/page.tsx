export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* Hero Section */}
      <header className="px-6 py-24 sm:py-32 lg:px-8 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Build something amazing with Next.js and Tailwind
        </h1>
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          A clean, responsive home page template designed for speed and scalability. 
          Start building your next big idea with a professional foundation.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-50">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="px-6 py-24 sm:py-32 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Powerful features to help you ship faster.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 flex items-center justify-center text-xl">⚡️</div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Optimized for core web vitals and extreme performance.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 flex items-center justify-center text-xl">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Built with Tailwind CSS for a clean and consistent look.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 flex items-center justify-center text-xl">📱</div>
            <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Looks great on desktops, tablets, and mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-12 px-6 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Your Company Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
