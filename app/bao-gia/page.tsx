import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Báo giá - ECHO Design",
  other: {
    ["or:title"]: "Báo giá - ECHO Design",
    ["og:site_name"]: "ECHO Design",
  },
};

const page = () => {
  return (
    <main className="text-[#555] font-light">
      <h1 className="text-center text-2xl font-semibold mt-10 mb-4">
        THIẾT KẾ KIẾN TRÚC – NỘI THẤT
      </h1>
      <div className="container mx-auto mb-10">
        <p>
          <span className="text-primary font-semibold">Echo design</span> xin
          gửi đến khách hàng bảng chi tiết chi phí các gói thiết kế cho các loại
          hình công trình như sau:
        </p>
        <p className="mt-2 font-medium text-lg">
          Đơn giá tính cho công trình có tổng diện tích 100 m2 trở lên.
        </p>
        <ul className="list-disc pl-4">
          <li>
            Số lần chỉnh sửa lớn (phong cách thiết kế, layout) không tính phí:
            02 lần
          </li>
          <li>
            Số lần chỉnh sửa nhỏ (màu sắc, decor, vật liệu,... ) không tính phí:
            05 lần
          </li>
          <li>
            Trong trường hợp số lần chỉnh sửa do chủ quan từ phía khách hàng
            nhiều hơn số lần miễn phí, chúng tôi sẽ tính thêm phụ phí tùy thuộc
            vào mức độ công việc cần xử lý
          </li>
          <li>
            Đơn giá trên chưa bao gồm hồ sơ kết cấu thép đối với các công trình
            có yêu cầu tính toán kết cấu.
          </li>
          <li>
            Không bao gồm hồ sơ xin phép xây dựng, hồ sơ xin phép thi công, cải
            t
          </li>
        </ul>
        <p className="mt-2 font-medium text-lg">
          Chi phí dao động phụ thuộc một số yếu tố sau:
        </p>
        <ul className="list-disc pl-4">
          <li>Diện tích thiết kế.</li>
          <li>Địa điểm làm việc.</li>
          <li>Tiến độ, thời gian hoàn thiện hồ sơ.</li>
        </ul>
        <p className="mt-3">
          <span className="font-medium">Gói thiết kế tiêu chuẩn:</span> là gói
          thiết kế dành cho khách hàng có căn hộ chung cư nhận bàn giao cơ bản,
          hoặc cần sửa chữa và cải tạo ít, chủ yếu hoàn thiện nội thất. Tổng chi
          phí đầu tư thường từ 100tr đến tối đa 500tr. Gói này nhằm rút ngắn
          thời gian cũng như chi phí cho thiết kế và thi công. Gói thiết kế đặc
          biệt: là gói thiết kế mà khách hàng sẽ làm việc trực tiếp với cấp
          trưởng phòng, quản lý thiết kế làm chủ trì thiết kế công trình của
          mình.
        </p>
        <p className="mt-2 font-medium text-lg">
          Bộ hồ sơ thiết kế tiêu chuẩn bao gồm:
        </p>
        <ul className="list-disc pl-4">
          <li>Mặt bằng, layout bố trí phân chia không gian.</li>
          <li>Concept style, phong cách định hướng theo từng công trình.</li>
          <li>
            Phối cảnh thiết kế 3D, thể hiện màu sắc, chất liệu, ánh sáng. (1 bộ
            in màu A4)
          </li>
        </ul>
        <p className="mt-2 font-medium text-lg">
          Hồ sơ thiết kế kỹ thuật thi công xây dựng: (1 bộ in đen trắng A3)
        </p>
        <ul className="list-disc pl-4">
          <li>Mặt bằng hiện trạng.</li>
          <li>Mặt bằng chi tiết phá dỡ (nếu có)</li>
          <li>Mặt bằng chi tiết làm mới, xây mới.</li>
          <li>Mặt bằng bố trí nội thất.</li>
          <li>Mặt bằng, chi tiết thiết kế trần.</li>
          <li>Mặt bằng, chi tiết thiết kế điện, nước.</li>
          <li>Mặt bằng, chi tiết thiết kế điều hoà, thông gió.</li>
          <li>Mặt bằng, chi tiết thiết kế đèn chiếu sáng.</li>
          <li>Mặt bằng, chi tiết thiết kế ốp lát gạch, đá.</li>
          <li>
            Và một số bản vẽ chi tiết khác đối với các hạng mục có liên quan. Hồ
            sơ thiết kế kỹ thuật sản xuất đồ gỗ nội thất. (1 bộ in đen trắng A3)
          </li>
        </ul>
      </div>
    </main>
  );
};

export default page;
