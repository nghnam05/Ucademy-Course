import { MenuItem } from "@/app/types/MenuType";
import {
  SquarePlay,
  BookOpen,
  ShoppingCart,
  Tag,
  Users,
  Layers,
  UserCog,
  ShoppingBag,
  MessageSquare,
} from "lucide-react";

const MenuItems: MenuItem[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: SquarePlay,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: BookOpen,
  },
  {
    url: "/buy-course",
    title: "Hướng dẫn mua khóa học",
    icon: ShoppingCart,
  },
  {
    url: "/coupons",
    title: "Săn mã giảm giá",
    icon: Tag,
  },
  {
    url: "/membership",
    title: "Membership",
    icon: Users,
  },

  {
    url: "/manage/course",
    title: "Quản lý khóa học",
    icon: Layers,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: UserCog,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: ShoppingBag,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: MessageSquare,
  },
];

export default MenuItems;
