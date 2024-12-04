// Services data
const services = [
    {
        icon: 'book-open',
        name: 'Bookkeeping & Accounting',
        description: 'Professional bookkeeping services to maintain accurate financial records.'
    },
    {
        icon: 'building-2',
        name: 'Business Registration',
        description: 'Complete assistance in company registration and incorporation.'
    },
    {
        icon: 'clipboard-check',
        name: 'Compliance Management',
        description: 'Stay compliant with all regulatory requirements and deadlines.'
    },
    {
        icon: 'calculator',
        name: 'Tax Consulting',
        description: 'Expert tax planning and consultation services.'
    },
    {
        icon: 'file-text',
        name: 'Auditing',
        description: 'Comprehensive auditing services for businesses of all sizes.'
    },
    {
        icon: 'trending-up',
        name: 'Financial Planning',
        description: 'Strategic financial planning and investment advice.'
    },
    {
        icon: 'scale',
        name: 'Insurance Services',
        description: 'Professional guidance on business and personal insurance.'
    },
    {
        icon: 'piggy-bank',
        name: 'Investment Advisory',
        description: 'Expert advice on investments and portfolio management.'
    }
];

// Populate services
const servicesGrid = document.getElementById('servicesGrid');

services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
        <i class="lucide-${service.icon}"></i>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <a href="#" class="service-link">Learn more →</a>
    `;
    servicesGrid.appendChild(serviceCard);
});