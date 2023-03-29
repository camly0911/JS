var check_italic_bt1 = false;
var check_italic_bt2 = false;

function ChangeStatusItalic(position) {

    if (position == 'left') {
        if (check_italic_bt1) document.getElementById(position).style.fontStyle = 'normal';
        else document.getElementById(position).style.fontStyle = 'italic';
        check_italic_bt1 = !(check_italic_bt1);
    } else {
        if (check_italic_bt2) document.getElementById(position).style.fontStyle = 'normal';
        else document.getElementById(position).style.fontStyle = 'italic';
        check_italic_bt2 = !(check_italic_bt2);
    }
}


var check_bold_bt1 = false;
var check_bold_bt2 = false;

function ChangeStatusBold(position) {

    if (position == 'left') {
        if (check_bold_bt1) document.getElementById(position).style.fontWeight = 'normal';
        else document.getElementById(position).style.fontWeight = 'bold';
        check_bold_bt1 = !(check_bold_bt1);
    } else {
        if (check_bold_bt2) document.getElementById(position).style.fontWeight = 'normal';
        else document.getElementById(position).style.fontWeight = 'bold';
        check_bold_bt2 = !(check_bold_bt2);

    }
}


document.getElementById("reset-btn1").addEventListener('click', function() {
    document.getElementById('main_chat1').innerHTML = "";
})
document.getElementById("reset-btn2").addEventListener('click', function() {
    document.getElementById('main_chat2').innerHTML = "";
})


function CreateDivBox(position) {

    var div = document.createElement('div');
    var name_div = position + '_box';
    div.classList.add(name_div);
    return div;
}

function CreateSpanMessage(lr, position) {

    var span = document.createElement('span');
    var name_div = lr + '_msg';
    span.classList.add(name_div);
    span.classList.add('msg');
    if (position == 'left') {
        if (check_italic_bt1) span.style.fontStyle = 'italic';
        if (check_bold_bt1) span.style.fontWeight = 'bold';
    } else {
        if (check_italic_bt2) span.style.fontStyle = 'italic';
        if (check_bold_bt2) span.style.fontWeight = 'bold';
    }
    return span;
}

function AddMessage(text, box_left, box_right, position) {


    var span_left = CreateSpanMessage('left', position);
    span_left.appendChild(document.createTextNode(text));

    var div_left = CreateDivBox('left');
    div_left.appendChild(span_left);
    box_left.appendChild(div_left);


    var span_right = CreateSpanMessage('right', position);
    span_right.appendChild(document.createTextNode(text));

    var div_right = CreateDivBox('right');
    div_right.appendChild(span_right);
    box_right.appendChild(div_right);
}

function SendMessage(position) {

    var chatbox1 = document.getElementById('main_chat1');
    var chatbox2 = document.getElementById('main_chat2');
    var text = document.getElementById(position).value;
    if (text.trim() != '') {
        if (position == 'left') {
            AddMessage(text, chatbox2, chatbox1, position);
            check_bold_bt1 = true;
            check_italic_bt1 = true;
        } else {
            AddMessage(text, chatbox1, chatbox2, position);
            check_bold_bt2 = true;
            check_italic_bt2 = true;
        }
        ChangeStatusBold(position);
        ChangeStatusItalic(position);
        document.getElementById(position).value = "";
    }
}
