let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function CalculateAge() {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3 = y2 - y1;
    let m3, d3;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    let yearText = y3 === 1 ? "Year" : "Years";
    let monthText = m3 === 1 ? "Month" : "Months";
    let dayText = d3 === 1 ? "Day" : "Days";

    if (y3 === 0) {
        if (m3 === 0) {
            result.innerHTML = `Your age is <span>${d3} ${dayText}</span> old.`;
        } else {
            result.innerHTML = `Your age is <span>${m3} ${monthText}</span> and <span>${d3} ${dayText}</span> old.`;
        }
    } else {
        result.innerHTML = `Your age is <span>${y3} ${yearText}</span>, <span>${m3} ${monthText}</span>, and <span>${d3} ${dayText}</span> old.`;
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}