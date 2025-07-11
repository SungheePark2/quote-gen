// 명언 데이터
const quotes = [
    {
        "quote": "성공은 최선을 다한 결과이지, 반드시 승리하는 것이 아니다.",
        "author": "존 우든"
    },
    {
        "quote": "천 마디 말보다 하나의 행동이 더 가치 있다.",
        "author": "마하트마 간디"
    },
    {
        "quote": "실패는 성공으로 가는 가장 빠른 길이다.",
        "author": "코코 샤넬"
    },
    {
        "quote": "오늘 걷지 않으면 내일은 뛰어야 한다.",
        "author": "이소룡"
    },
    {
        "quote": "기회는 준비된 자에게 온다.",
        "author": "토마스 에디슨"
    },
    {
        "quote": "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다.",
        "author": "헨리 포드"
    },
    {
        "quote": "작은 성취도 반복되면 큰 성공이 된다.",
        "author": "로버트 콜리어"
    },
    {
        "quote": "성공한 사람이 되려고 하지 말고, 가치 있는 사람이 되려고 노력하라.",
        "author": "알베르트 아인슈타인"
    },
    {
        "quote": "가장 어두운 밤도 끝나고 해는 떠오른다.",
        "author": "빅토르 위고"
    },
    {
        "quote": "지금 이 순간이 당신의 삶이다.",
        "author": "오프라 윈프리"
    },
    {
        "quote": "당신이 멈추지 않는 한, 얼마나 느린지는 중요하지 않다.",
        "author": "공자"
    },
    {
        "quote": "위대한 일은 작은 일들이 모여 이루어진다.",
        "author": "빈센트 반 고흐"
    },
    {
        "quote": "두려움은 선택이고, 용기는 행동이다.",
        "author": "존 맥스웰"
    },
    {
        "quote": "당신의 시간이 제한되어 있다는 것을 기억하라. 그러니 다른 사람의 삶을 사느라 낭비하지 마라.",
        "author": "스티브 잡스"
    },
    {
        "quote": "실패는 끝이 아니다. 포기가 끝이다.",
        "author": "마릴린 먼로"
    },
    {
        "quote": "생각은 말이 되고, 말은 행동이 되며, 행동은 습관이 된다.",
        "author": "마하트마 간디"
    },
    {
        "quote": "당신이 보는 세상은 당신이 생각하는 대로 만들어진다.",
        "author": "노먼 빈센트 필"
    },
    {
        "quote": "성공은 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다.",
        "author": "윈스턴 처칠"
    },
    {
        "quote": "당신이 할 수 있다고 생각하든, 할 수 없다고 생각하든, 당신은 옳다.",
        "author": "헨리 포드"
    },
    {
        "quote": "행동은 모든 성공의 기초이다.",
        "author": "파블로 피카소"
    }
];

// DOM 요소
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// 이전 명언 인덱스를 저장할 변수
let previousIndex = -1;

// 랜덤 명언 생성 함수
function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex && quotes.length > 1);
    
    previousIndex = randomIndex;
    return quotes[randomIndex];
}

// 명언 표시 함수
function displayQuote() {
    // 현재 요소들의 fade-in 클래스 제거
    quoteText.classList.remove('fade-in');
    authorText.classList.remove('fade-in');
    
    // 새로운 명언 가져오기
    const { quote, author } = getRandomQuote();
    
    // 약간의 지연 후 새로운 명언 표시 (페이드 아웃 효과를 위해)
    setTimeout(() => {
        // 큰따옴표를 추가하여 표시
        quoteText.textContent = `"${quote}"`;
        authorText.textContent = `- ${author}`;
        
        // fade-in 클래스 추가
        quoteText.classList.add('fade-in');
        authorText.classList.add('fade-in');
    }, 100);
}

// 이벤트 리스너
newQuoteButton.addEventListener('click', displayQuote);

// 초기 명언 표시
displayQuote(); 