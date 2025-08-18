const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});

window.onscroll = () => {
    menu.classList.remove("menu-active");
};

const btnFilter = document.querySelectorAll(".produk-box ul li");
const textItems = document.querySelectorAll(".produk-list .item");

btnFilter.forEach((data) => {
  data.onclick = () => {
    btnFilter.forEach((data) => {
      data.className = "";
    });

    data.className = "active";

    // Filter Teks
    const btnText = data.textContent.toLowerCase();
    
    textItems.forEach((item) => {
      item.style.display = "none"; // Sembunyikan semua teks
      if (
        item.getAttribute("data-filter") === btnText || // Cocokkan dengan kategori
        btnText === "semua" // Tambahkan kondisi untuk "Semua"
      ) {
        item.style.display = "block"; // Tampilkan teks yang sesuai
      }
    });
  };
});