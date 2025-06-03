// Скрипт для функциональности сайта

document.addEventListener('DOMContentLoaded', function() {
    // Кнопка возврата наверх
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Функциональность чата
    const chatToggle = document.getElementById('chat-toggle');
    const closeChat = document.querySelector('.close-chat');
    const sendMessage = document.querySelector('.send-message');
    const chatInput = document.querySelector('.chat-footer input');
    const chatBody = document.querySelector('.chat-body');
    
    if (closeChat) {
        closeChat.addEventListener('click', function() {
            chatToggle.checked = false;
        });
    }
    
    if (sendMessage && chatInput) {
        sendMessage.addEventListener('click', function() {
            const message = chatInput.value.trim();
            
            if (message) {
                const userMessage = document.createElement('p');
                userMessage.classList.add('user-message');
                userMessage.textContent = message;
                chatBody.appendChild(userMessage);
                
                chatInput.value = '';
                
                // Имитация ответа
                setTimeout(function() {
                    const botMessage = document.createElement('p');
                    botMessage.classList.add('bot-message');
                    botMessage.textContent = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
                    chatBody.appendChild(botMessage);
                    
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, 1000);
            }
        });
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage.click();
            }
        });
    }
});
