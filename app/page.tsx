import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* HEADER BIRU UIA - Sesuai foto tujuan */}
      <div className="flex h-20 shrink-0 items-center rounded-lg bg-[#0070f3] p-4 md:h-24">
        <Image
          src="/logo/uia-logo.png"
          width={220}
          height={80}
          alt="Logo UIA"
          className="h-auto"
        />
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* KOTAK TEKS KIRI */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-[18px] md:leading-normal`}>
            <strong>Selamat Datang!</strong><br />
            Ini adalah situs web pembelajaran{' '}
            <span className="text-blue-600">Mata Kuliah<br />Web teknologi,</span>{' '}
            Dosen Pengampu <strong>Adhitya Ahmad Pradypta, S.Kom., M.T.I.</strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-2 self-start rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-500"
          >
            <span>Log in</span> <ArrowRightIcon className="w-4" />
          </Link>
        </div>

        {/* KANAN KOSONG / BANNER - Biar sama kayak foto */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-white rounded-lg">
           {/* Kalau mau tambah gambar hero UIA di sini, nanti */}
        </div>
      </div>
    </main>
  );
}