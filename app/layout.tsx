import Category from './components/Category';
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data } = await import("../data/categories.json");

  return (
    <html lang="en">
      <head />
      <body>
        <header className='bg-purple-400 p-4'>HEADER</header>
        <article className='flex gap-4'>

          <aside className='min-w-[200px] bg-purple-700 p-4 overflow-y-auto max-h-screen'>
            <nav>
              {data.map(category => {
                return (
                  <Category key={category.id} category={category}/>
                )
              })}
            </nav>
          </aside>
          <main className='p-4'>
            {children}
          </main>
        </article>
      </body>
    </html>
  )
}
