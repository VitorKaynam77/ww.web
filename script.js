// Script para interatividade no site de Wallisson Wesker
document.addEventListener('DOMContentLoaded', () => {
    // Função para criar um menu de navegação responsivo
    const navToggle = document.createElement('button');
    navToggle.innerText = '☰';
    navToggle.style.fontSize = '1.5rem';
    navToggle.style.backgroundColor = '#000';
    navToggle.style.color = '#fff';
    navToggle.style.border = 'none';
    navToggle.style.cursor = 'pointer';

    const header = document.querySelector('header');
    const nav = header.querySelector('nav');
    nav.style.display = 'none'; // Esconde o menu inicialmente
    header.insertBefore(navToggle, nav);

    navToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
    });

    // Scroll suave para seções ao clicar nos links do menu
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Adiciona animação ao rolar a página
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease';
        observer.observe(section);
    });

    // Envia o formulário de contato (exemplo básico)
    const contactSection = document.querySelector('#contact');
    const emailLink = contactSection.querySelector('a[href^="mailto:"]');
    const whatsAppNumber = '41 9814-0279'; // Número do WhatsApp

    const showMessage = () => {
        alert('Obrigado por entrar em contato! Responderemos em breve.');
    };

    emailLink.addEventListener('click', e => {
        e.preventDefault();
        showMessage();
        window.location.href = emailLink.href; // Redireciona para o email padrão
    });

    contactSection.querySelector('p:last-child').addEventListener('click', () => {
        showMessage();
        window.open(`https://wa.me/${whatsAppNumber.replace(/\s/g, '')}`);
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Função para adicionar animação à seção Services
        const servicesSection = document.querySelector('#services');
        const serviceItems = servicesSection.querySelectorAll('ul li');
    
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in'); // Adiciona a classe de animação
                    }
                });
            },
            { threshold: 0.2 } // A porcentagem do elemento visível para ativar a animação
        );
    
        serviceItems.forEach(item => {
            item.style.opacity = 0; // Inicia os itens invisíveis
            item.style.transform = 'translateY(20px)'; // Move os itens para baixo
            item.style.transition = 'all 0.6s ease'; // Define a transição
            observer.observe(item);
        });
    });
    
});
