import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 p-4">
      {/* HEADER BIRU - Persis kayak screenshot */}
      <div className="w-full rounded-lg bg-[#0073ff] p-6 md:p-8">
        <div className="flex items-center gap-4">
          <Image
            src="/logo/uia-logo.png"
            width={280}
            height={80}
            alt="UIA Logo"
            className="object-contain"
          />
        </div>
      </div>

      {/* FORM LOGIN DI TENGAH */}
      <div className="mt-10 flex w-full justify-center">
        <div className="w-full max-w-[400px] rounded-lg bg-white p-8 shadow-sm">
          <h1 className="mb-6 text-[15px] font-semibold text-gray-800">
            Silakan Masuk dengan akun Anda.
          </h1>

          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-[11px] text-gray-500">
                Email
              </label>
              <div className="flex items-center gap-2 rounded-md border border-gray-100 bg-gray-50/50 px-3 py-2.5">
                <span className="text-gray-400">@</span>
                <input
                  className="w-full bg-transparent text-[12px] outline-none placeholder:text-gray-400"
                  placeholder="Ketikkan alamat email"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-[11px] text-gray-500">
                Kata Sandi
              </label>
              <div className="flex items-center gap-2 rounded-md border border-gray-100 bg-gray-50/50 px-3 py-2.5">
                <span className="text-gray-400">✎</span>
                <input
                  type="password"
                  className="w-full bg-transparent text-[12px] outline-none placeholder:text-gray-400"
                  placeholder="Ketikkan Kata Sandi"
                />
              </div>
            </div>

            <button className="flex w-full items-center justify-between rounded-md bg-[#0073ff] px-4 py-2.5 text-[12px] font-medium text-white hover:bg-blue-700">
              <span>Masuk</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}