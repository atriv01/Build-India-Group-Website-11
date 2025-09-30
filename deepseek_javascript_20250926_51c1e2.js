// scripts/main.js
// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Language Pledge Switcher
const languageBtns = document.querySelectorAll('.language-btn');
const pledgeText = document.getElementById('pledgeText');

if (languageBtns.length > 0 && pledgeText) {
    // Sample pledge texts in different languages
    const pledges = {
        english: "I pledge to be a responsible citizen of India, to respect its constitution, to uphold its democratic values, and to contribute positively to its growth and development. I will work towards building an inclusive, harmonious, and prosperous nation for all.",
        hindi: "मैं भारत का एक जिम्मेदार नागरिक बनने की शपथ लेता हूं, इसके संविधान का सम्मान करने, इसके लोकतांत्रिक मूल्यों को बनाए रखने और इसके विकास में सकारात्मक योगदान देने की शपथ लेता हूं। मैं सभी के लिए एक समावेशी, सामंजस्यपूर्ण और समृद्ध राष्ट्र के निर्माण की दिशा में काम करूंगा।",
        bengali: "আমি শপথ নিচ্ছি যে আমি ভারতের একজন দায়িত্বশীল নাগরিক হব, এর সংবিধানের প্রতি শ্রদ্ধা রাখব, এর গণতান্ত্রিক মূল্যবোধকে সমুন্নত রাখব এবং এর বৃদ্ধি ও উন্নতিতে ইতিবাচক অবদান রাখব। আমি সকলের জন্য একটি অন্তর্ভুক্তিমূলক, সুষম ও সমৃদ্ধ জাতি গঠনের দিকে কাজ করব।",
        tamil: "நான் இந்தியாவின் பொறுப்பான குடிமகனாக இருப்பேன் என்று உறுதி எடுக்கிறேன், அதன் அரசியலமைப்பை மதிப்பேன், அதன் ஜனநாயக மதிப்புகளைப் பேணுவேன், அதன் வளர்ச்சிக்கும் முன்னேற்றத்திற்கும் நேர்மறையான பங்களிப்பைச் செய்வேன். அனைவருக்கும் உள்ளடக்கிய, ஒத்துழைப்பான மற்றும் செழிப்பான தேசத்தை உருவாக்கும் வழியில் நான் பணியாற்றுவேன்.",
        telugu: "నేను భారతదేశానికి జవాబుదారీతనంతో కూడిన పౌరుడిగా ఉంటానని ప్రతిజ్ఞ చేస్తున్నాను, దాని రాజ్యాంగాన్ని గౌరవిస్తాను, దాని ప్రజాస్వామ్య విలువలను కాపాడతాను మరియు దాని వృద్ధికి, అభివృద్ధికి సకారాత్మకంగా దోహదపడతాను. అన్ని వర్గాల ప్రజలకు చెందిన సమగ్ర, సామరస్యపూర్వక మరియు సంపన్నమైన దేశాన్ని నిర్మించే దిశగా నేను పని చేస్తాను."
    };

    languageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            languageBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Update pledge text
            const lang = btn.getAttribute('data-lang');
            pledgeText.textContent = pledges[lang] || pledges.english;
        });
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});