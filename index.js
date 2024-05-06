let ans_1 = 0;
let ans_2 = 0;
let total_score = 0;


function checkAnswer_1(answer) {
    const result = document.getElementById('result_1');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        ans_1++;
        update_score();
        console.log(ans_1);
        console.log(total_score);
    } else {
        result.textContent = "Answer " + answer.toUpperCase() + " is incorrect! Try again.";
        result.style.color = 'red';
        if (ans_1 > 0) {
            ans_1--
        } else { ans_1 = 0 };
        update_score();
        console.log(ans_1);
        console.log(total_score);
    }
}

function checkAnswer_2(answer) {
    const result = document.getElementById('result_2');
    if (answer === 'b') {
        result.textContent = "ถูกต้อง CS ย่อมาจาก Counter service";
        result.style.color = 'green';
        ans_2++;
        update_score();
        console.log(ans_2);
        console.log(total_score);
    } else {
        result.textContent = "Answer " + answer.toUpperCase() + " is incorrect! Try again.";
        result.style.color = 'red';
        if (ans_2 > 0) {
            ans_2--
        } else { ans_2 = 0 };
        update_score();
        console.log(ans_2);
        console.log(total_score);
    }
}

function update_score() {
    const score_display = document.getElementById('score_display');
    total_score = ans_1 + ans_2;
    score_display.textContent = total_score;
}
