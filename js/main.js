let task_input = document.getElementById("task-input");
let input_box = document.getElementById("input-box");

//タスク入力画面を押したとき
function open_form() {
    task_input.style.display = 'none';
    input_box.style.display = 'block';
}

document.addEventListener('click', (e) => {
    if(!e.target.closest('.input-box')) {
      //外側をクリックしたときの処理
      task_input.style.display = 'block';
      input_box.style.display = 'none';
    } else {
      //内側をクリックしたときの処理
      task_input.style.display = 'none';
      input_box.style.display = 'block';
    }
});

//閉じるボタンを押したとき
document.getElementById("close").addEventListener('click', function() {
    task_input.style.display = 'block';
    input_box.style.display = 'none';
});

let task_edit = document.getElementById("task-edit");

//タスクを押したとき
function edit_task() {
    task_edit.style.display = 'block';
}

//タスクの閉じるボタンを押したとき
document.getElementById("close-task").addEventListener('click', function() {
    task_edit.style.display = 'none';
});

function close_form() {
    task_edit.style.display = 'none';
}

// //何もないところをクリックしたとき
// document.addEventListener('click', (e) => {
//     if(!e.target.closest('.input-box')) {
//       //外側をクリックしたときの処理
//         task_input.style.display = 'block';
//         input_box.style.display = 'none';
//     } else {
//       //内側をクリックしたときの処理
//         task_input.style.display = 'none';
//         input_box.style.display = 'block';
//     }
// });

