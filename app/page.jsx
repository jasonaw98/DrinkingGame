import CardComponent from '@/components/CardComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0">
      {/* <div className='grid grid-cols-2 gap-20 place-content-center h-48'> */}
      <div className='grid grid-cols-2 gap-7 place-content-center h-48 gap-y-14'>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      </div>
    </main>
  )
}
