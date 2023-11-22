const form = document.getElementById('todo-form');

const text = document.getElementById("todo-input");
const date = document.getElementById('todo-datetime');

const list = document.getElementById('todo-list');

// console.log(form);

//Lắng nghe sự kiện gửi dữ liệu

form.addEventListener('submit', function(event){
    //ngăn chặn sự kiện load trang
    event.preventDefault();

    //lấy giá trị từ thẻ input
    const textInput = text.value;
    const dateInput = date.value;
    
    //kiểm tra dữ liệu
    if(textInput.trim() == ''){
        //nếu người k nhập thông tin
        text.classList.add('warning-text');
        text.placeholder = 'Yêu cầu người dùng nhập thông tin';
    }else{
        //kiểm tra nếu tồn tại thì xóa class
        if(text.classList.contains('warning-text')){
            text.classList.remove('warning-text');
        }

        const liItem = document.createElement('li');

        //textContent,innerText
        const textItem = document.createElement('span');
        //thêm nội dung vào thẻ span
        textItem.textContent =textInput;
        //thêm class vào thẻ
        textItem.classList.add('task');
        liItem.appendChild(textItem);

        const dateItem = document.createElement('span');
        dateItem.innerText = dateInput;
        dateItem.classList.add('datetime');
        liItem.appendChild(dateItem);

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = "Xóa";
        buttonDelete.style.display = 'none';
        liItem.appendChild(buttonDelete);

        list.appendChild(liItem);

        liItem.addEventListener('mouseover',function(event){
            buttonDelete.style.display = 'block';
        });

        liItem.addEventListener('mouseout',function(event){
            buttonDelete.style.display = 'none';
        });

        liItem.addEventListener('click', function(event){
            // console.log(event.target.tagName);
            if(event.target.tagName == 'BUTTON'){
                //event.target.parentNode.remove();
                liItem.remove();
            }
            else{
                liItem.classList.toggle('completed');
            }
        });

        //reset dữ liệu trong ô input
        text.value ='';
        date.value ='';
    }


});