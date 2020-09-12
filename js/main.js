let task_input = document.getElementById("task-input");
let input_box = document.getElementById("input-box");
let task_edit = document.getElementById("task-edit");
let gray = document.getElementById("gray");
let flag = "close";
let form_flag = "";

function close_flag() {
    flag = "close";
}

function open_flag() {
    flag = "open";
}
//タスク入力画面を押したとき
function open_form() {
    task_input.style.display = 'none';
    input_box.style.display = 'block';
    // open_flag();
    form_flag = "input";
}

document.addEventListener('click', (e) => {
        console.log(flag);
        console.log(form_flag);
        if (flag === "close") {
              if (form_flag !== "") {
                open_flag();
              }
              return;
        }
        if (form_flag === "input") {
              if(!e.target.closest('.input-box')) {
                //入力フォームの外側をクリックしたときの処理
                //タスク編集フォームの外側をクリック
                if(!e.target.closest('.task')) {
                  task_input.style.display = 'flex';
                  input_box.style.display = 'none';
                  close_flag();
                  form_flag = "";
                //タスク編集フォームの内側をクリック
                } else {
                  task_input.style.display = 'flex';
                  input_box.style.display = 'none';
                  gray.style.display = 'flex';
                  form_flag = "edit";
                }
              } else {
                //内側をクリックしたときの処理
                //閉じるボタン以外をクリック
                if (!e.target.closest('.close-form')) {
                  task_input.style.display = 'none';
                  input_box.style.display = 'block';
                //閉じるボタンをクリック
                } else {
                  task_input.style.display = 'flex';
                  input_box.style.display = 'none';
                  close_flag();
                  form_flag = "";
                }
              }
        } else if (form_flag === "edit") {
          if (flag === "close") {
                open_flag();
                return;
          }
          if(!e.target.closest('.task-edit')) {
            //外側をクリックしたときの処理
              gray.style.display = 'none';
              close_flag();
              form_flag = "";
          } else {
            //内側をクリックしたときの処理
              if(!e.target.closest('#close-task')) {
                  gray.style.display = 'flex';
              } else {
                  gray.style.display = 'none';
                  close_flag();
                  form_flag = "";
              }
          }
        }
});

// タスクを押したとき
function edit_task() {
    if(form_flag === "input") {
      return;
    }
    gray.style.display = 'flex';
    form_flag = "edit";
}
