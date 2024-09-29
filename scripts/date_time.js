function dateTime() {
    var now = new Date(); // current date
    const month = ["一月", "二月", "三月","四月","五月","六月",
                            "七月", "八月", "九月","十月","十一月","十二月"];
    const monthDate = ["一", "二", "三","四","五","六","七", "八", "九",
                            "十","十一","十二","十三","十四","十五","十六","十七", "十八", "十九",
                            "二十","二十一","二十二","二十三","二十四","二十五","二十六","二十七",
                            "二十八", "二十九","三十","三十一"];
    const weekDay = ["日","一", "二", "三","四","五","六"];
    const minuteI = now.getMinutes();
    var minute;
    var time;
    var weekDayNum;

    if (minuteI<10){
        minute = "0"+ minuteI;
    }
    else{
        minute = minuteI;
    }
    time = now.getHours() + ":" + minute;
    if(now.getDay()==0)
        weekDayNum = now.getDay();
    else
        weekDayNum = now.getDay()-1;
    document.getElementById("dateTime").innerHTML = now.getFullYear() + " " + month[now.getMonth()] + monthDate[now.getDate()-1] + "號 " + time + " 星期" + weekDay[weekDayNum];
    secondRunner(now.getSeconds());
    setTimeout(dateTime, 1000);
}

function secondRunner(seconds){
    const progressBar = document.querySelector(".progress-fill");
        let progressWidth = seconds/60 *100
        if(seconds>0){
            progressBar.style.width = progressWidth +"%";
        }
        else{
            progressBar.style.width = "0%";
        }
}

dateTime();