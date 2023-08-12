let lang_check = true; //true --> vn / false --> eng
function lang_change(){
    if (lang_check){
        document.getElementById("logot1").innerHTML = "NHAN HOANG ANH CO., LTD";
        document.getElementById("logot2").innerHTML = "";
        document.getElementById("text1").innerHTML = "James, Vu Dinh Man";
        document.getElementById("text2").innerHTML = "Deputy General Director";
        document.getElementById("text3").innerHTML = "Tel: +84 909 048 999";
        document.getElementById("text4").innerHTML = "3rd floor, An Phu Plaza Building, 117-119 Ly Chinh Thang Street, Vo Thi Sau Ward, Dist. 3, HCM City";
        document.getElementById("text5").innerHTML = "Tel: +84 848 048 999";
        document.getElementById("text6").innerHTML = "Tax code: 0316871726";
        document.getElementById("text7").innerHTML = "VN";
        lang_check = false;
    }else{
        document.getElementById("logot1").innerHTML = "CÔNG TY TNHH THƯƠNG MẠI";
        document.getElementById("logot2").innerHTML = "NHÂN HOÀNG ANH";
        document.getElementById("text1").innerHTML = "VŨ ĐÌNH MẪN";
        document.getElementById("text2").innerHTML = "P. Tổng Giám Đốc";
        document.getElementById("text3").innerHTML = "Tel: 0909 048 999";
        document.getElementById("text4").innerHTML = "Tầng 3, Tòa nhà An Phú Plaza, 117-119 Lý Chính THắng, P.Võ Thị Sáu, Q.3, Tp.HCM";
        document.getElementById("text5").innerHTML = "Tel: 0848 048 999";
        document.getElementById("text6").innerHTML = "Mã số thuế: 0316871726";
        document.getElementById("text7").innerHTML = "ENG";
        lang_check = true;
    }
}