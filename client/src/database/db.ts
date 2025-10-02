import { Course } from "@/app/types/Course";

export const courses: Course[] = [
  {
    id: 1,
    title: "Khóa học ReactJS Master - Nắm vững kiến thức React chuyên sâu",
    image:
      "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?q=80&w=1300&auto=format&fit=crop",
    rating: 4.8,
    reviews: 1200, // ✅ sửa thành number thay vì "1,2K người đánh giá"
    duration: "7h30p",
    views: 19177,
    price: 799000,
    oldPrice: 999000,
    isNew: true,
  },
  {
    id: 2,
    title: "Khóa học Next.js từ cơ bản đến nâng cao",
    image:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1300&auto=format&fit=crop",
    rating: 4.9,
    reviews: 2000, // ✅ đổi thành số
    duration: "10h",
    views: 25400,
    price: 1200000,
    oldPrice: 999000,
    isNew: true,
  }, // ✅ đổi thành số
  {
    id: 3,
    title: "Khóa học Node.js & Express cho Backend Developer",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1300&auto=format&fit=crop",
    rating: 4.7,
    reviews: 980, // ✅ đổi thành số
    duration: "8h45p",
    views: 14200,
    price: 899000,
    oldPrice: 999000,
    isNew: true,
  }, // ✅ đổi thành số
  {
    id: 4,
    title: "Khóa học Tailwind CSS Pro - Xây dựng giao diện chuyên nghiệp",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1300&auto=format&fit=crop",
    rating: 4.6,
    reviews: 750, // ✅ đổi thành số
    duration: "6h",
    views: 8800,
    price: 599000, // ✅ đổi thành số
    oldPrice: 999000,
    isNew: false,
  },
];
