var text_area = document.createElement("h1");
text_area.id = "txt";
text_area.className = "textArea display-2";
text_area.innerHTML = "Start"

var num = 10;
var element = document.getElementById("txt");
setTimeout(() => {
    text_area.innerHTML = `Count: ${num}`;
    setTimeout(() => {
        num = num - 1;
        text_area.innerHTML = `Count: ${num}`;
        setTimeout(() => {
            num = num - 1
            text_area.innerHTML = `Count: ${num}`;
            setTimeout(() => {
                num = num - 1
                text_area.innerHTML = `Count: ${num}`;
                setTimeout(() => {
                    num = num - 1
                    text_area.innerHTML = `Count: ${num}`;
                    setTimeout(() => {
                        num = num - 1;
                        text_area.innerHTML = `Count: ${num}`;
                        setTimeout(() => {
                            num = num - 1;
                            text_area.innerHTML = `Count: ${num}`;
                            setTimeout(() => {
                                num = num - 1
                                text_area.innerHTML = `Count: ${num}`;
                                setTimeout(() => {
                                    num = num - 1
                                    text_area.innerHTML = `Count: ${num}`;
                                    setTimeout(() => {
                                        num = num - 1
                                        text_area.innerHTML = `Count: ${num}`;
                                        setTimeout(() => {
                                            num = num - 1
                                            text_area.innerHTML = "Happy Independance Day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);

                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);

    }, 1000);

}, 1000);

document.body.append(text_area);