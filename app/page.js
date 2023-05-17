import AspekPenilaian from './components/AspekPenilaian';

export default function Home() {
  return (
    <main className="p-4 flex justify-center items-center">
      <div className="md:max-w-4xl sm:max-w-sm max-w-lg">
        <h1 className="font-semibold text-center text-xl  my-8">Aspek Penilaian Mahasiswa</h1>
        <AspekPenilaian />
      </div>
    </main>
  );
}
