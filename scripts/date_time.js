function date_time() {
    var now = new Date(); // current date
    const month = ["一月", "二月", "三月","四月","五月","六月",
                            "七月", "八月", "九月","十月","十一月","十二月"];
    const date = ["一", "二", "三","四","五","六","七", "八", "九",
                            "十","十一","十二","十三","十四","十五","十六","十七", "十八", "十九",
                            "二十","二十一","二十二","二十三","二十四","二十五","二十六","二十七",
                            "二十八", "二十九","三十","三十一"];
    let time = now.getHours() + ":" + now.getMinutes();
    document.getElementById("dateTime").innerHTML = month[now.getMonth()]+date[now.getDate()-1]+"號 "+time;

    setTimeout(date_time, 500);
}

date_time();