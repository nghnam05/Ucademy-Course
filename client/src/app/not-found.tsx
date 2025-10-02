import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col text-center p-6 bg-gray-50">
      <h1 className="text-6xl font-extrabold text-black tracking-wider">404</h1>
      <p className="mt-3 text-lg text-gray-700">
        Xin lỗi, trang bạn tìm không tồn tại !
      </p>

      <a
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 hover:bg-gray-300  rounded-lg transition-all duration-400 group"
      >
        <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
        Về trang chủ
      </a>
    </div>
  );
}
