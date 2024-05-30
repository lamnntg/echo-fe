import bietthu from "@/data/bietthu.json";
import chungcu from "@/data/chungcu.json";
import khachsan from "@/data/khachsan.json";
import nhadat from "@/data/nhadat.json";
import shop from "@/data/shop.json";
import vanphong from "@/data/vanphong.json";
import CEOAvatar from "@/public/ceo-avatar.jpeg";
import HaAnh from "@/public/HaAnh.jpg";
import HoangOanh from "@/public/HoangOanh.jpg";
import VietAnh from "@/public/VietAnh.jpg";
import YenChi from "@/public/YenChi.jpg";
import MinhBang from "@/public/MinhBang.jpg";
import NoAvatar from "@/public/no-avatar.png";
import sanvuon from "@/data/sanvuon.json";
import thucte from "@/data/thuc-te.json";
import nhatho from "@/data/nhatho.json";

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
  THUC_TE = "/du-an-da-hoan-thanh",
  SAN_VUON = "/san-vuon",
  NHA_THO = "/nha-tho",
}

export const MENU_HOME = [
  {
    label: "Chung cư",
    to: RoutesEnum.CHUNG_CU,
    type: 1,
    data: chungcu,
  },
  {
    label: "Biệt thự, nhà đất",
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
    label: "Nhà hàng, khách sạn, coffee",
    to: RoutesEnum.KHACH_SAN,
    type: 5,
    data: khachsan,
  },
  {
    label: "Kiến trúc, sân vườn",
    to: RoutesEnum.SAN_VUON,
    type: 6,
    data: shop,
  },
  {
    label: "Nhà thờ",
    to: RoutesEnum.NHA_THO,
    type: 7,
    data: nhatho,
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
    image: CEOAvatar,
  },
  {
    name: "Nguyễn Thị Hà Anh",
    role: "Chuyên viên thiết kế nội thất - kỹ thuật",
    image: HaAnh,
  },
  {
    name: "Phạm Việt Anh",
    role: "Kiến trúc sư",
    image: VietAnh,
  },
  {
    name: "Bùi Thị Yến Chi",
    role: "Chuyên viên thiết kế nội thất - kỹ thuật",
    image: YenChi,
  },
  {
    name: "Lê Minh Bàng",
    role: "Sale & Marketing",
    image: MinhBang,
  },
  {
    name: "Nguyễn Văn Giang",
    role: "Quản lý dự án",
    image: NoAvatar,
  },
  {
    name: "Nguyễn Thị Hoàng Oanh ",
    role: "Chuyên viên thiết kế nội thất - kỹ thuật",
    image: HoangOanh,
  },
];

export const FACEBOOK_LINK =
  "https://www.facebook.com/ed.interior.architecture";

export const IFRAME_GOOGLE_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.232017641082!2d105.83771318512251!3d20.98333463947274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac42eb8919b9%3A0x6b6a3f524a46ddbe!2zNiBQLiBLaW0gxJDhu5NuZywgR2nDoXAgQsOhdCwgSG_DoG5nIE1haSwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1711789649828!5m2!1svi!2s";

export const data: Record<
  string,
  {
    products: any;
    label: string;
    link: string;
  }
> = {
  ["chung-cu"]: {
    products: chungcu,
    label: "Thiết kế nội thất chung cư",
    link: RoutesEnum.CHUNG_CU,
  },
  ["biet-thu"]: {
    products: bietthu,
    label: "Thiết kế nội thất biệt thự, nhà đất",
    link: RoutesEnum.BIET_THU,
  },
  ["van-phong"]: {
    products: vanphong,
    label: "Thiết kế nội thất văn phòng",
    link: RoutesEnum.VAN_PHONG,
  },
  ["khach-san-coffee"]: {
    products: khachsan,
    label: "Khách Sạn - Nhà Hàng - Coffee",
    link: RoutesEnum.KHACH_SAN,
  },
  ["san-vuon"]: {
    products: sanvuon,
    label: "Thiết kế kiến trúc sân vườn",
    link: RoutesEnum.SAN_VUON,
  },
  ["du-an-da-hoan-thanh"]: {
    products: thucte,
    label: "Dự án đã hoàn thành",
    link: RoutesEnum.THUC_TE,
  },
  ["nha-tho"]: {
    products: nhatho,
    label: "Thiết kế nhà thờ",
    link: RoutesEnum.THUC_TE,
  },
};

