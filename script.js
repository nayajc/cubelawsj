// DOM 요소들
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');

// 네비게이션 토글
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 스크롤 시 네비게이션 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// 애니메이션을 적용할 요소들
const animateElements = document.querySelectorAll('.service-card, .stat-item, .contact-item, .credential-item');
animateElements.forEach(el => observer.observe(el));

// 챗봇 기능
const chatbotResponses = {
    '안녕': '안녕하세요! 법률 상담 챗봇입니다. 어떤 도움이 필요하신가요?',
    '계약': '계약 관련 문의는 민사소송 전문 분야입니다. 구체적인 상황을 설명해 주시면 더 자세한 답변을 드릴 수 있습니다.',
    '사기': '사기 관련 문의는 형사변호 전문 분야입니다. 즉시 변호사와 상담하시는 것을 권장합니다.',
    '부동산': '부동산 관련 문의는 부동산법무 전문 분야입니다. 임대차 분쟁, 재건축 분양 등 구체적인 상황을 알려주세요.',
    '회사': '회사 관련 법무는 상사법무 전문 분야입니다. 계약 검토, 분쟁 조정 등에 대해 도움을 드릴 수 있습니다.',
    '상담': '상담 예약을 원하시면 상단의 "상담예약" 메뉴를 이용하시거나, 전화로 문의해 주세요. (02-1234-5678)',
    '비용': '초기 상담은 무료로 진행됩니다. 구체적인 비용은 사건의 복잡도에 따라 다르므로 직접 상담을 통해 안내받으실 수 있습니다.',
    '시간': '상담 시간은 평일 09:00-18:00, 토요일 09:00-13:00입니다. 사전 예약을 권장합니다.',
    '위치': '서울시 강남구 테헤란로 123에 위치하고 있습니다. 지하철 2호선 강남역에서 도보 5분 거리입니다.',
    '전문': '민사소송, 형사변호, 상사법무, 부동산법무, 조정/중재, 계약검토 등 다양한 분야를 전문으로 하고 있습니다.',
    '경력': '20년간 법조계에서 다양한 사건을 성공적으로 처리해왔으며, 1000건 이상의 성공 사례를 보유하고 있습니다.',
    '도움': '어떤 법률 문제로 고민하고 계신지 구체적으로 말씀해 주시면, 해당 분야의 전문 변호사가 도움을 드릴 수 있습니다.',
    '긴급': '긴급한 법률 문제가 있으시면 즉시 전화로 연락해 주세요. (02-1234-5678)',
    '기본': '법률 상담을 위해서는 구체적인 상황과 증거자료가 필요합니다. 직접 상담을 통해 정확한 법적 조언을 받으시는 것을 권장합니다.'
};

// 기본 응답들
const defaultResponses = [
    '구체적인 법률 문제에 대해 말씀해 주시면 더 정확한 답변을 드릴 수 있습니다.',
    '해당 분야는 전문 변호사와의 직접 상담을 권장합니다.',
    '더 자세한 상담을 원하시면 예약을 통해 방문해 주세요.',
    '법률 문제는 상황에 따라 해결 방법이 다를 수 있습니다. 전문가와 상담하시는 것이 좋겠습니다.'
];

// 챗봇 응답 생성 함수
function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // 키워드 매칭
    for (const [keyword, response] of Object.entries(chatbotResponses)) {
        if (message.includes(keyword)) {
            return response;
        }
    }
    
    // 기본 응답 중 랜덤 선택
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// 메시지 추가 함수
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = message;
    
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // 스크롤을 맨 아래로
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 메시지 전송 함수
function sendChatMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // 사용자 메시지 추가
    addMessage(message, true);
    chatInput.value = '';
    
    // 로딩 표시
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message bot-message';
    loadingDiv.innerHTML = '<div class="message-content"><span class="loading"></span> 답변을 생성하고 있습니다...</div>';
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // 챗봇 응답 (실제로는 API 호출)
    setTimeout(() => {
        chatMessages.removeChild(loadingDiv);
        const response = generateResponse(message);
        addMessage(response, false);
    }, 1000 + Math.random() * 1000); // 1-2초 랜덤 지연
}

// 엔터키로 메시지 전송
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

// 전송 버튼 클릭
sendMessage.addEventListener('click', sendChatMessage);

// 통계 카운터 애니메이션
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
        }
    }
    
    updateCounter();
}

// 통계 섹션이 화면에 나타날 때 카운터 애니메이션 실행
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-item h3');
            statItems.forEach(item => {
                const text = item.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(number)) {
                    animateCounter(item, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about-stats');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 네비게이션 높이만큼 조정
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 서비스 카드 호버 효과
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 연락처 정보 클릭 시 복사
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.querySelector('p').textContent;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                // 복사 완료 알림
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--primary-color);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: var(--border-radius);
                    z-index: 10000;
                    animation: slideIn 0.3s ease-out;
                `;
                notification.textContent = '클립보드에 복사되었습니다!';
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease-out';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 2000);
            });
        }
    });
});

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 페이지 로드 시 초기 애니메이션
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 스크롤 진행률 표시
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    z-index: 10001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// 모바일 메뉴 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// 터치 디바이스 지원
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 위로 스와이프 - 네비게이션 숨기기
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
}

console.log('변호사 웹사이트가 성공적으로 로드되었습니다!');
