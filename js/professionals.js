// Professionals data
const professionals = [
    {
        name: 'Sarah Johnson',
        specialization: 'Tax Consulting & Compliance',
        experience: '15+ years',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
        rating: 4.9
    },
    {
        name: 'Michael Chen',
        specialization: 'Business Registration & Auditing',
        experience: '12+ years',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
        rating: 4.8
    },
    {
        name: 'Priya Patel',
        specialization: 'Financial Planning & Investment',
        experience: '10+ years',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
        rating: 4.9
    }
];

// Populate professionals
const professionalsGrid = document.getElementById('professionalsGrid');

professionals.forEach(professional => {
    const professionalCard = document.createElement('div');
    professionalCard.className = 'professional-card';
    
    const stars = '⭐'.repeat(Math.floor(professional.rating));
    
    professionalCard.innerHTML = `
        <div class="professional-header">
            <img src="${professional.image}" alt="${professional.name}">
            <div class="professional-info">
                <h3>${professional.name}</h3>
                <p class="specialization">${professional.specialization}</p>
            </div>
        </div>
        <div class="professional-details">
            <div class="detail">
                <span class="label">Experience</span>
                <span class="value">${professional.experience}</span>
            </div>
            <div class="detail">
                <span class="label">Rating</span>
                <span class="value">${stars} (${professional.rating}/5.0)</span>
            </div>
        </div>
        <div class="professional-actions">
            <button class="btn-primary">Book Consultation</button>
            <button class="btn-secondary">View Profile</button>
        </div>
    `;
    professionalsGrid.appendChild(professionalCard);
});