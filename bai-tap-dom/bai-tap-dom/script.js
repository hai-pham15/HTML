console.log("RUN SCRIPT");

// Đổi style của tiêu đề Our companies thành chữ in đậm và kích thước 32px
// Gợi ý: Sử dụng .style.fontWeight và .style.fontSize

// Đổi màu nền của phần footer thành màu #0984e3
// Gợi ý: Sử dụng .style.backgroundColor

// Đổi đoạn text ở footer từ "© 2020 One Mount Group, JSC." thành "© 2021 One Mount Group, JSC."
// Gợi ý: Sử dụng .innerText

// Đổi ảnh đầu tiên thành ảnh onhousing.png
// Gợi ý: Sử dụng .src

document.querySelector(".title-section").style.fontWeight="bold"
document.querySelector(".title-section").style.fontSize="32px"

document.querySelector("#OMG-footer").style.backgroundColor="#0984e3"

document.getElementsByTagName("p")[2].innerText="© 2021 One Mount Group, JSC."

document.getElementsByTagName("img")[0].src="img/onhousing.png"