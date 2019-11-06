function getDice() {
    var msg = "開 ";
    var num1 = Math.floor(Math.random() * 6 + 1);
    var num2 = Math.floor(Math.random() * 6 + 1);
    var num3 = Math.floor(Math.random() * 6 + 1);
    //算出點數後再停
    //停直接取值放圖
    var total = num1 + num2 + num3;
    if (num1 == num2 && num2 == num3) {
        msg = "豹子通殺!!";
    } else {
        msg += total % 2 == 0 ? "雙" : "單";
        msg += total + "點";
        msg += total >= 4 && total <= 10 ? "小" : "大";

        switch (total) {
            case 4:
            case 17:
                msg += "賠70倍";
                break;
            case 6:
            case 15:
                msg += "賠20倍";
                break;
            case 7:
            case 14:
                msg += "賠13倍";
                break;
            case 8:
            case 13:
                msg += "賠10倍";
                break;
            case 9:
            case 12:
                msg += "賠8倍";
                break;
            case 10:
            case 11:
                msg += "賠7倍";
                break;
        }
      }

var result = [msg, num1, num2, num3];
return result;
}