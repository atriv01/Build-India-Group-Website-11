// scripts/cms.js
// CMS Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cmsPanel = document.getElementById('cmsPanel');
    const cmsModal = document.getElementById('cmsModal');
    const cmsClose = document.getElementById('cmsClose');
    const cmsTabs = document.querySelectorAll('.cms-tab');
    const cmsTabContents = document.querySelectorAll('.cms-tab-content');
    const cmsSaveBtns = document.querySelectorAll('.cms-save-btn');

    // Check if CMS elements exist on the page
    if (!cmsPanel || !cmsModal) return;

    // Load saved content from localStorage
    function loadSavedContent() {
        const savedContent = localStorage.getItem('buildIndiaContent');
        if (savedContent) {
            const content = JSON.parse(savedContent);
            
            // Update form fields with saved content
            for (const key in content) {
                const field = document.getElementById(key);
                if (field) {
                    field.value = content[key];
                }
            }
            
            // Apply saved content to the page
            applyContentToPage(content);
        }
    }

    // Apply content to the page
    function applyContentToPage(content) {
        for (const key in content) {
            const element = document.getElementById(key);
            if (element) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    // This is a form field, skip applying content to it
                    continue;
                }
                element.textContent = content[key];
            }
        }
    }

    // Open CMS Modal
    cmsPanel.addEventListener('click', () => {
        cmsModal.style.display = 'block';
        loadSavedContent();
    });

    // Close CMS Modal
    cmsClose.addEventListener('click', () => {
        cmsModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cmsModal) {
            cmsModal.style.display = 'none';
        }
    });

    // Tab switching
    cmsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            cmsTabs.forEach(t => t.classList.remove('active'));
            cmsTabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Save CMS changes
    cmsSaveBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            let contentToSave = {};
            
            switch(section) {
                case 'hero':
                    contentToSave = {
                        'hero-title': document.getElementById('hero-title').value,
                        'hero-description': document.getElementById('hero-description').value,
                        'hero-bg': document.getElementById('hero-bg').value
                    };
                    break;
                case 'about':
                    contentToSave = {
                        'about-title': document.getElementById('about-title').value,
                        'about-description': document.getElementById('about-description').value,
                        'about-mission': document.getElementById('about-mission').value
                    };
                    break;
                case 'initiatives':
                    contentToSave = {
                        'initiatives-title': document.getElementById('initiatives-title').value,
                        'initiatives-description': document.getElementById('initiatives-description').value
                    };
                    break;
                case 'pledges':
                    contentToSave = {
                        'pledges-title': document.getElementById('pledges-title').value,
                        'pledges-description': document.getElementById('pledges-description').value
                    };
                    break;
                case 'contact':
                    contentToSave = {
                        'contact-address': document.getElementById('contact-address').value,
                        'contact-phone': document.getElementById('contact-phone').value,
                        'contact-email': document.getElementById('contact-email').value
                    };
                    break;
            }
            
            // Save to localStorage
            const existingContent = localStorage.getItem('buildIndiaContent');
            let allContent = existingContent ? JSON.parse(existingContent) : {};
            allContent = {...allContent, ...contentToSave};
            localStorage.setItem('buildIndiaContent', JSON.stringify(allContent));
            
            // Apply changes to the page
            applyContentToPage(contentToSave);
            
            alert('Changes saved successfully!');
        });
    });

    // Load any saved content when the page loads
    loadSavedContent();
});