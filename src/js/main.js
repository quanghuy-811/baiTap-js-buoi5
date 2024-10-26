const getElement = (selector) => {
  return document.querySelector(selector);
};

// Bài 1: Quản lý tuyển sinh

getElement("#btnTuyenSinh").onclick = () => {
  let diemChuan = +getElement("#diemChuan").value;
  let khuVuc = +getElement("#selectKhuVuc").value;
  let doiTuong = +getElement("#selectDoiTuong").value;
  let diemMon1 = +getElement("#mon1").value;
  let diemMon2 = +getElement("#mon2").value;

  let diemMon3 = +getElement("#mon3").value;

  if (diemMon1 != 0 && diemMon2 != 0 && diemMon3 != 0) {
    let diemTrungBinh =
      (diemMon1 + diemMon2 + diemMon3) / 3 + khuVuc + doiTuong;

    if (diemTrungBinh >= diemChuan) {
      getElement(
        "#result1 span"
      ).innerHTML = `Bạn đã đậu. Tổng điểm là  ${diemTrungBinh}`;
    } else {
      getElement(
        "#result1 span"
      ).innerHTML = `Bạn đã rớt. Tổng điểm là  ${diemTrungBinh}`;
    }
  } else {
    getElement("#result1 span").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  }
};

// Bài 2 :  Tính tiền điện

const TĐ_B1 = 500;
const TĐ_B2 = 650;
const TĐ_B3 = 850;
const TĐ_B4 = 1100;
const TĐ_B5 = 1300;

const tinhTienDien = (paramSoKm) => {
  let tienDien = 0;
  if (paramSoKm <= 50) {
    tienDien = TĐ_B1 * paramSoKm;
  } else if (paramSoKm > 50 && paramSoKm <= 100) {
    tienDien = TĐ_B1 * 50 + (paramSoKm - 50) * TĐ_B2;
  } else if (paramSoKm <= 200) {
    tienDien = TĐ_B1 * 50 + 50 * TĐ_B2 + (paramSoKm - 100) * TĐ_B3;
  } else if (paramSoKm <= 350) {
    tienDien =
      TĐ_B1 * 50 + 50 * TĐ_B2 + 100 * TĐ_B3 + (paramSoKm - 200) * TĐ_B4;
  } else {
    tienDien =
      TĐ_B1 * 50 +
      50 * TĐ_B2 +
      100 * TĐ_B3 +
      150 * TĐ_B4 +
      (paramSoKm - 350) * TĐ_B5;
  }

  return tienDien;
};
getElement("#btnTienDien").onclick = () => {
  let soKM = +getElement("#inputSoKm").value;
  let inputTen = getElement("#inputTen").value;

  if (soKM != 0) {
    let tongTien = tinhTienDien(soKM);

    getElement("#result2 span").innerHTML = ` Tên: ${inputTen},
    Tiền điện: ${tongTien} `;
  } else {
    alert("Vui lòng nhập số KM");
  }
};

// Bài 3

const NUMBER = 4e6; // 40 triệu

const tinhTienThue = (tongThuNhap, soNgPhuThuoc) => {
  let tongTienThue = tongThuNhap - NUMBER - soNgPhuThuoc * 16e5;

  let index = 0;
  if (tongThuNhap <= 6e7) {
    index = tongTienThue * 0.05;
  } else if (tongThuNhap <= 12e7) {
    index = tongTienThue * 0.1;
  } else if (tongThuNhap <= 21e7) {
    index = tongTienThue * 0.15;
  } else if (tongThuNhap <= 384e6) {
    index = tongTienThue * 0.2;
  } else if (tongThuNhap <= 624e6) {
    index = tongTienThue * 0.25;
  } else if (tongThuNhap <= 96e7) {
    index = tongTienThue * 0.3;
  } else {
    index = tongTienThue * 0.35;
  }

  return index;
};
getElement("#btnTienThue").onclick = () => {
  let thuNhapNam = +getElement("#inputThuNhapNam").value;
  let tenThue = getElement("#inputTenThue").value;
  let nguoiPhuThuoc = getElement("#inputNguoiPhuThuoc").value;

  if (thuNhapNam > NUMBER) {
    let tongTien = tinhTienThue(thuNhapNam, nguoiPhuThuoc);
    let formattedNumber = new Intl.NumberFormat("vi-VN").format(tongTien);

    getElement("#result3 span").innerHTML = ` Tên: ${tenThue}, 
    Tiền thuế thu nhập cá nhân: ${formattedNumber} VNĐ `;
  } else {
    alert("Sô tiền thu nhập không hợp lệ");
  }
};

// Bài 4 : Tính tiền cap

const DN = "Doanh Nghiệp";
const ND = "Nhà Dân";

getElement("#loaiKhachHang").onchange = (event) => {
  if (event.target.value === DN) {
    getElement("#soKetNoi").style.display = "block";
  } else {
    getElement("#soKetNoi").style.display = "none";
  }
};
