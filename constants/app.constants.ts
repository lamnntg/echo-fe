import bietthu from "@/data/bietthu.json";
import chungcu from "@/data/chungcu.json";
import khachsan from "@/data/khachsan.json";
import nhadat from "@/data/nhadat.json";
import shop from "@/data/shop.json";
import vanphong from "@/data/vanphong.json";

export enum RoutesEnum {
  HOME = "/",
  INTRODUCE = "/gioi-thieu",
  COMPLETED = "/du-an-da-hoan-thanh",
  QUY_TRINH_THIET_KE = "/quy-trinh-thiet-ke",
  BAO_GIA = "/bao-gia",
  CHINH_SACH = "/chinh-sach",
  LIEN_HE = "/lien-he",
  CHUNG_CU = "/chung-cu",
  BIET_THU = "/biet-thu",
  KHACH_SAN = "/khach-san-coffee",
  SHOP = "/cua-hang",
  VAN_PHONG = "/van-phong",
  NHA_PHO = "/nha-pho",
  NHA_HANG = "/nha-hang",
}

export const MENU_HOME = [
  {
    label: "Chung cư",
    to: RoutesEnum.CHUNG_CU,
    type: 1,
    data: chungcu,
  },
  {
    label: "Nhà phố",
    to: RoutesEnum.NHA_PHO,
    type: 2,
    data: nhadat,
  },
  {
    label: "Biệt thự",
    to: RoutesEnum.BIET_THU,
    type: 3,
    data: bietthu,
  },
  {
    label: "Văn phòng",
    to: RoutesEnum.VAN_PHONG,
    type: 4,
    data: vanphong,
  },
  {
    label: "Khách sạn, coffee",
    to: RoutesEnum.KHACH_SAN,
    type: 5,
    data: khachsan,
  },
  {
    label: "Nhà hàng",
    to: RoutesEnum.NHA_HANG,
    type: 6,
    data: shop,
  },
];

export const INTRODUCE_DROPDOWN = [
  {
    label: "Tầm nhìn",
    description:
      "Trong giai đoạn 5 năm tới, Echo Design định hướng phát triển trở thành công ty thiết kế và thi công kiến trúc nội thất trong top 10 miền Bắc. Chúng tôi sẽ mở rộng phát triển tại các tỉnh thành phố lớn như: TP Hồ Chí Minh, Đà Nẵng, Hải Phòng, Hải Dương, Thanh Hóa, Quảng Ninh, ... Ngoài mục tiêu phát triển chuyên sâu về thiết kế và xây dựng hoàn thiện, chúng tôi cũng hướng tới các lĩnh vực kính doanh bán lẻ, quản lý dự án và cung cấp giải pháp công nghệ mới để nâng tầm chất lượng cuộc sống cho khách hàng.",
  },
  {
    label: "Sứ mệnh",
    description:
      "Sứ mệnh của chúng tôi là từng bước tạo ra những không gian sống, làm việc, vui chơi, học tập và sinh hoạt mang lại trải nghiệm trọn vẹn, tạo nên giá trị và cảm xúc cho quý khách hàng.",
  },
  {
    label: "Tầm nhìn",
    description:
      "Trong giai đoạn 5 năm tới, Echo Design định hướng phát triển trở thành công ty thiết kế và thi công kiến trúc nội thất trong top 10 miền Bắc. Chúng tôi sẽ mở rộng phát triển tại các tỉnh thành phố lớn như: TP Hồ Chí Minh, Đà Nẵng, Hải Phòng, Hải Dương, Thanh Hóa, Quảng Ninh, ... Ngoài mục tiêu phát triển chuyên sâu về thiết kế và xây dựng hoàn thiện, chúng tôi cũng hướng tới các lĩnh vực kính doanh bán lẻ, quản lý dự án và cung cấp giải pháp công nghệ mới để nâng tầm chất lượng cuộc sống cho khách hàng.",
  },
];

export const CEO_INTRODUCE = [
  {
    name: "Nguyễn Minh Quang",
    role: "Founder - CEO",
  },
  {
    name: "Nguyễn Thị Hà Anh",
    role: "Chuyên viên thiết kế nội thất - kỹ thuật",
  },
  {
    name: "Phạm Việt Anh",
    role: "Kiến trúc sư",
  },
  {
    name: "Bùi Thị Yến Chi",
    role: "Chuyên viên thiết kế nội thất - kỹ thuật",
  },
  {
    name: "Lê Minh Bàng",
    role: "Sale & Marketing",
  },
  {
    name: "Nguyễn Văn Giang",
    role: "Quản lý dự án",
  },
];

export const FACEBOOK_LINK =
  "https://www.facebook.com/ed.interior.architecture";

export const IFRAME_GOOGLE_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.232017641082!2d105.83771318512251!3d20.98333463947274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac42eb8919b9%3A0x6b6a3f524a46ddbe!2zNiBQLiBLaW0gxJDhu5NuZywgR2nDoXAgQsOhdCwgSG_DoG5nIE1haSwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1711789649828!5m2!1svi!2s";