export const dropdownMenuItems = [
  {
    href: RoutesEnum.CHUNG_CU,
    label: "Thiết kế nội thất chung cư",
  },
  {
    href: RoutesEnum.BIET_THU,
    label: "Thiết kế nội thất biệt thự, nhà đất",
  },
  {
    href: RoutesEnum.VAN_PHONG,
    label: "Thiết kế nội thất văn phòng",
  },
  {
    href: RoutesEnum.KHACH_SAN,
    label: "Thiết kế nhà hàng, khách sạn, coffee",
  },
  {
    href: RoutesEnum.SAN_VUON,
    label: "Thiết kế kiến trúc, sân vườn",
  },
  {
    href: RoutesEnum.NHA_THO,
    label: "Thiết kế nhà thờ",
  },
];

// {
//   "name": "CĂN HỘ STUDIO OCEAN PARK 1",
//   "slug": "can-ho-studio-ocean-park-1",
//   "address": "T-Palace - Hà Nội",
//   "area": "Diện tích: 700m2 nội thất – 200m2 sân vườn",
//   "year_completed": "07/2023",
//   "design_by": "MR THỦY",
//   "photo": "Nguyễn Thái Thạch",
//   "status": "completed",
//   "images": [
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEzLiBNUlMgVEjhu6ZZIC0gT0NFQU4gUEFSSyAxL01SUyBUSOG7plkgLSBPQ0VBTiBQQVJLIDEuMS5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEzLiBNUlMgVEjhu6ZZIC0gT0NFQU4gUEFSSyAxL01SUyBUSOG7plkgLSBPQ0VBTiBQQVJLIDEuMi5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEzLiBNUlMgVEjhu6ZZIC0gT0NFQU4gUEFSSyAxL01SUyBUSOG7plkgLSBPQ0VBTiBQQVJLIDEuMy5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEzLiBNUlMgVEjhu6ZZIC0gT0NFQU4gUEFSSyAxL01SUyBUSOG7plkgLSBPQ0VBTiBQQVJLIDEuNC5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEzLiBNUlMgVEjhu6ZZIC0gT0NFQU4gUEFSSyAxL01SUyBUSOG7plkgLSBPQ0VBTiBQQVJLIDEuNS5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEzLiBNUlMgVEjhu6ZZIC0gT0NFQU4gUEFSSyAxL01SUyBUSOG7plkgLSBPQ0VBTiBQQVJLIDEuNi5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEzLiBNUlMgVEjhu6ZZIC0gT0NFQU4gUEFSSyAxL01SUyBUSOG7plkgLSBPQ0VBTiBQQVJLIDEuNy5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEzLiBNUlMgVEjhu6ZZIC0gT0NFQU4gUEFSSyAxL01SUyBUSOG7plkgLSBPQ0VBTiBQQVJLIDEuOC5qcGc=&version_id=null"
//   ],
//   "description": "MR DU - XANH VILLAS"
// },
// {
//   "name": "OCEAN PARK",
//   "slug": "ocean-park",
//   "address": "T-Palace - Hà Nội",
//   "area": "Diện tích: 700m2 nội thất – 200m2 sân vườn",
//   "year_completed": "07/2023",
//   "design_by": "MR TU",
//   "photo": "Nguyễn Thái Thạch",
//   "status": "completed",
//   "images": [
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8xLmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8yLmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8zLmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy80LmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy81LmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy82LmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy83LmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy84LmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy85LmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy85Yi5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8xMC5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8xNC5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8xNS5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8xNi5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8xNy5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8xOC5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzEwLiBNUiBUVSAtIE9DRUFOUEFSSy8xOS5qcGc=&version_id=null"
//   ],
//   "description": "MR DU - XANH VILLAS"
// },
// {
//   "name": "BOO YOUNG",
//   "slug": "boo-young",
//   "address": "T-Palace - Hà Nội",
//   "area": "Diện tích: 700m2 nội thất – 200m2 sân vườn",
//   "year_completed": "07/2023",
//   "design_by": "MR DUY",
//   "photo": "Nguyễn Thái Thạch",
//   "status": "completed",
//   "images": [
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1L01SIERVWSAtIEJPTyBZT1VORy96NTMxMTg3NjcxNzA4NV9lOWE4M2Q0Njk4NjVjYzEwMzQxNGYxMjI3MzMxYjBkOC5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1L01SIERVWSAtIEJPTyBZT1VORy96NTMxMTg3NjcyOTA3Nl9mMTkyNDA0MzViZTcyYTRmZjk3MzFjZWY4MzEyOWEyYi5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1L01SIERVWSAtIEJPTyBZT1VORy96NTMxMTg3NjcyOTE2Nl9hNTE0ODQ4MGVkYmM3OTllYjhhMDc4NDliNzljOWYwMS5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1L01SIERVWSAtIEJPTyBZT1VORy96NTMxMTg3NjczOTY0NV80NzNlMDcyNWYxNDNkZGY3OWNiZDVlNTU5OThlYzAzNi5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1L01SIERVWSAtIEJPTyBZT1VORy96NTMxMTg3Njc1MTAxM19iOTk2YzU5Yzk0YjE4ODExYmQ1NzljYzE5NmNjMDMxZS5qcGc=&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1L01SIERVWSAtIEJPTyBZT1VORy96NTMxMTg3Njc1MTE5N182ZTMzNzY1MDAyYjFjZDNjYTEyMWUxNTQxM2I2MDhmYy5qcGc=&version_id=null"
//   ],
//   "description": "MR DU - XANH VILLAS"
// },
// {
//   "name": "CHUNG CƯ 2PN VINHOMES SKYLAKE",
//   "slug": "chung-cu-2pn-vinhomes-skylake",
//   "address": "T-Palace - Hà Nội",
//   "area": "Diện tích: 700m2 nội thất – 200m2 sân vườn",
//   "year_completed": "07/2023",
//   "design_by": "MR BẢO",
//   "photo": "Nguyễn Thái Thạch",
//   "status": "completed",
//   "images": [
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzE2LiBNUiBUw5ogLSBPQ0VBTiBQQVJLIDEvTVIgVMOaIC0gT0NFQU4gUEFSSyAxLjEuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzE2LiBNUiBUw5ogLSBPQ0VBTiBQQVJLIDEvTVIgVMOaIC0gT0NFQU4gUEFSSyAxLjIuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzE2LiBNUiBUw5ogLSBPQ0VBTiBQQVJLIDEvTVIgVMOaIC0gT0NFQU4gUEFSSyAxLjMuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzE2LiBNUiBUw5ogLSBPQ0VBTiBQQVJLIDEvTVIgVMOaIC0gT0NFQU4gUEFSSyAxLjQuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzE2LiBNUiBUw5ogLSBPQ0VBTiBQQVJLIDEvTVIgVMOaIC0gT0NFQU4gUEFSSyAxLjYuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzE2LiBNUiBUw5ogLSBPQ0VBTiBQQVJLIDEvTVIgVMOaIC0gT0NFQU4gUEFSSyAxLjguanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzE2LiBNUiBUw5ogLSBPQ0VBTiBQQVJLIDEvTVIgVMOaIC0gT0NFQU4gUEFSSyAxLjkuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzE2LiBNUiBUw5ogLSBPQ0VBTiBQQVJLIDEvTVIgVMOaIC0gT0NFQU4gUEFSSyAxLjEwLmpwZw==&version_id=null"
//   ],
//   "description": "MR DU - XANH VILLAS"
// },
// {
//   "name": "CHUNG CƯ 3PN  VINHOMES ROYAL CITY",
//   "slug": "chung-cu-3-pn-vin-royal-city",
//   "address": "Vinhomes Smart City - Hà Nội",
//   "area": "50m2",
//   "year_completed": "07/2023",
//   "design_by": "MR QUANG",
//   "photo": "Nguyễn Thái Thạch",
//   "status": "completed",
//   "images": [
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzIxLiBNUiBWSeG7hlQgLSBPQ0VBTiBQQVJLIDEvTVIgVknhu4ZUIC0gT0NFQU4gUEFSSyAxLjkuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzIxLiBNUiBWSeG7hlQgLSBPQ0VBTiBQQVJLIDEvTVIgVknhu4ZUIC0gT0NFQU4gUEFSSyAxLjEuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzIxLiBNUiBWSeG7hlQgLSBPQ0VBTiBQQVJLIDEvTVIgVknhu4ZUIC0gT0NFQU4gUEFSSyAxLjEyLmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzIxLiBNUiBWSeG7hlQgLSBPQ0VBTiBQQVJLIDEvTVIgVknhu4ZUIC0gT0NFQU4gUEFSSyAxLjMuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzIxLiBNUiBWSeG7hlQgLSBPQ0VBTiBQQVJLIDEvTVIgVknhu4ZUIC0gT0NFQU4gUEFSSyAxLjUuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzIxLiBNUiBWSeG7hlQgLSBPQ0VBTiBQQVJLIDEvTVIgVknhu4ZUIC0gT0NFQU4gUEFSSyAxLjYuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzIxLiBNUiBWSeG7hlQgLSBPQ0VBTiBQQVJLIDEvTVIgVknhu4ZUIC0gT0NFQU4gUEFSSyAxLjcuanBn&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzIxLiBNUiBWSeG7hlQgLSBPQ0VBTiBQQVJLIDEvTVIgVknhu4ZUIC0gT0NFQU4gUEFSSyAxLjE0LmpwZw==&version_id=null",
//       "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9jaHVuZ2N1LzIxLiBNUiBWSeG7hlQgLSBPQ0VBTiBQQVJLIDEvTVIgVknhu4ZUIC0gT0NFQU4gUEFSSyAxLjE1LmpwZw==&version_id=null"
//   ],
//   "description": "MR DU - XANH VILLAS"
// }
