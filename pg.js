let sys_flag = false;
let usr_flag = false;
let asi_flag = false;

function addElementToPg() {
    const pgDiv = document.getElementById('pg');
    const newDiv = document.createElement('div');
    pgDiv.appendChild(newDiv);
}
function addInput(type) {
    const container = document.getElementById('pg');
    const inputContainer = document.createElement('div'); // 新しいdivを作成
    inputContainer.style.display = 'flex'; // 横並び設定
    inputContainer.style.flexDirection = 'row';
    inputContainer.style.justifyContent = 'space-between';

    const lavel = document.createElement('p');
    lavel.textContent = type;
    lavel.style.margin = '0 5%';
    if (type === 'System') {
        lavel.style.backgroundColor = 'red';
    } else if (type === 'User') {
        lavel.style.backgroundColor = 'blue';
    } else if (type === 'Assistant') {
        lavel.style.backgroundColor = 'green';
    }
    lavel.style.color = 'white'
    lavel.style.borderRadius = '3px';
    lavel.style.padding = '3px';
    lavel.style.marginTop = '5px';
    inputContainer.appendChild(lavel);

    const newInput = document.createElement('textarea');
    newInput.placeholder = `${type} input`;
    newInput.style.width = '100%';
    newInput.style.resize = 'vertical';
    newInput.style.overflowY = 'auto';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.onclick = function() {
        container.removeChild(inputContainer); // inputContainerを削除
    };

    inputContainer.appendChild(newInput); // inputContainerに要素を追加
    inputContainer.appendChild(deleteBtn);
    container.appendChild(inputContainer); // 元のcontainerにinputContainerを追加
}
function submit() {
    const pgDiv = document.getElementById('pg');
    const children = pgDiv.children;
    const messages = [];
    const key = document.getElementById('key_input').value;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const type = child.children[0].textContent;
        const input = child.children[1].value;
        if (type === 'System') {
            sys_flag = true;
            messages.push({ role: "system", content: input });
        } else if (type === 'User') {
            usr_flag = true;
            messages.push({ role: "user", content: input });
        } else if (type === 'Assistant') {
            asi_flag = true;
            messages.push({ role: "assistant", content: input });
        }
    }

    const data = {
        model: "gpt-3.5-turbo",
        messages: messages
    };

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const box = document.getElementById('result');
        const text = document.createElement('p');
        text.textContent = data.choices[0].message.content;
        box.appendChild(text);
    })
    .catch(error => console.error('Error:', error));

}
function save() {
    const pgDiv = document.getElementById('pg');
    const children = pgDiv.children;
    const messages = [];
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const type = child.children[0].textContent;
        const input = child.children[1].value;
        if (type === 'System') {
            sys_flag = true;
            messages.push({ role: "system", content: input });
        } else if (type === 'User') {
            usr_flag = true;
            messages.push({ role: "user", content: input });
        } else if (type === 'Assistant') {
            asi_flag = true;
            messages.push({ role: "assistant", content: input });
        }
    }
    const box = document.getElementById('result');
    if (box.children.length > 1) {
        const text = box.children[1].textContent;
        messages.push({ role: "assistant", content: text });
    }
    const blob = new Blob([JSON.stringify(messages)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'messages.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}