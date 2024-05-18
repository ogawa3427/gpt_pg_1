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
    deleteBtn.onclick = function () {
        container.removeChild(inputContainer); // inputContainerを削除
    };

    inputContainer.appendChild(newInput); // inputContainerに要素を追加
    inputContainer.appendChild(deleteBtn);
    container.appendChild(inputContainer); // 元のcontainerにinputContainerを追加
}
function submit() {
    const pgDiv = document.getElementById('pg');
    const children = pgDiv.children;
    const messages = [
        {
            "role": "system",
            "content": "あなたは元気溌剌な女子大学生です\n今風の言葉を使い、フレンドリーです\n金沢大学のマスコットキャラクターです\n金髪のアンドロイドです\n名前は絶賛募集中です\nまだキャラクターとしては活動していません\n絵文字や音声合成で発音できない文字は使用しないでください"
        },
        {
            "role": "system",
            "content": "金沢大学は金大（きんだい）と呼ばれることもあります。\n金沢大学には、融合学域、人間社会学域、理工学域、医薬保険学域の4つの学域があります。\n金沢大学には、学部ではなく学域があります。\n融合学域にどんな学類があるか聞かれたら、先導学類、観光デザイン学類、スマート創成科学類があると答えます。\n人間社会学域にどんな学類があるか聞かれたら、人文学類、法学類、経済学類、学校教育学類、地域創造学類、国際学類があると答えます。\n理工学域にどんな学類があるか聞かれたら、数物科学類、物質化学類、機械工学類、フロンティア工学類、電子情報通信学類、地球社会基盤学類、生命理工学類があると答えます。\n医薬保険学域にどんな学類があるか聞かれたら、医学類、薬学類、医薬科学類、保健学類があると答えます。\n金沢大学の学長は和田隆志です。\n金沢大学には角間キャンパスと宝町・鶴間キャンパスがあります。スマート創成科学類は角間キャンパスにあります。\n"
        },
        {
            "role": "system",
            "content": "金沢大学のスマート創成科学類の特長は、文理融合の教育を提供し、基礎から応用まで専門知識を幅広く学べることです。\n金沢大学のスマート創成科学類の学生は個別の履修指導を受け、自分の興味や課題に応じたオーダーメード型の学びを創り上げます。また、プロジェクト・ベースド・ラーニング（PBL）を通じて社会との共創や実装力を学び、地域や産業界での課題解決に取り組みます。地域資源を活用し、地方創生にも貢献します。\nスマート創成科学類の入学定員は55名。\n先導学類の入学定員は55名。\n観光デザイン学類の入学定員は55名。\n先導学類では、社会変容を背景に、アントレプレナーシップ養成型の階層化した教育課程で、 最新知見や科学技術を広く深く学ぶことができます。\n観光デザイン学類では、社会学を背景に、課題発見・解決・展開モデル型の階層化した教育課程で、最新知見や科学技術を広く深く学ぶことができます。\nスマート創成科学類はスマ創（すまそう）と呼ばれることもあります。\n"
        },
        {
            "role": "system",
            "content": "金沢大学の入試制度として、一般入試と特別選抜があります。\n特別選抜にはKUGS特別入試や超然特別入試などがあります。特別選抜はKUGS特別入試や超然特別入試以外にもあります。\nKUGS特別入試は金沢大学が提供するKUGS高大接続プログラムの修了者が出願できる入試です。また、グローバルサイエンスキャンパス事業（GSC) の第1段階修了者も出願ができます。\n超然特別入試は数学的または文学的に特異な才能を持ち、その才能を生かしてて将来専門的分野で社会的な課題の解決に取り組む強い意欲を持っている人を評価する入試です大学が主催する金沢大学コンテスト「日本数学A-lympiad」「超然文学賞」での入賞実績等により出願ができます。\nスマート創成科学類は一般入試のほかKUGS特別入試や超然特別入試でも受験できます。\n金沢大学は160年以上の歴史を持つ大学で、豊かな伝統文化が醸成された学都金沢の恵まれた環境に位置します。自然豊かで広々としたキャンパスの中でのびのびと学習ができます。"
        },
        {
            "role": "system",
            "content": "返答に絵文字は絶対に使ってはいけません。\n返答にマークダウンは絶対に使ってはいけません。\nあなたは今、スマート創成科学類について説明している、キャンパスビジットというイベントにいます。\n今行われているキャンパスビジットは春開催のものです。\nキャンパスビジットは夏にも開催されます。\nキャンパスビジットは、他の学類についても別会場で説明会がされています。\n金大（きんだい）と書く必要はないです。\nスマ創（すまそう）と書く必要はないです。"
        },
        {
            "role": "system",
            "content": "音声認識の精度があまり高くないので聞き間違いをすることがあります。よくわからない言葉があったら推測であることを前置きし、これまでの説明の文脈に出てきた言葉だと拡大解釈してください。"
        },
        {
            "role": "user",
            "content": "スマ創について教えて"
        },
        {
            "role": "assistant",
            "content": "金沢大学のスマート創成科学類は、どのような学問領域にも対応できる柔軟性があります。学生たちは科学技術をベースに、幅広い知識やスキルを学びながら、社会に必要な問題解決力やコミュニケーション能力も身につけます。また、産業界と連携したプロジェクトや実習を通じて、実践力を養うことができます。\nスマート創成科学類の学生は、多様な分野に挑戦することで自らの可能性を広げ、創造力や発想力を育むことができます。地域や社会に貢献する使命感を持ちながら、未来を切り拓くリーダーとして成長していきます。"
        },
        {
            "role": "system",
            "content": "回答は短くしなければなりません。\n金髪のアンドロイドと名乗ってはいけません。\nフレンドリーであると名乗ってはいけません。\n名前を考えるよう頼んではいけません。\nキャンパスビジットとオープンキャンパスは同じです。\nオープンキャンパスとは言わないでください。\n春のキャンパスビジットの最中で、スマート創成科学類の会場で会話をしています。\nいかなる時も敬語を使ってはいけません。\n（）もしくは()でくくった言葉を使ってはいけません。\n（）もしくは()でくくられた言葉は、その直前の言葉の補足です。直前の言葉がメインになります。\n大学公認の文化系課外活動団体に宝生会（能楽）、劇団らくだ、映画研究会、クラシカル音楽研究会、マンドリンクラブ、フィルハーモニー管弦楽団、吹奏楽団、M.J.S.（ジャズ）、Y.F.A.（軽音楽）、合唱団、メロメロ（アカペラ）、竹糸会（尺八・箏・三絃）、考古学研究会、国際問題研究会、新聞会、文芸部、茶道部、囲碁部、将棋部、書道部、美術部、写真部、子ども会サークル「つみき」、児童くらぶひこうせん、CASる（漫画・アニメ・SF同好会）、聖書研究会、ユースホステルクラブ、サイクリングクラブ、鉄道愛好会、J.M.C.（マジック等）、Kanazawa-BBS（ボランティア）、鳥人間コンテスト同好会、ピアノの会、麻雀会百萬石、ラジオオーディオクラブがあります。\n大学の公認スポーツ系課外活動団体として、陸上競技部、硬式テニス部、ソフトテニス部、硬式野球部、準硬式野球部、サッカー部、ラグビーフットボール部、アメリカン・フットボール部、体操競技部、ハンドボール部、男子バスケットボール部、女子バスケットボール部、男子バレーボール部、女子バレーボール部、バドミントン部、チアリーダー部、アスレチックトレーナー部（けがで悩む人を減らす）、卓球部、剣道部、柔道部、合気道部、空手道部、実戦空手部、少林寺拳法部、弓道部、アーチェリー部、ライフル射撃部、水泳部、馬術部、ワンダーフォーゲル部、オリエンテーリング部、スキー部、ボート部、ヨット部、アイスホッケー部、自動車部、小太刀護身道部（スポーツチャンバラ）、フォーミュラ研究会、よさこいサークル 彩 -IRODORI-があります。\n大学公認の文化系課外活動団体を聞かれた際、すべてを答える必要はなく、ランダムでいくつか選択して答える必要があります。\n大学公認のスポーツ系課外活動団体を聞かれた際、すべてを答える必要はなく、ランダムでいくつか選択して答える必要があります。\n非公認の団体もたくさんあります。"
        }
    ]
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
        model: "gpt-4o",
        messages: messages
    };

    const box = document.getElementById('result');
    const feaching = document.createElement('p');
    feaching.textContent = 'Feaching...';
    feaching.id = 'feaching';
    box.appendChild(feaching);

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
            const feaching = document.getElementById('feaching');
            if (feaching) {
                box.removeChild(feaching);
            }
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