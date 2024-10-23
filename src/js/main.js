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
    console.log("diemTrungBinh: ", diemTrungBinh);

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

getElement("#btnTienDien").onclick = () => {
  let soKM = +getElement("#inputSoKm").value;
  const tinhTienSoKm = (soKM) => {
    if (soKM <= 50) {
      return 500;
    } else if (soKM <= 50 && soKM <= 100) {
      return 650;
    } else if (soKM <= 100) {
      return 850;
    } else if (soKM <= 150) {
      return 1100;
    } else {
      return 1300;
    }
  };
  tinhTienSoKm();
  console.log(soKM);

  console.log(tinhTienSoKm());
};
