// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on login page or admin panel
    if (document.getElementById('loginForm')) {
        initLogin();
    } else {
        initAdminPanel();
    }
});

function initLogin() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Verify if user is admin
                const adminResponse = await fetch('/api/admin/verify', {
                    headers: {
                        'x-access-token': data.token
                    }
                });
                
                const adminData = await adminResponse.json();
                
                if (adminData.isAdmin) {
                    // Store token and redirect to admin panel
                    localStorage.setItem('adminToken', data.token);
                    window.location.href = '/admin';
                } else {
                    errorMessage.textContent = 'You do not have admin privileges';
                }
            } else {
                errorMessage.textContent = data.message || 'Login failed';
            }
        } catch (err) {
            errorMessage.textContent = 'An error occurred. Please try again.';
            console.error(err);
        }
    });
}

async function initAdminPanel() {
    const token = localStorage.getItem('adminToken');
    
    if (!token) {
        // Redirect to login if no token
        window.location.href = '/admin/login.html';
        return;
    }
    
    try {
        // Verify token and admin status
        const response = await fetch('/api/admin/verify', {
            headers: {
                'x-access-token': token
            }
        });
        
        if (response.ok) {
            // Show admin panel
            document.getElementById('adminPanel').style.display = 'block';
            
            // Load dashboard data
            loadDashboardData();
            
            // Set up navigation
            setupNavigation();
            
            // Set up logout
            document.getElementById('logoutBtn').addEventListener('click', logout);
        } else {
            showAccessDenied();
        }
    } catch (err) {
        console.error(err);
        showAccessDenied();
    }
}

function showAccessDenied() {
    document.getElementById('accessDenied').style.display = 'block';
}

async function loadDashboardData() {
    try {
        const token = localStorage.getItem('adminToken');
        
        // Load stats
        const statsResponse = await fetch('/api/admin/dashboard/stats', {
            headers: {
                'x-access-token': token
            }
        });
        
        if (statsResponse.ok) {
            const stats = await statsResponse.json();
            
            document.getElementById('totalProjects').textContent = stats.stats.projects.total;
            document.getElementById('ongoingProjects').textContent = stats.stats.projects.ongoing;
            document.getElementById('newContacts').textContent = stats.stats.contacts.new;
            document.getElementById('pendingTestimonials').textContent = 
                stats.stats.testimonials.total - stats.stats.testimonials.approved;
        }
        
        // Load projects for projects table
        const projectsResponse = await fetch('/api/projects', {
            headers: {
                'x-access-token': token
            }
        });
        
        if (projectsResponse.ok) {
            const projects = await projectsResponse.json();
            renderProjectsTable(projects);
        }
        
        // You would add similar calls for services, testimonials, contacts, etc.
        
    } catch (err) {
        console.error('Error loading dashboard data:', err);
    }
}

function renderProjectsTable(projects) {
    const tbody = document.querySelector('#projectsTable tbody');
    tbody.innerHTML = '';
    
    projects.forEach(project => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${project.title}</td>
            <td>${project.location}</td>
            <td><span class="status-badge ${project.status}">${project.status}</span></td>
            <td>${new Date(project.start_date).toLocaleDateString()}</td>
            <td>
                <button class="btn-edit" data-id="${project._id}">Edit</button>
                <button class="btn-delete" data-id="${project._id}">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => editProject(btn.dataset.id));
    });
    
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => deleteProject(btn.dataset.id));
    });
}

function setupNavigation() {
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.dataset.section + 'Section';
            
            // Hide all sections
            document.querySelectorAll('.admin-section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected section
            document.getElementById(sectionId).style.display = 'block';
        });
    });
}

function logout() {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login.html';
}

// Add more functions for project management, etc.