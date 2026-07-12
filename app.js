// Kalanjali 2026 Cultural Festival Webapp Wireframe Logic (Updated with official Competition Items)

// Base Categories Definition
const DEFAULT_CATEGORIES = [
    { id: "C1", name: "Balolsavam (Below 9 Years)", description: "Competitions for children under 9 years of age." },
    { id: "C2", name: "General Competitions (9–25 Years)", description: "Standard literary and performing art events." },
    { id: "C3", name: "Group Competitions (Multi-tier)", description: "Group events divided by Below 15, 15–25, and Above 25." },
    { id: "C4", name: "Vanitholsavam (Female only)", description: "Subsection for women divided into 10–25 Years and Above 25." }
];

// Base Events Matrix (1 to 61) as per official schedule
const BASE_EVENTS = [
    // Standard events 1-11: General Literary (Age 9-25; Open to Boys & Girls; Duration: 1 Hour; Type: Literary)
    { id: 1, name: "Water Colour Painting", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 2, name: "Pencil Drawing", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 3, name: "Essay Writing (Malayalam)", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 4, name: "Essay Writing (English)", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 5, name: "Essay Writing (Tamil)", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 6, name: "Story Writing (Malayalam)", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 7, name: "Story Writing (English)", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 8, name: "Story Writing (Tamil)", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 9, name: "Poetry Writing (Malayalam)", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 10, name: "Poetry Writing (English)", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 11, name: "Poetry Writing (Tamil)", type: "Literary", isStandard: true, categoryId: "C2", duration: "1 Hour" },

    // Standard events 12-30: General Individual (Age 9-25; Open to Boys & Girls; Type: Individual)
    { id: 12, name: "Quiz", type: "Individual", isStandard: true, categoryId: "C2", duration: "As decided by the Judges" },
    { id: 13, name: "Bhagavad Gita Recitation", type: "Individual", isStandard: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 14, name: "Sloka Recitation", type: "Individual", isStandard: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 15, name: "Violin", type: "Individual", isStandard: true, categoryId: "C2", duration: "10 Minutes" },
    { id: 16, name: "Mridangam", type: "Individual", isStandard: true, categoryId: "C2", duration: "10 Minutes" },
    { id: 17, name: "Speech (Malayalam)", type: "Individual", isStandard: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 18, name: "Speech (English)", type: "Individual", isStandard: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 19, name: "Speech (Tamil)", type: "Individual", isStandard: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 20, name: "Poetry Recitation (Malayalam)", type: "Individual", isStandard: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 21, name: "Poetry Recitation (English)", type: "Individual", isStandard: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 22, name: "Poetry Recitation (Tamil)", type: "Individual", isStandard: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 23, name: "Veena", type: "Individual", isStandard: true, categoryId: "C2", duration: "10 Minutes" },
    { id: 24, name: "Flute", type: "Individual", isStandard: true, categoryId: "C2", duration: "10 Minutes" },
    { id: 25, name: "Keyboard", type: "Individual", isStandard: true, categoryId: "C2", duration: "10 Minutes" },
    { id: 26, name: "News Reading", type: "Individual", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 27, name: "Spot Photography", type: "Individual", isStandard: true, categoryId: "C2", duration: "2 Hours" },
    { id: 28, name: "Digital Poster Designing", type: "Individual", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 29, name: "PowerPoint Presentation", type: "Individual", isStandard: true, categoryId: "C2", duration: "1 Hour" },
    { id: 30, name: "Anchoring (Extempore Commentary)", type: "Individual", isStandard: true, categoryId: "C2", duration: "5 Minutes" },

    // Gender specific separate events 31-34 (Open to Boys & Girls but separate competitions)
    // Sub-Junior Boys: [id]A, Sub-Junior Girls: [id]A1
    // Junior Boys: [id]B, Junior Girls: [id]B1
    // Senior Boys: [id]C, Senior Girls: [id]C1
    { id: 31, name: "Classical Music", type: "Individual", isGenderSplit: true, categoryId: "C2", duration: "10 Minutes" },
    { id: 32, name: "Light Music", type: "Individual", isGenderSplit: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 33, name: "Folk Dance", type: "Individual", isGenderSplit: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 34, name: "Bharatanatyam", type: "Individual", isGenderSplit: true, categoryId: "C2", duration: "10 Minutes" },

    // Girls' Competitions 35-37 (Sub-Junior, Junior, Senior; Suffix A, B, C)
    { id: 35, name: "Mohiniyattam", type: "Individual", isFemaleOnly: true, categoryId: "C2", duration: "10 Minutes" },
    { id: 36, name: "Kuchipudi", type: "Individual", isFemaleOnly: true, categoryId: "C2", duration: "10 Minutes" },
    { id: 37, name: "Kolam Drawing", type: "Literary", isFemaleOnly: true, categoryId: "C2", duration: "1 Hour" },

    // Boys' Competitions 38-40 (Sub-Junior, Junior, Senior; Suffix A, B, C)
    { id: 38, name: "Mantra Chanting", type: "Individual", isMaleOnly: true, categoryId: "C2", duration: "5 Minutes" },
    { id: 39, name: "Ashtapadi", type: "Individual", isMaleOnly: true, categoryId: "C2", duration: "10 Minutes" },
    { id: 40, name: "Sopana Sangeetham", type: "Individual", isMaleOnly: true, categoryId: "C2", duration: "10 Minutes" },

    // Group Competitions 41-45 (Below 15 Years: A, 15-25 Years: B, Above 25 Years: C)
    { id: 41, name: "Group Song (5–7 members)", type: "Group", isGroupTiers: true, categoryId: "C3", duration: "10 Minutes" },
    { id: 42, name: "Mime (5–7 members)", type: "Group", isGroupTiers: true, categoryId: "C3", duration: "5 Minutes" },
    { id: 43, name: "Patriotic Song (5–7 members)", type: "Group", isGroupTiers: true, categoryId: "C3", duration: "5 Minutes" },
    { id: 44, name: "National Song (5–7 members)", type: "Group", isGroupTiers: true, categoryId: "C3", duration: "3 Minutes 10 Seconds" },
    { id: 45, name: "Bhajan (5–7 members)", type: "Group", isGroupTiers: true, categoryId: "C3", duration: "15 Minutes" },

    // Group Competitions 46 (Below 15 Years: A, 15-25 Years: B; No Above 25 Years)
    { id: 46, name: "Debate (2 participants from one district)", type: "Group", isGroup46: true, categoryId: "C3", duration: "2 Hours" },

    // Vanitholsavam 47-53 (Female only; 10-25 Years: A, Above 25 Years: B)
    { id: 47, name: "Group Dance (6–8 members)", type: "Group", isVanitha: true, categoryId: "C4", duration: "10 Minutes" },
    { id: 48, name: "Valayavanthapattu (6–8 members)", type: "Group", isVanitha: true, categoryId: "C4", duration: "10 Minutes" },
    { id: 49, name: "Kolattam (6–8 members)", type: "Group", isVanitha: true, categoryId: "C4", duration: "10 Minutes" },
    { id: 50, name: "Soundarya Lahari (7 members)", type: "Group", isVanitha: true, categoryId: "C4", duration: "10 Minutes" },
    { id: 51, name: "Narayaneeyam (5–7 members)", type: "Group", isVanitha: true, categoryId: "C4", duration: "10 Minutes" },
    { id: 52, name: "Cooking (3 members)", type: "Group", isVanitha: true, categoryId: "C4", duration: "1 Hour" },
    { id: 53, name: "Ashtapadi (5–7 members)", type: "Group", isVanitha: true, categoryId: "C4", duration: "10 Minutes" },

    // Vanitholsavam 54 (Above 25 Years only: Suffix 54)
    { id: 54, name: "Kolam Drawing", type: "Literary", isVanitha54: true, categoryId: "C4", duration: "1 Hour" },

    // Balolsavam 55-61 (Below 9 Years; Open to Boys & Girls; Suffix is the code itself)
    { id: 55, name: "Storytelling (Malayalam)", type: "Individual", isBalolsavam: true, categoryId: "C1", duration: "5 Minutes" },
    { id: 56, name: "Storytelling (English)", type: "Individual", isBalolsavam: true, categoryId: "C1", duration: "5 Minutes" },
    { id: 57, name: "Storytelling (Tamil)", type: "Individual", isBalolsavam: true, categoryId: "C1", duration: "5 Minutes" },
    { id: 58, name: "Riddle Competition", type: "Rachana", isBalolsavam: true, categoryId: "C1", duration: "5 Minutes" },
    { id: 59, name: "Action Song (Malayalam)", type: "Individual", isBalolsavam: true, categoryId: "C1", duration: "5 Minutes" },
    { id: 60, name: "Action Song (English)", type: "Individual", isBalolsavam: true, categoryId: "C1", duration: "5 Minutes" },
    { id: 61, name: "Light Music", type: "Individual", isBalolsavam: true, categoryId: "C1", duration: "5 Minutes" }
];

// Base Events Matrix (1 to 61) as per official schedule
BASE_EVENTS.forEach(be => {
    if (!be.description) {
        be.description = `Competition event for ${be.name} (${be.type} - Duration: ${be.duration}).`;
    }
});

// Helper to expand base events list into sub-events schedule based on official codes
function generateScheduledEvents() {
    const list = [];
    BASE_EVENTS.forEach(be => {
        const createObj = (suffix, nameText, genderVal, ageGroupVal) => {
            return {
                id: suffix ? `${be.id}${suffix}` : `${be.id}`,
                name: `${be.name}${nameText ? ' ' + nameText : ''}`,
                baseId: be.id,
                categoryId: be.categoryId,
                gender: genderVal,
                duration: be.duration,
                type: be.type,
                ageGroup: ageGroupVal,
                isCompleted: false,
                description: be.description
            };
        };

        if (be.isStandard) {
            list.push(createObj("A", "(Sub Junior, 9-13)", "NA", "Sub Junior (9-13)"));
            list.push(createObj("B", "(Junior, 13-18)", "NA", "Junior (13-18)"));
            list.push(createObj("C", "(Senior, 18-25)", "NA", "Senior (18-25)"));
        }
        else if (be.isGenderSplit) {
            list.push(createObj("A", "(Sub Junior Boys, 9-13)", "Male", "Sub Junior (9-13)"));
            list.push(createObj("A1", "(Sub Junior Girls, 9-13)", "Female", "Sub Junior (9-13)"));
            list.push(createObj("B", "(Junior Boys, 13-18)", "Male", "Junior (13-18)"));
            list.push(createObj("B1", "(Junior Girls, 13-18)", "Female", "Junior (13-18)"));
            list.push(createObj("C", "(Senior Boys, 18-25)", "Male", "Senior (18-25)"));
            list.push(createObj("C1", "(Senior Girls, 18-25)", "Female", "Senior (18-25)"));
        }
        else if (be.isFemaleOnly) {
            list.push(createObj("A", "(Sub Junior Girls, 9-13)", "Female", "Sub Junior (9-13)"));
            list.push(createObj("B", "(Junior Girls, 13-18)", "Female", "Junior (13-18)"));
            list.push(createObj("C", "(Senior Girls, 18-25)", "Female", "Senior (18-25)"));
        }
        else if (be.isMaleOnly) {
            list.push(createObj("A", "(Sub Junior Boys, 9-13)", "Male", "Sub Junior (9-13)"));
            list.push(createObj("B", "(Junior Boys, 13-18)", "Male", "Junior (13-18)"));
            list.push(createObj("C", "(Senior Boys, 18-25)", "Male", "Senior (18-25)"));
        }
        else if (be.isGroupTiers) {
            list.push(createObj("A", "(Below 15 Years)", "NA", "Below 15 Years"));
            list.push(createObj("B", "(15–25 Years)", "NA", "15–25 Years"));
            list.push(createObj("C", "(Above 25 Years)", "NA", "Above 25 Years"));
        }
        else if (be.isGroup46) {
            list.push(createObj("A", "(Below 15 Years)", "NA", "Below 15 Years"));
            list.push(createObj("B", "(15–25 Years)", "NA", "15–25 Years"));
        }
        else if (be.isVanitha) {
            list.push(createObj("A", "(10–25 Years)", "Female", "10–25 Years"));
            list.push(createObj("B", "(Above 25 Years)", "Female", "Above 25 Years"));
        }
        else if (be.isVanitha54) {
            list.push(createObj("", "(Above 25 Years)", "Female", "Above 25 Years"));
        }
        else if (be.isBalolsavam) {
            list.push(createObj("", "(Below 9 Years)", "NA", "Below 9 Years"));
        }
    });
    return list;
}

const GENERATED_EVENTS = generateScheduledEvents();

// Initial Mock Participants aligned to official codes
const DEFAULT_PARTICIPANTS = [
    { id: "P2026001", name: "Ananya N", gender: "Female", dob: "2009-05-12", age: 17, district: "Thiruvananthapuram", fatherName: "Rajesh N", motherName: "Sreedevi N", eventIds: ["1B", "31B1", "41B"], photo: "" },
    { id: "P2026002", name: "Gautham Krishna", gender: "Male", dob: "2008-01-15", age: 18, district: "Ernakulam", fatherName: "Unnikrishnan P", motherName: "Latha Krishna", eventIds: ["2C", "31C", "41B"], photo: "" },
    { id: "P2026003", name: "Meera J", gender: "Female", dob: "2012-02-15", age: 14, district: "Kozhikode", fatherName: "Mahesh J", motherName: "Mini J", eventIds: ["3B", "47A", "41A"], photo: "" },
    { id: "P2026004", name: "Siddharth Iyer", gender: "Male", dob: "2015-04-12", age: 11, district: "Thrissur", fatherName: "Hari Iyer", motherName: "Radha Iyer", eventIds: ["2A", "33A", "41A"], photo: "" },
    { id: "P2026005", name: "Ram P", gender: "Female", dob: "2017-09-12", age: 8, district: "Malappuram", fatherName: "Paramesh S", motherName: "Vidya", eventIds: ["55", "58", "61"], photo: "" },
    { id: "P2026006", name: "Aditya Varun", gender: "Male", dob: "1999-01-20", age: 27, district: "Thiruvananthapuram", fatherName: "Varun Surendra", motherName: "Lekha Varun", eventIds: ["41C", "43C"], photo: "" },
    { id: "P2026007", name: "Lekha M", gender: "Female", dob: "1998-03-12", age: 28, district: "Alappuzha", fatherName: "Madhusudhanan N", motherName: "Girija Devi", eventIds: ["47B", "54", "41C"], photo: "" }
];

const DEFAULT_SCORES = [
    { eventId: "1B", participantId: "P2026001", marks: 92, grade: "A" },
    { eventId: "3B", participantId: "P2026003", marks: 85, grade: "A" },
    { eventId: "31B1", participantId: "P2026001", marks: 95, grade: "A" },
    
    { eventId: "2C", participantId: "P2026002", marks: 90, grade: "A" },
    { eventId: "31C", participantId: "P2026002", marks: 94, grade: "A" },

    { eventId: "47A", participantId: "P2026003", marks: 91, grade: "A" },

    { eventId: "2A", participantId: "P2026004", marks: 88, grade: "A" },
    { eventId: "33A", participantId: "P2026004", marks: 82, grade: "B" },

    { eventId: "55", participantId: "P2026005", marks: 96, grade: "A" },
    { eventId: "61", participantId: "P2026005", marks: 89, grade: "A" },

    { eventId: "47B", participantId: "P2026007", marks: 93, grade: "A" },
    { eventId: "54", participantId: "P2026007", marks: 95, grade: "A" }
];

// Set initial completions based on initial scores
DEFAULT_SCORES.forEach(s => {
    const ev = GENERATED_EVENTS.find(e => e.id === s.eventId);
    if (ev) ev.isCompleted = true;
});

const DISTRICTS = [
    "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", 
    "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram", 
    "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
];

// App State Management
class AppState {
    constructor() {
        this.loadState();
    }

    loadState() {
        this.categories = JSON.parse(localStorage.getItem("k26_categories")) || DEFAULT_CATEGORIES;
        this.events = JSON.parse(localStorage.getItem("k26_events")) || GENERATED_EVENTS;
        this.participants = JSON.parse(localStorage.getItem("k26_participants")) || DEFAULT_PARTICIPANTS;
        this.scores = JSON.parse(localStorage.getItem("k26_scores")) || DEFAULT_SCORES;
        
        // Session State
        this.currentUser = JSON.parse(sessionStorage.getItem("k26_user")) || null;
        this.currentRole = sessionStorage.getItem("k26_role") || "System Admin";
    }

    saveState() {
        localStorage.setItem("k26_categories", JSON.stringify(this.categories));
        localStorage.setItem("k26_events", JSON.stringify(this.events));
        localStorage.setItem("k26_participants", JSON.stringify(this.participants));
        localStorage.setItem("k26_scores", JSON.stringify(this.scores));
    }

    resetState() {
        localStorage.removeItem("k26_categories");
        localStorage.removeItem("k26_events");
        localStorage.removeItem("k26_participants");
        localStorage.removeItem("k26_scores");
        this.loadState();
    }

    setRole(roleName) {
        this.currentRole = roleName;
        sessionStorage.setItem("k26_role", roleName);
        if (this.currentUser) {
            this.currentUser.role = roleName;
            sessionStorage.setItem("k26_user", JSON.stringify(this.currentUser));
        }
    }

    login(email, password) {
        let role = "System Admin";
        if (email.includes("state")) role = "State Coordinator";
        else if (email.includes("district")) role = "District Coordinator";
        
        this.currentUser = { email, role };
        this.currentRole = role;
        sessionStorage.setItem("k26_user", JSON.stringify(this.currentUser));
        sessionStorage.setItem("k26_role", role);
        return true;
    }

    logout() {
        this.currentUser = null;
        sessionStorage.removeItem("k26_user");
        sessionStorage.removeItem("k26_role");
    }

    getParticipant(id) {
        return this.participants.find(p => p.id === id);
    }

    getEvent(id) {
        return this.events.find(e => e.id === id);
    }

    getCategory(id) {
        return this.categories.find(c => c.id === id);
    }

    getScore(eventId, participantId) {
        return this.scores.find(s => s.eventId === eventId && s.participantId === participantId);
    }

    updateScore(eventId, participantId, marks, grade) {
        let score = this.getScore(eventId, participantId);
        if (score) {
            score.marks = parseInt(marks) || 0;
            score.grade = grade;
        } else {
            this.scores.push({ eventId, participantId, marks: parseInt(marks) || 0, grade });
        }
        this.saveState();
    }

    addParticipant(participantData) {
        const lastId = this.participants.reduce((max, p) => {
            const num = parseInt(p.id.replace("P2026", ""));
            return num > max ? num : max;
        }, 0);
        const newId = `P2026${String(lastId + 1).padStart(3, "0")}`;
        
        const newParticipant = {
            id: newId,
            ...participantData
        };
        this.participants.push(newParticipant);
        this.saveState();
        return newId;
    }

    updateParticipant(id, updatedData) {
        const index = this.participants.findIndex(p => p.id === id);
        if (index !== -1) {
            this.participants[index] = { ...this.participants[index], ...updatedData };
            this.saveState();
            return true;
        }
        return false;
    }
}

// Instantiate Global App State
const state = new AppState();

// Age Calculator helper (Age as of 01-06-2026)
function calculateAgeAsOfJune2026(dobString) {
    if (!dobString) return "";
    const dob = new Date(dobString);
    if (isNaN(dob.getTime())) return "";
    const refDate = new Date("2026-06-01");
    let age = refDate.getFullYear() - dob.getFullYear();
    const m = refDate.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && refDate.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

// Core Application UI Controller
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    setupAuthListeners();
    setupNavigation();
    setupSidebarToggle();
    setupRoleSelector();
    setupFilters();
    setupParticipantForms();
    setupScoringPage();
    setupWinnersPage();
    setupEventRegistrationAutocomplete();

    if (state.currentUser) {
        showAppShell();
    } else {
        showAuthScreen();
    }

    switchView("dashboard");
}

/* Authentication Screen Handler */
function showAuthScreen() {
    document.getElementById("authScreen").classList.remove("hidden");
    document.getElementById("appScreen").classList.add("blur");
}

function showAppShell() {
    document.getElementById("authScreen").classList.add("hidden");
    document.getElementById("appScreen").classList.remove("blur");
    updateSidebarUserBadge();
    updateRoleIndicator();
    renderDashboard();
    renderParticipantList();
}

function setupAuthListeners() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const pass = document.getElementById("loginPassword").value;
        
        if (email && pass) {
            state.login(email, pass);
            showAppShell();
        }
    });

    const togglePasswordBtn = document.getElementById("togglePasswordBtn");
    const loginPassword = document.getElementById("loginPassword");
    if (togglePasswordBtn && loginPassword) {
        togglePasswordBtn.addEventListener("click", () => {
            if (loginPassword.type === "password") {
                loginPassword.type = "text";
                togglePasswordBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`;
            } else {
                loginPassword.type = "password";
                togglePasswordBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg>`;
            }
        });
    }

    const prefillBtns = document.querySelectorAll(".prefill-btn");
    prefillBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const role = btn.dataset.role;
            let email = "admin@kalanjali.in";
            if (role === "state") email = "state_coord@kalanjali.in";
            if (role === "district") email = "ekm_district@kalanjali.in";
            
            document.getElementById("loginEmail").value = email;
            document.getElementById("loginPassword").value = "password123";
        });
    });

    document.getElementById("logoutBtn").addEventListener("click", (e) => {
        e.preventDefault();
        state.logout();
        showAuthScreen();
    });

    document.getElementById("resetDbBtn").addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to reset the database and state to initial defaults? All changes will be lost.")) {
            state.resetState();
            location.reload();
        }
    });
}

/* Sidebar & Navigation */
function setupNavigation() {
    const navItems = document.querySelectorAll(".nav-item[data-view]");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const viewId = item.dataset.view;
            switchView(viewId);
            
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");
        });
    });
}

function setupSidebarToggle() {
    const toggleBtn = document.getElementById("sidebarToggleBtn");
    const sidebar = document.querySelector(".sidebar");
    
    if (toggleBtn && sidebar) {
        // Restore collapsed state from localStorage
        const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";
        if (isCollapsed) {
            sidebar.classList.add("collapsed");
        }
        
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
            localStorage.setItem("sidebar-collapsed", sidebar.classList.contains("collapsed"));
        });
    }
}

function switchView(viewId) {
    const panels = document.querySelectorAll(".view-panel");
    panels.forEach(panel => panel.classList.remove("active"));
    
    const activePanel = document.getElementById(`view-${viewId}`);
    if (activePanel) {
        activePanel.classList.add("active");
    }

    if (viewId === "dashboard") {
        renderDashboard();
    } else if (viewId === "participants") {
        renderParticipantList();
    } else if (viewId === "add-participant") {
        resetAddParticipantForm();
        
        // Lock Add Participant page for District Coordinators
        const isAuthorized = state.currentRole === "System Admin" || state.currentRole === "State Coordinator";
        const submitBtn = document.getElementById("btnSubmitForm");
        const formInputs = document.querySelectorAll("#addParticipantForm input, #addParticipantForm select");
        const validationBanner = document.getElementById("formValidationError");
        
        if (!isAuthorized) {
            formInputs.forEach(input => input.disabled = true);
            submitBtn.style.display = "none";
            
            validationBanner.style.display = "block";
            validationBanner.style.backgroundColor = "#fffbeb";
            validationBanner.style.borderColor = "#d97706";
            validationBanner.style.color = "#92400e";
            validationBanner.querySelector("strong").innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle; margin-right:4px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Read-Only Mode:
            `;
            validationBanner.querySelector("ul").innerHTML = "<li>District Coordinators are not authorized to register or edit participant profiles.</li>";
        } else {
            formInputs.forEach(input => {
                if (input.id !== "formAge") input.disabled = false;
            });
            submitBtn.style.display = "block";
            validationBanner.style.display = "none";
            validationBanner.style.backgroundColor = "";
            validationBanner.style.borderColor = "";
            validationBanner.style.color = "";
            validationBanner.querySelector("strong").innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                Form Validation Errors:
            `;
        }
    } else if (viewId === "event-registration") {
        renderEventRegistration();
    } else if (viewId === "scoring") {
        renderScoringPage();
    } else if (viewId === "winners") {
        renderWinnersList();
    }

    const titles = {
        dashboard: "Leaderboard Standings (Wireframe)",
        participants: "Participation Master List",
        "add-participant": "Add Participant Profile",
        "event-registration": "State Level Event Registration",
        scoring: "Scoring Entry Panel",
        winners: "Winners Listing & Certificate Tool"
    };
    document.getElementById("headerTitle").textContent = titles[viewId] || "Kalanjali 2026";
}

function updateSidebarUserBadge() {
    if (state.currentUser) {
        document.getElementById("sideUserName").textContent = state.currentUser.email.split("@")[0].toUpperCase();
        document.getElementById("sideUserRole").textContent = state.currentRole;
        document.getElementById("sideUserAvatar").textContent = state.currentRole.split(" ").map(w => w[0]).join("");
    }
}

function updateRoleIndicator() {
    const indicator = document.getElementById("headerRoleIndicator");
    indicator.textContent = state.currentRole;
}

/* Floating Simulator Panel */
function setupRoleSelector() {
    const widget = document.getElementById("simulatorWidget");
    const toggleBtn = document.getElementById("simulatorToggleBtn");
    const menu = document.getElementById("simulatorMenu");

    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!widget.contains(e.target)) {
            menu.classList.remove("active");
        }
    });

    const roleItems = document.querySelectorAll(".role-select-item");
    roleItems.forEach(item => {
        item.addEventListener("click", () => {
            const role = item.dataset.role;
            state.setRole(role);
            
            roleItems.forEach(r => r.classList.remove("active"));
            item.classList.add("active");
            
            updateSidebarUserBadge();
            updateRoleIndicator();
            
            const activeNav = document.querySelector(".nav-item.active");
            if (activeNav) {
                switchView(activeNav.dataset.view);
            }
            
            menu.classList.remove("active");
        });
    });
}

/* --- VIEW 1: Dashboard / Scoreboard --- */
function renderDashboard() {
    document.getElementById("statTotalParticipants").textContent = state.participants.length;
    document.getElementById("statTotalEvents").textContent = state.events.length;
    const completedCount = state.events.filter(e => e.isCompleted).length;
    document.getElementById("statCompletedEvents").textContent = completedCount;

    const getPointsForGrade = (grade) => {
        if (grade === "A") return 5;
        if (grade === "B") return 3;
        if (grade === "C") return 1;
        return 0;
    };

    // Calculate District points
    const districtPoints = {};
    DISTRICTS.forEach(d => { districtPoints[d] = 0; });

    state.scores.forEach(score => {
        const participant = state.getParticipant(score.participantId);
        if (participant) {
            const pts = getPointsForGrade(score.grade);
            districtPoints[participant.district] += pts;
        }
    });

    const sortedDistricts = Object.keys(districtPoints)
        .map(d => ({ name: d, points: districtPoints[d] }))
        .sort((a, b) => b.points - a.points);

    const districtSelect = document.getElementById("boardDistrictSelect");
    const previousSelected = districtSelect.value;
    districtSelect.innerHTML = '<option value="all">All Districts</option>';
    DISTRICTS.forEach(d => {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        if (d === previousSelected) opt.selected = true;
        districtSelect.appendChild(opt);
    });

    const renderLeaderboardTable = (filterDistrict = "all") => {
        const tbody = document.getElementById("leaderboardTableBody");
        tbody.innerHTML = "";

        let rank = 1;
        sortedDistricts.forEach(item => {
            if (filterDistrict !== "all" && item.name !== filterDistrict) return;
            
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${rank}</strong></td>
                <td>${item.name}</td>
                <td><span style="font-weight:700;">${item.points} Pts</span></td>
            `;
            tbody.appendChild(tr);
            rank++;
        });
    };

    renderLeaderboardTable(previousSelected || "all");
    districtSelect.onchange = () => {
        renderLeaderboardTable(districtSelect.value);
    };

    // Kalathilakam (Best Female) & Kalaprathibha (Best Male)
    // Points accumulated from individual events only (Group events excluded)
    const participantPoints = {};
    state.participants.forEach(p => {
        participantPoints[p.id] = { id: p.id, name: p.name, gender: p.gender, district: p.district, points: 0 };
    });

    state.scores.forEach(score => {
        const event = state.getEvent(score.eventId);
        if (event && event.type === "Individual") {
            const pts = getPointsForGrade(score.grade);
            if (participantPoints[score.participantId]) {
                participantPoints[score.participantId].points += pts;
            }
        }
    });

    const candidates = Object.values(participantPoints);
    const females = candidates.filter(c => c.gender === "Female").sort((a,b) => b.points - a.points);
    const males = candidates.filter(c => c.gender === "Male").sort((a,b) => b.points - a.points);

    const femalePodiumIds = ["thila1", "thila2", "thila3"];
    femalePodiumIds.forEach((id, index) => {
        const elem = document.getElementById(id);
        const player = females[index];
        if (player && player.points > 0) {
            elem.style.opacity = 1;
            elem.querySelector(".podium-avatar").textContent = player.name.split(" ").map(n=>n[0]).join("");
            elem.querySelector(".podium-name").textContent = player.name;
            elem.querySelector(".podium-points").textContent = `${player.points} Pts (${player.district})`;
        } else {
            elem.style.opacity = 0.3;
            elem.querySelector(".podium-avatar").textContent = "-";
            elem.querySelector(".podium-name").textContent = "No Candidate";
            elem.querySelector(".podium-points").textContent = "0 Pts";
        }
    });

    const malePodiumIds = ["prathi1", "prathi2", "prathi3"];
    malePodiumIds.forEach((id, index) => {
        const elem = document.getElementById(id);
        const player = males[index];
        if (player && player.points > 0) {
            elem.style.opacity = 1;
            elem.querySelector(".podium-avatar").textContent = player.name.split(" ").map(n=>n[0]).join("");
            elem.querySelector(".podium-name").textContent = player.name;
            elem.querySelector(".podium-points").textContent = `${player.points} Pts (${player.district})`;
        } else {
            elem.style.opacity = 0.3;
            elem.querySelector(".podium-avatar").textContent = "-";
            elem.querySelector(".podium-name").textContent = "No Candidate";
            elem.querySelector(".podium-points").textContent = "0 Pts";
        }
    });
}

/* --- VIEW 2: Participation Master Listing --- */
let sortingField = "name";
let sortingOrder = "asc";

function setupFilters() {
    const catSelect = document.getElementById("filterCategory");
    catSelect.innerHTML = '<option value="">All Categories</option>';
    state.categories.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.id;
        opt.textContent = c.name;
        catSelect.appendChild(opt);
    });

    const distSelect = document.getElementById("filterDistrict");
    distSelect.innerHTML = '<option value="">All Districts</option>';
    DISTRICTS.forEach(d => {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        distSelect.appendChild(opt);
    });

    const eventSelect = document.getElementById("filterEvents");
    eventSelect.innerHTML = '<option value="">All Events</option>';
    
    // Sort events alphabetically by name to make searchable list look nice
    const sortedAllEvents = [...state.events].sort((a,b)=> a.name.localeCompare(b.name));
    sortedAllEvents.forEach(e => {
        const opt = document.createElement("option");
        opt.value = e.id;
        opt.textContent = `${e.name} (${e.id})`;
        eventSelect.appendChild(opt);
    });

    const triggerFilter = () => { renderParticipantList(); };
    document.getElementById("filterSearchName").addEventListener("input", triggerFilter);
    catSelect.addEventListener("change", triggerFilter);
    distSelect.addEventListener("change", triggerFilter);
    eventSelect.addEventListener("change", triggerFilter);

    document.getElementById("drawerCloseBtn").addEventListener("click", closeParticipantDetails);
    document.getElementById("drawerBackdrop").addEventListener("click", closeParticipantDetails);

    document.getElementById("drawerDeleteBtn").addEventListener("click", () => {
        if (activeDetailParticipantId) {
            deleteParticipant(activeDetailParticipantId);
        }
    });

    const thHeaders = document.querySelectorAll(".data-table th[data-sort]");
    thHeaders.forEach(th => {
        th.addEventListener("click", () => {
            const field = th.dataset.sort;
            if (sortingField === field) {
                sortingOrder = sortingOrder === "asc" ? "desc" : "asc";
            } else {
                sortingField = field;
                sortingOrder = "asc";
            }
            renderParticipantList();
        });
    });

    makeSelectSearchable("filterCategory", "Search Category...");
    makeSelectSearchable("filterDistrict", "Search District...");
    makeSelectSearchable("filterEvents", "Search Events...");
}

function renderParticipantList() {
    const searchName = document.getElementById("filterSearchName").value.toLowerCase();
    const filterCat = document.getElementById("filterCategory").value;
    const filterDist = document.getElementById("filterDistrict").value;
    const filterEv = document.getElementById("filterEvents").value;

    const tbody = document.getElementById("participantTableBody");
    tbody.innerHTML = "";

    let filteredList = state.participants.filter(p => {
        const matchesName = p.name.toLowerCase().includes(searchName) || p.id.toLowerCase().includes(searchName);
        const matchesDist = !filterDist || p.district === filterDist;
        const matchesEvent = !filterEv || p.eventIds.includes(filterEv);
        
        let matchesCategory = true;
        if (filterCat) {
            matchesCategory = p.eventIds.some(evId => {
                const evObj = state.getEvent(evId);
                return evObj && evObj.categoryId === filterCat;
            });
        }

        return matchesName && matchesDist && matchesEvent && matchesCategory;
    });

    // Sort
    filteredList.sort((a, b) => {
        let valA = a[sortingField];
        let valB = b[sortingField];

        if (sortingField === "category") {
            const evA = state.getEvent(a.eventIds[0]);
            const catA = evA ? state.getCategory(evA.categoryId) : null;
            valA = catA ? catA.name : "";

            const evB = state.getEvent(b.eventIds[0]);
            const catB = evB ? state.getCategory(evB.categoryId) : null;
            valB = catB ? catB.name : "";
        }

        if (typeof valA === "string") {
            return sortingOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else {
            return sortingOrder === "asc" ? valA - valB : valB - valA;
        }
    });

    if (filteredList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-secondary);padding:2rem;">No participants matched your search.</td></tr>';
        return;
    }

    filteredList.forEach(p => {
        const tr = document.createElement("tr");
        tr.onclick = () => { openParticipantDetails(p.id); };

        // Group categories registered
        const catMap = {};
        p.eventIds.forEach(evId => {
            const ev = state.getEvent(evId);
            if (ev) {
                const cat = state.getCategory(ev.categoryId);
                if (cat) catMap[cat.name] = true;
            }
        });
        const categoriesTags = Object.keys(catMap).map(name => `<span class="event-tag">${name}</span>`).join(" ");

        // Grab first category
        const firstEv = state.getEvent(p.eventIds[0]);
        const firstCat = firstEv ? state.getCategory(firstEv.categoryId) : null;
        const catName = firstCat ? firstCat.name : "N/A";

        // Event names list
        const eventNamesList = p.eventIds.map(evId => {
            const ev = state.getEvent(evId);
            return ev ? ev.name : evId;
        }).join(", ");

        tr.innerHTML = `
            <td><strong style="color:var(--text-primary)">${p.id}</strong></td>
            <td><strong>${p.name}</strong></td>
            <td>${p.age}</td>
            <td>${new Date(p.dob).toLocaleDateString()}</td>
            <td>${p.district}</td>
            <td><span style="font-size:0.75rem;background:var(--bg-secondary);padding:0.15rem 0.4rem;border-radius:4px;font-weight:600;">${catName}</span></td>
            <td><div style="font-size:0.8rem; font-weight:600; color:var(--text-secondary); max-width:200px; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;" title="${eventNamesList}">${eventNamesList}</div></td>
            <td><div class="tag-list">${categoriesTags}</div></td>
        `;
        tbody.appendChild(tr);
    });
}

/* Participant Detail Drawer & Delete Actions */
let activeDetailParticipantId = null;

function openParticipantDetails(id) {
    activeDetailParticipantId = id;
    const p = state.getParticipant(id);
    if (!p) return;

    document.getElementById("detailId").textContent = p.id;
    document.getElementById("detailName").textContent = p.name;
    document.getElementById("detailDistrict").textContent = p.district;
    document.getElementById("detailDOB").textContent = new Date(p.dob).toLocaleDateString();
    document.getElementById("detailAge").textContent = p.age;
    document.getElementById("detailFather").textContent = p.fatherName;
    document.getElementById("detailMother").textContent = p.motherName;
    
    const avatar = document.getElementById("detailAvatar");
    avatar.innerHTML = "";
    if (p.photo) {
        const img = document.createElement("img");
        img.src = p.photo;
        avatar.appendChild(img);
    } else {
        const div = document.createElement("div");
        div.className = "drawer-avatar-text";
        div.textContent = p.name.split(" ").map(n=>n[0]).join("");
        avatar.appendChild(div);
    }

    const eventsListDiv = document.getElementById("detailEventsList");
    eventsListDiv.innerHTML = "";
    p.eventIds.forEach(evId => {
        const ev = state.getEvent(evId);
        if (ev) {
            const scoreObj = state.getScore(evId, p.id);
            const scoreText = scoreObj ? `<span class="grade-badge ${scoreObj.grade}">Score: ${scoreObj.marks} (${scoreObj.grade})</span>` : '<span style="font-size:0.7rem;color:var(--text-muted)">No Score Posted</span>';
            
            const div = document.createElement("div");
            div.style = "padding:0.5rem 0.75rem; border-radius:4px; background:var(--bg-primary); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;";
            div.innerHTML = `
                <div style="flex:1;">
                    <div style="font-size:0.8rem; font-weight:700;">${ev.name} [Code: ${ev.id}]</div>
                    <div style="font-size:0.7rem; color:var(--text-secondary)">Type: ${ev.type} | Group: ${ev.ageGroup}</div>
                    <div style="font-size:0.65rem; color:var(--text-muted); font-style:italic; margin-top:0.2rem;">Description: ${ev.description || "No description"}</div>
                </div>
                <div style="margin-left:0.5rem;">
                    ${scoreText}
                </div>
            `;
            eventsListDiv.appendChild(div);
        }
    });

    const editBtn = document.getElementById("drawerEditBtn");
    const deleteBtn = document.getElementById("drawerDeleteBtn");
    const warningBanner = document.getElementById("drawerPermissionWarning");

    const isAuthorized = state.currentRole === "System Admin" || state.currentRole === "State Coordinator";

    if (!isAuthorized) {
        editBtn.disabled = true;
        deleteBtn.disabled = true;
        editBtn.title = "District Coordinators cannot edit participants";
        deleteBtn.title = "District Coordinators cannot delete participants";
        warningBanner.style.display = "flex";
        warningBanner.querySelector("span").textContent = "Read-Only: Your role is restricted from editing or deleting participant data.";
    } else {
        editBtn.disabled = false;
        deleteBtn.disabled = false;
        editBtn.title = "";
        deleteBtn.title = "";
        warningBanner.style.display = "none";
    }

    document.getElementById("drawerBackdrop").classList.add("active");
    document.getElementById("detailDrawer").classList.add("active");
}

function closeParticipantDetails() {
    document.getElementById("drawerBackdrop").classList.remove("active");
    document.getElementById("detailDrawer").classList.remove("active");
    activeDetailParticipantId = null;
}

function triggerEditFromDrawer() {
    if (!activeDetailParticipantId) return;
    closeParticipantDetails();
    switchView("add-participant");
    prepopulateEditForm(activeDetailParticipantId);
}

document.getElementById("drawerEditBtn").onclick = triggerEditFromDrawer;

function deleteParticipant(id) {
    if (state.currentRole !== "System Admin" && state.currentRole !== "State Coordinator") {
        alert("Permission denied! Only Admins and State Coordinators can delete records.");
        return;
    }

    if (confirm(`Are you sure you want to permanently delete Participant ${id}? This action will purge all registered events and scores.`)) {
        state.scores = state.scores.filter(s => s.participantId !== id);
        state.participants = state.participants.filter(p => p.id !== id);
        state.saveState();
        
        closeParticipantDetails();
        renderParticipantList();
        renderDashboard();
        alert(`Participant ${id} was deleted successfully.`);
    }
}

/* --- VIEW 3: Add / Edit Participant Form --- */
let isEditingParticipant = false;
let editingParticipantId = null;
let uploadedPhotoBase64 = "";

function setupParticipantForms() {
    const formDist = document.getElementById("formDistrict");
    formDist.innerHTML = '<option value="" disabled selected>Select District</option>';
    DISTRICTS.forEach(d => {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        formDist.appendChild(opt);
    });

    const dobInput = document.getElementById("formDOB");
    const genderSelect = document.getElementById("formGender");
    
    const onBioDataChange = () => {
        const dob = dobInput.value;
        const age = calculateAgeAsOfJune2026(dob);
        document.getElementById("formAge").value = age;
        
        renderFormEventPickerOnDemand(age, genderSelect.value);
    };

    dobInput.addEventListener("change", onBioDataChange);
    genderSelect.addEventListener("change", onBioDataChange);

    const photoInput = document.getElementById("formPhoto");
    const photoPreview = document.getElementById("formPhotoPreview");

    photoInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.type !== "image/jpeg") {
            alert("Invalid file format! Only JPEG photos are allowed.");
            photoInput.value = "";
            photoPreview.innerHTML = '<span style="color:var(--text-muted);font-size:0.65rem;">80x80</span>';
            uploadedPhotoBase64 = "";
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("File is too large! Maximum allowed size is 5 MB.");
            photoInput.value = "";
            photoPreview.innerHTML = '<span style="color:var(--text-muted);font-size:0.65rem;">80x80</span>';
            uploadedPhotoBase64 = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            uploadedPhotoBase64 = event.target.result;
            photoPreview.innerHTML = `<img src="${uploadedPhotoBase64}" style="width:100%; height:100%; object-fit:cover;">`;
        };
        reader.readAsDataURL(file);
    });

    const form = document.getElementById("addParticipantForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        saveParticipant();
    });

    document.getElementById("btnCancelForm").addEventListener("click", () => {
        switchView("participants");
    });
}

function renderFormEventPickerOnDemand(age, gender, selectedEventIds = []) {
    const picker = document.getElementById("formEventPicker");
    const notice = document.getElementById("formEventPickerNotice");

    if (age === "" || isNaN(age) || !gender) {
        picker.style.display = "none";
        notice.style.display = "block";
        notice.textContent = "Please enter Date of Birth and Gender to load eligible competition events.";
        return;
    }

    const eligibleEvents = getEligibleEventsForParticipant(age, gender);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Eligible Events:", eligibleEvents);
    notice.style.display = "none";
    picker.style.display = "block";
    picker.innerHTML = "";

    if (eligibleEvents.length === 0) {
        picker.innerHTML = `<div style="padding:1rem; text-align:center; color:#b91c1c; font-weight:600; font-size:0.8rem;">
            No eligible events found for a ${age} year old ${gender} participant.
        </div>`;
        return;
    }

    state.categories.forEach(cat => {
        const catEvents = eligibleEvents.filter(ev => ev.categoryId === cat.id);
        if (catEvents.length === 0) return;

        const titleDiv = document.createElement("div");
        titleDiv.className = "event-picker-group-title";
        titleDiv.textContent = `${cat.name} (${catEvents.length} eligible)`;
        picker.appendChild(titleDiv);

        // Sort cat events by their ID numerically/alphanumerically to look structured
        const sortedCatEvents = [...catEvents].sort((a,b) => {
            const numA = parseInt(a.id);
            const numB = parseInt(b.id);
            if (numA !== numB) return numA - numB;
            return a.id.localeCompare(b.id);
        });

        sortedCatEvents.forEach(ev => {
            const isChecked = selectedEventIds.includes(ev.id);
            const label = document.createElement("label");
            label.className = "event-picker-item";
            label.innerHTML = `
                <input type="checkbox" name="formEvents" value="${ev.id}" data-id="${ev.id}" ${isChecked ? 'checked' : ''}>
                <span><strong>[Code ${ev.id}]</strong> ${ev.name} &mdash; <span style="font-size:0.75rem; color:var(--text-secondary);">${ev.type} (${ev.duration})</span></span>
            `;
            picker.appendChild(label);
        });
    });
}

// Logic to determine eligible sub-events based on official rules
function getEligibleEventsForParticipant(age, gender) {
    if (age === "" || isNaN(age)) return [];
    
    const eligible = [];
    
    state.events.forEach(ev => {
        const be = BASE_EVENTS.find(b => b.id === ev.baseId);
        if (!be) return;

        // Balolsavam Rules: Under 9 yrs only. (Base events 55-61)
        if (be.isBalolsavam) {
            if (age < 9) {
                eligible.push(ev);
            }
            return;
        }

        // Under 9 can ONLY enroll in Balolsavam
        if (age < 9) {
            return;
        }

        // Standard 1-30, Split 31-34, Female 35-37, Male 38-40
        if (be.isStandard || be.isGenderSplit || be.isFemaleOnly || be.isMaleOnly) {
            let expectedAgeGroup = "";
            if (age >= 9 && age <= 13) expectedAgeGroup = "Sub Junior (9-13)";
            else if (age > 13 && age <= 18) expectedAgeGroup = "Junior (13-18)";
            else if (age > 18 && age <= 25) expectedAgeGroup = "Senior (18-25)";
            
            if (ev.ageGroup !== expectedAgeGroup) return; // age category mismatch
            if (ev.gender !== "NA" && ev.gender !== gender) return; // gender mismatch
            
            eligible.push(ev);
        }

        // Group Tiers 41-45 (Below 15, 15-25, Above 25)
        if (be.isGroupTiers) {
            let expectedAgeGroup = "";
            if (age < 15) expectedAgeGroup = "Below 15 Years";
            else if (age >= 15 && age <= 25) expectedAgeGroup = "15–25 Years";
            else if (age > 25) expectedAgeGroup = "Above 25 Years";

            if (ev.ageGroup === expectedAgeGroup) {
                eligible.push(ev);
            }
        }

        // Group 46 (Debate: Below 15, 15-25 only; No Above 25)
        if (be.isGroup46) {
            let expectedAgeGroup = "";
            if (age < 15) expectedAgeGroup = "Below 15 Years";
            else if (age >= 15 && age <= 25) expectedAgeGroup = "15–25 Years";

            if (ev.ageGroup === expectedAgeGroup) {
                eligible.push(ev);
            }
        }

        // Vanitholsavam 47-53 (Female only; 10-25 yrs, Above 25)
        if (be.isVanitha) {
            if (gender !== "Female") return;
            let expectedAgeGroup = "";
            if (age >= 10 && age <= 25) expectedAgeGroup = "10–25 Years";
            else if (age > 25) expectedAgeGroup = "Above 25 Years";

            if (ev.ageGroup === expectedAgeGroup) {
                eligible.push(ev);
            }
        }

        // Vanitholsavam 54 (Female only, Above 25 only)
        if (be.isVanitha54) {
            if (gender !== "Female") return;
            if (age > 25 && ev.ageGroup === "Above 25 Years") {
                eligible.push(ev);
            }
        }
    });

    return eligible;
}

function resetAddParticipantForm() {
    isEditingParticipant = false;
    editingParticipantId = null;
    uploadedPhotoBase64 = "";
    document.getElementById("formViewTitle").textContent = "Register New Participant";
    document.getElementById("btnSubmitForm").textContent = "Save Registration";
    document.getElementById("addParticipantForm").reset();
    document.getElementById("formPhotoPreview").innerHTML = '<span style="color:var(--text-muted);font-size:0.65rem;">80x80</span>';
    
    document.getElementById("formValidationError").style.display = "none";
    document.getElementById("formSuccessBanner").style.display = "none";
    
    document.getElementById("formEventPicker").style.display = "none";
    document.getElementById("formEventPickerNotice").style.display = "block";
    document.getElementById("formEventPickerNotice").textContent = "Please enter DOB and Gender to load eligible competition events.";
}

function prepopulateEditForm(id) {
    resetAddParticipantForm();
    const p = state.getParticipant(id);
    if (!p) return;

    isEditingParticipant = true;
    editingParticipantId = id;
    
    document.getElementById("headerTitle").textContent = "Edit Participant Profile";
    document.getElementById("formViewTitle").textContent = `Edit Participant Profile (${p.id})`;
    document.getElementById("btnSubmitForm").textContent = "Update Profile";
    document.getElementById("formName").value = p.name;
    document.getElementById("formDOB").value = p.dob;
    document.getElementById("formAge").value = p.age;
    document.getElementById("formGender").value = p.gender;
    document.getElementById("formDistrict").value = p.district;
    document.getElementById("formFather").value = p.fatherName;
    document.getElementById("formMother").value = p.motherName;

    if (p.photo) {
        document.getElementById("formPhotoPreview").innerHTML = `<img src="${p.photo}" style="width:100%; height:100%; object-fit:cover;">`;
        uploadedPhotoBase64 = p.photo;
    } else {
        uploadedPhotoBase64 = "";
    }

    renderFormEventPickerOnDemand(p.age, p.gender, p.eventIds);
    
    const isAuthorized = state.currentRole === "System Admin" || state.currentRole === "State Coordinator";
    if (!isAuthorized) {
        const formInputs = document.querySelectorAll("#addParticipantForm input, #addParticipantForm select");
        formInputs.forEach(input => input.disabled = true);
        document.getElementById("btnSubmitForm").style.display = "none";
    }
}

function saveParticipant() {
    if (state.currentRole !== "System Admin" && state.currentRole !== "State Coordinator") {
        alert("Permission denied! Your Coordinator role does not have authorization to add or edit participant data.");
        return;
    }

    const name = document.getElementById("formName").value.trim();
    const dob = document.getElementById("formDOB").value;
    const age = calculateAgeAsOfJune2026(dob);
    const gender = document.getElementById("formGender").value;
    const district = document.getElementById("formDistrict").value;
    const fatherName = document.getElementById("formFather").value.trim();
    const motherName = document.getElementById("formMother").value.trim();
    
    const checkboxes = document.querySelectorAll('input[name="formEvents"]:checked');
    const eventIds = Array.from(checkboxes).map(cb => cb.value);

    // Validation
    const errors = [];
    if (!name) errors.push("Participant Name is required.");
    if (!dob) errors.push("Date of Birth is required.");
    if (age === "" || isNaN(age)) errors.push("Could not calculate Age from DOB.");
    if (!gender) errors.push("Gender is required.");
    if (!district) errors.push("District selection is required.");
    if (!fatherName) errors.push("Father's Name is required.");
    if (!motherName) errors.push("Mother's Name is required.");
    if (!uploadedPhotoBase64) errors.push("Photo upload (JPEG, Max 5MB) is required.");
    if (eventIds.length === 0) errors.push("Please enroll the participant in at least one competition event.");

    // Max counts validations (Standard rules)
    let litCount = 0;
    let grpCount = 0;
    let indCount = 0;

    eventIds.forEach(evId => {
        const ev = state.getEvent(evId);
        if (ev) {
            if (ev.type === "Literary") litCount++;
            else if (ev.type === "Group") grpCount++;
            else if (ev.type === "Individual") indCount++;
        }
    });

    if (litCount > 3) errors.push(`Exceeded limits: Registered for ${litCount} Literary events (Maximum: 3)`);
    if (grpCount > 3) errors.push(`Exceeded limits: Registered for ${grpCount} Group events (Maximum: 3)`);
    if (indCount > 5) errors.push(`Exceeded limits: Registered for ${indCount} Individual events (Maximum: 5)`);

    const errorDiv = document.getElementById("formValidationError");
    const successBanner = document.getElementById("formSuccessBanner");

    if (errors.length > 0) {
        errorDiv.style.display = "block";
        const list = errorDiv.querySelector("ul");
        list.innerHTML = errors.map(err => `<li>${err}</li>`).join("");
        successBanner.style.display = "none";
        document.getElementById("view-add-participant").scrollIntoView({ behavior: 'smooth' });
        return;
    }

    errorDiv.style.display = "none";

    const participantData = {
        name,
        dob,
        age,
        gender,
        district,
        fatherName,
        motherName,
        eventIds,
        photo: uploadedPhotoBase64
    };

    let pId = "";
    if (isEditingParticipant) {
        state.updateParticipant(editingParticipantId, participantData);
        pId = editingParticipantId;
    } else {
        pId = state.addParticipant(participantData);
    }

    successBanner.style.display = "block";
    successBanner.textContent = isEditingParticipant 
        ? `Participant profile ${pId} (${name}) updated successfully.`
        : `Participant registered successfully with ID ${pId} (${name}).`;
    
    const submitBtn = document.getElementById("btnSubmitForm");
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.disabled = false;
        switchView("participants");
    }, 1200);
}

/* --- VIEW 3x: Selection Page --- */

function renderDistrictEntry(){
    populateDistrictDropdown();
    populateDistrictEventDropdown();
    document.getElementById("districtShortlistArea").innerHTML="";
}

function populateDistrictDropdown(){
    const select=document.getElementById("districtSelect");
    select.innerHTML='<option value="">Choose District</option>';
    DISTRICTS.forEach(d=>{
        select.innerHTML+=`
        <option value="${d}">
            ${d}
        </option>
        `;
    });
}

function populateDistrictEventDropdown(){
    const select=document.getElementById("districtEventSelect");
    select.innerHTML='<option value="">Choose Event</option>';
    state.events.forEach(ev=>{
        select.innerHTML+=`
        <option value="${ev.id}">
            ${ev.id} - ${ev.name}
        </option>
        `;
    });
}

/* --- VIEW 4: Scoring Page --- */
function setupScoringPage() {
    const eventSelect = document.getElementById("scoreEventSelect");
    eventSelect.innerHTML = '<option value="" disabled selected>-- Select an Event competition to score --</option>';
    
    // Sort events by name
    const sortedEvents = [...state.events].sort((a,b) => {
        const numA = parseInt(a.id);
        const numB = parseInt(b.id);
        if (numA !== numB) return numA - numB;
        return a.id.localeCompare(b.id);
    });

    sortedEvents.forEach(e => {
        const opt = document.createElement("option");
        opt.value = e.id;
        opt.textContent = `${e.name} [Code: ${e.id}]`;
        eventSelect.appendChild(opt);
    });

    eventSelect.addEventListener("change", () => {
        renderScoringList(eventSelect.value);
    });

    makeSelectSearchable("scoreEventSelect", "Search Event...");
}

function renderScoringPage() {
    const sel = document.getElementById("scoreEventSelect");
    renderScoringList(sel.value || "");
}

function renderScoringList(eventId) {
    const tableContainer = document.getElementById("scoringTableContainer");
    const warning = document.getElementById("scorePermissionWarning");
    const saveBtn = document.getElementById("btnSaveScores");

    if (!eventId) {
        tableContainer.innerHTML = '<div style="padding:3rem; text-align:center; color:var(--text-muted);">Please select a competition event from the dropdown to load participants list.</div>';
        saveBtn.style.display = "none";
        warning.style.display = "none";
        return;
    }

    const eventObj = state.getEvent(eventId);
    if (!eventObj) return;

    const isAllowedToScore = state.currentRole === "System Admin" || state.currentRole === "State Coordinator";
    
    if (isAllowedToScore) {
        warning.style.display = "none";
        saveBtn.disabled = false;
    } else {
        warning.style.display = "flex";
        warning.querySelector("span").textContent = "Read-Only: Your Coordinator role does not have authorization to modify marks and grades.";
        saveBtn.disabled = true;
    }

    saveBtn.style.display = "flex";

    const participantsForEvent = state.participants.filter(p => p.eventIds.includes(eventId));

    if (participantsForEvent.length === 0) {
        tableContainer.innerHTML = '<div style="padding:3rem; text-align:center; color:var(--text-secondary); font-weight:600;">No participants have registered for this specific event code yet.</div>';
        saveBtn.style.display = "none";
        return;
    }

    let tableHtml = `
        <table class="data-table scoring-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Participant Name</th>
                    <th>District</th>
                    <th>Marks (0-100)</th>
                    <th>Grade Awarded</th>
                </tr>
            </thead>
            <tbody>
    `;

    participantsForEvent.forEach(p => {
        const score = state.getScore(eventId, p.id);
        const marksVal = score ? score.marks : "";
        const gradeVal = score ? score.grade : "";

        tableHtml += `
            <tr data-p-id="${p.id}">
                <td><strong style="color:var(--text-primary)">${p.id}</strong></td>
                <td><strong>${p.name}</strong></td>
                <td>${p.district}</td>
                <td>
                    <input type="number" min="0" max="100" class="input-field score-marks-input" 
                        value="${marksVal}" ${!isAllowedToScore ? 'disabled' : ''} placeholder="0-100">
                </td>
                <td>
                    <select class="input-field score-grade-select" ${!isAllowedToScore ? 'disabled' : ''}>
                        <option value="" ${gradeVal === '' ? 'selected' : ''}>-</option>
                        <option value="A" ${gradeVal === 'A' ? 'selected' : ''}>A</option>
                        <option value="B" ${gradeVal === 'B' ? 'selected' : ''}>B</option>
                        <option value="C" ${gradeVal === 'C' ? 'selected' : ''}>C</option>
                        <option value="D" ${gradeVal === 'D' ? 'selected' : ''}>D</option>
                    </select>
                </td>
            </tr>
        `;
    });

    tableHtml += `
            </tbody>
        </table>
    `;

    tableContainer.innerHTML = tableHtml;

    saveBtn.onclick = () => {
        if (!isAllowedToScore) return;

        const rows = tableContainer.querySelectorAll("tbody tr");
        let hasErrors = false;

        rows.forEach(row => {
            const pId = row.dataset.pId;
            const marksInput = row.querySelector(".score-marks-input");
            const gradeSelect = row.querySelector(".score-grade-select");

            const marks = parseInt(marksInput.value);
            const grade = gradeSelect.value;

            if (marksInput.value.trim() !== "") {
                if (isNaN(marks) || marks < 0 || marks > 100) {
                    alert(`Error: Marks for participant ${pId} must be between 0 and 100.`);
                    hasErrors = true;
                    return;
                }
                if (!grade) {
                    alert(`Error: Grade must be assigned if marks are entered for ${pId}.`);
                    hasErrors = true;
                    return;
                }

                state.updateScore(eventId, pId, marks, grade);
            }
        });

        if (!hasErrors) {
            const eventIndex = state.events.findIndex(e => e.id === eventId);
            if (eventIndex !== -1) {
                state.events[eventIndex].isCompleted = true;
                state.saveState();
            }

            alert("Scores recorded and saved successfully!");
            renderScoringList(eventId);
        }
    };
}

/* --- VIEW 5: Winners & Certificates Page --- */
function setupWinnersPage() {
    const distSelect = document.getElementById("winFilterDistrict");
    distSelect.innerHTML = '<option value="">All Districts</option>';
    DISTRICTS.forEach(d => {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        distSelect.appendChild(opt);
    });

    const eventSelect = document.getElementById("winFilterEvent");
    eventSelect.innerHTML = '<option value="">All Events</option>';
    const sortedEvents = [...state.events].sort((a,b)=>a.name.localeCompare(b.name));
    sortedEvents.forEach(e => {
        const opt = document.createElement("option");
        opt.value = e.id;
        opt.textContent = `${e.name} [Code: ${e.id}]`;
        eventSelect.appendChild(opt);
    });

    const catSelect = document.getElementById("winFilterCategory");
    catSelect.innerHTML = '<option value="">All Categories</option>';
    state.categories.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.id;
        opt.textContent = c.name;
        catSelect.appendChild(opt);
    });

    const triggerFilter = () => { renderWinnersList(); };
    document.getElementById("winSearchId").addEventListener("input", triggerFilter);
    distSelect.addEventListener("change", triggerFilter);
    eventSelect.addEventListener("change", triggerFilter);
    catSelect.addEventListener("change", triggerFilter);

    document.getElementById("certCloseBtn").onclick = closeCertificateModal;
    document.getElementById("btnPrintCert").onclick = () => { window.print(); };

    makeSelectSearchable("winFilterCategory", "Search Category...");
    makeSelectSearchable("winFilterDistrict", "Search District...");
    makeSelectSearchable("winFilterEvent", "Search Event...");
}

function renderWinnersList() {
    const searchId = document.getElementById("winSearchId").value.trim().toLowerCase();
    const filterDist = document.getElementById("winFilterDistrict").value;
    const filterEv = document.getElementById("winFilterEvent").value;
    const filterCat = document.getElementById("winFilterCategory").value;

    const tbody = document.getElementById("winnersTableBody");
    tbody.innerHTML = "";

    const completedEvents = state.events.filter(e => e.isCompleted);
    let winnersList = [];

    completedEvents.forEach(ev => {
        const scoresForEvent = state.scores.filter(s => s.eventId === ev.id);
        if (scoresForEvent.length === 0) return;

        const sortedScores = [...scoresForEvent].sort((a, b) => b.marks - a.marks);
        const topMark = sortedScores[0].marks;

        const eventWinners = sortedScores.filter(s => s.marks === topMark);

        eventWinners.forEach(wScore => {
            const participant = state.getParticipant(wScore.participantId);
            if (participant) {
                const category = state.getCategory(ev.categoryId);
                
                winnersList.push({
                    participantId: participant.id,
                    name: participant.name,
                    district: participant.district,
                    eventId: ev.id,
                    eventName: ev.name,
                    categoryName: category ? category.name : "N/A",
                    categoryId: category ? category.id : "",
                    marks: wScore.marks,
                    grade: wScore.grade
                });
            }
        });
    });

    let filteredWinners = winnersList.filter(win => {
        const matchesId = !searchId || win.participantId.toLowerCase().includes(searchId) || win.name.toLowerCase().includes(searchId);
        const matchesDist = !filterDist || win.district === filterDist;
        const matchesEvent = !filterEv || win.eventId === filterEv;
        const matchesCategory = !filterCat || win.categoryId === filterCat;

        return matchesId && matchesDist && matchesEvent && matchesCategory;
    });

    if (filteredWinners.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-secondary);padding:2rem;">No winners recorded for the selected search filters.</td></tr>';
        return;
    }

    filteredWinners.forEach(win => {
        const tr = document.createElement("tr");
        
        tr.innerHTML = `
            <td><strong style="color:var(--text-primary)">${win.participantId}</strong></td>
            <td><strong>${win.name}</strong></td>
            <td>${win.district}</td>
            <td>${win.eventName} [Code: ${win.eventId}]</td>
            <td><span style="font-size:0.75rem;background:var(--bg-secondary);padding:0.15rem 0.4rem;border-radius:4px;font-weight:600;">${win.categoryName}</span></td>
            <td><span class="grade-badge ${win.grade}">${win.marks} (${win.grade})</span></td>
            <td>
                <button class="btn btn-primary" style="padding:0.3rem 0.6rem; font-size:0.75rem; width:auto;" 
                    onclick="openCertificate('${win.participantId}', '${win.eventId}')">
                    Certificate
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

/* Certificate Generator Modals */
function openCertificate(participantId, eventId) {
    const p = state.getParticipant(participantId);
    const ev = state.getEvent(eventId);
    const score = state.getScore(eventId, participantId);

    if (!p || !ev || !score) return;

    document.getElementById("certName").textContent = p.name;
    document.getElementById("certDistrict").textContent = p.district;
    document.getElementById("certEvent").textContent = ev.name;
    document.getElementById("certGrade").textContent = score.grade;
    document.getElementById("certParticipantId").textContent = p.id;
    document.getElementById("certDate").textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById("certModalBackdrop").classList.add("active");
    document.getElementById("certModal").classList.add("active");
}

function closeCertificateModal() {
    document.getElementById("certModalBackdrop").classList.remove("active");
    document.getElementById("certModal").classList.remove("active");
}

/* Lightweight select searchability helper */
function makeSelectSearchable(selectId, placeholder) {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    let searchInput = select.previousElementSibling;
    const isAlreadySearchable = searchInput && searchInput.classList.contains("select-search-input");
    
    if (!isAlreadySearchable) {
        searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = placeholder;
        searchInput.className = "input-field select-search-input";
        searchInput.style.marginBottom = "0.4rem";
        searchInput.style.fontSize = "0.75rem";
        searchInput.style.padding = "0.3rem 0.6rem";
        
        select.parentNode.insertBefore(searchInput, select);
    }
    
    // Set initial text to current selected option text
    const syncInputFromSelect = () => {
        if (select.selectedIndex >= 0) {
            const activeOpt = select.options[select.selectedIndex];
            if (activeOpt && activeOpt.value !== "") {
                searchInput.value = activeOpt.text;
            } else {
                searchInput.value = "";
            }
        } else {
            searchInput.value = "";
        }
    };
    
    syncInputFromSelect();
    
    let originalOptions = Array.from(select.options);
    
    // Watch for dynamic updates to select options
    const observer = new MutationObserver(() => {
        originalOptions = Array.from(select.options);
        // Sync search input if options changed and a value is selected
        syncInputFromSelect();
    });
    observer.observe(select, { childList: true });
    
    // When typing in search box, filter options
    const onSearchInput = () => {
        const query = searchInput.value.toLowerCase();
        const selectedValue = select.value;
        
        // Remove observer temporarily to prevent loop
        observer.disconnect();
        
        select.innerHTML = "";
        originalOptions.forEach(opt => {
            if (opt.text.toLowerCase().includes(query) || opt.value === "") {
                select.appendChild(opt);
            }
        });
        
        select.value = selectedValue;
        
        // Re-observe
        observer.observe(select, { childList: true });
        
        select.dispatchEvent(new Event("change"));
    };
    
    searchInput.oninput = onSearchInput;
    
    // Remove old event listener if it exists, or just assign new one
    if (select._onSelectChange) {
        select.removeEventListener("change", select._onSelectChange);
    }
    select._onSelectChange = () => {
        syncInputFromSelect();
    };
    select.addEventListener("change", select._onSelectChange);
    
    // Handle focus / blur behavior for search input
    searchInput.onfocus = () => {
        searchInput.select(); // highlight all text so user can easily overwrite it
    };
    
    searchInput.onblur = () => {
        // If user left it empty or typed something that doesn't match, restore select's current text
        setTimeout(() => {
            if (select.selectedIndex >= 0) {
                const activeOpt = select.options[select.selectedIndex];
                if (activeOpt && activeOpt.value !== "") {
                    searchInput.value = activeOpt.text;
                    // Reset dropdown to show all options again (unfiltered)
                    observer.disconnect();
                    const selectedValue = select.value;
                    select.innerHTML = "";
                    originalOptions.forEach(opt => select.appendChild(opt));
                    select.value = selectedValue;
                    observer.observe(select, { childList: true });
                } else {
                    searchInput.value = "";
                }
            } else {
                searchInput.value = "";
            }
        }, 200); // delay to let clicks register
    };
}

/* Event Registration view logic */
function renderEventRegistration() {
    populateRegistrationDropdowns();
    
    const distSelect = document.getElementById("registrationDistrict");
    const eventSelect = document.getElementById("registrationEvent");
    
    const onSelectionChange = () => {
        updateEventRegistrationLists();
    };
    
    distSelect.removeEventListener("change", onSelectionChange);
    eventSelect.removeEventListener("change", onSelectionChange);
    distSelect.addEventListener("change", onSelectionChange);
    eventSelect.addEventListener("change", onSelectionChange);
    
    updateEventRegistrationLists();
    
    makeSelectSearchable("registrationDistrict", "Search District...");
    makeSelectSearchable("registrationEvent", "Search Event...");
}

function populateRegistrationDropdowns() {
    const distSelect = document.getElementById("registrationDistrict");
    const eventSelect = document.getElementById("registrationEvent");
    
    const currentDist = distSelect.value;
    const currentEvent = eventSelect.value;
    
    distSelect.innerHTML = '<option value="">Select District</option>';
    DISTRICTS.forEach(d => {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        if (d === currentDist) opt.selected = true;
        distSelect.appendChild(opt);
    });
    
    eventSelect.innerHTML = '<option value="">Select Competition</option>';
    const sortedEvents = [...state.events].sort((a,b) => {
        const numA = parseInt(a.id);
        const numB = parseInt(b.id);
        if (numA !== numB) return numA - numB;
        return a.id.localeCompare(b.id);
    });
    
    sortedEvents.forEach(e => {
        const opt = document.createElement("option");
        opt.value = e.id;
        opt.textContent = `${e.name} [Code: ${e.id}]`;
        if (e.id === currentEvent) opt.selected = true;
        eventSelect.appendChild(opt);
    });
}

function updateEventRegistrationLists() {
    const distSelect = document.getElementById("registrationDistrict");
    const eventSelect = document.getElementById("registrationEvent");
    
    const dist = distSelect.value;
    const evId = eventSelect.value;
    
    const regSection = document.getElementById("registrationListSection");
    const eligSection = document.getElementById("eligibleListSection");
    const regBody = document.getElementById("registeredEventParticipantsBody");
    const eligBody = document.getElementById("eligibleEventParticipantsBody");
    const nameSearchContainer = document.getElementById("registrationNameSearchContainer");
    
    if (!dist || !evId) {
        regSection.style.display = "none";
        eligSection.style.display = "none";
        if (nameSearchContainer) nameSearchContainer.style.display = "none";
        return;
    }
    
    regSection.style.display = "block";
    eligSection.style.display = "block";
    if (nameSearchContainer) nameSearchContainer.style.display = "block";
    
    const registered = state.participants.filter(p => p.district === dist && p.eventIds.includes(evId));
    regBody.innerHTML = "";
    if (registered.length === 0) {
        regBody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--text-secondary); padding:1rem;">No participants from this district registered for this event yet.</td></tr>';
    } else {
        const isAuthorized = state.currentRole === "System Admin" || state.currentRole === "State Coordinator";
        registered.forEach(p => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong style="color:var(--text-primary)">${p.id}</strong></td>
                <td><strong>${p.name}</strong></td>
                <td>${p.gender}</td>
                <td>${p.age}</td>
                <td>
                    <button class="btn btn-danger" style="padding:0.25rem 0.5rem; font-size:0.7rem; width:auto;" 
                        onclick="deregisterParticipantFromEvent('${p.id}', '${evId}')" ${!isAuthorized ? 'disabled' : ''}>
                        Deregister
                    </button>
                </td>
            `;
            regBody.appendChild(tr);
        });
    }
    
    eligBody.innerHTML = "";
    const allDistrictParticipants = state.participants.filter(p => p.district === dist);
    const eligibleList = allDistrictParticipants.filter(p => {
        if (p.eventIds.includes(evId)) return false;
        const eligibleEvents = getEligibleEventsForParticipant(p.age, p.gender);
        return eligibleEvents.some(e => e.id === evId);
    });
    
    if (eligibleList.length === 0) {
        eligBody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--text-secondary); padding:1rem;">No available district participants are eligible for this event.</td></tr>';
    } else {
        const isAuthorized = state.currentRole === "System Admin" || state.currentRole === "State Coordinator";
        eligibleList.forEach(p => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong style="color:var(--text-primary)">${p.id}</strong></td>
                <td><strong>${p.name}</strong></td>
                <td>${p.gender}</td>
                <td>${p.age}</td>
                <td>
                    <button class="btn btn-primary" style="padding:0.25rem 0.5rem; font-size:0.7rem; width:auto;" 
                        onclick="registerExistingParticipantForEvent('${p.id}', '${evId}')" ${!isAuthorized ? 'disabled' : ''}>
                        Register
                    </button>
                </td>
            `;
            eligBody.appendChild(tr);
        });
    }
}

function setupEventRegistrationAutocomplete() {
    const nameInput = document.getElementById("registrationNameInput");
    const dropdown = document.getElementById("registrationNameDropdown");
    const distSelect = document.getElementById("registrationDistrict");
    const eventSelect = document.getElementById("registrationEvent");
    
    if (!nameInput || !dropdown) return;
    
    const closeDropdown = () => {
        dropdown.style.display = "none";
        dropdown.innerHTML = "";
    };
    
    nameInput.addEventListener("input", () => {
        const query = nameInput.value.trim().toLowerCase();
        const dist = distSelect.value;
        const evId = eventSelect.value;
        
        if (!dist || !evId) {
            closeDropdown();
            return;
        }
        
        if (query.length === 0) {
            closeDropdown();
            return;
        }
        
        // Find existing eligible participants from the selected district
        const allDistrictParticipants = state.participants.filter(p => p.district === dist);
        const eligibleList = allDistrictParticipants.filter(p => {
            // Must not be already registered
            if (p.eventIds.includes(evId)) return false;
            // Must be eligible based on age/gender
            const eligibleEvents = getEligibleEventsForParticipant(p.age, p.gender);
            return eligibleEvents.some(e => e.id === evId);
        });
        
        // Filter by name query
        const matches = eligibleList.filter(p => p.name.toLowerCase().includes(query) || p.id.toLowerCase().includes(query));
        
        dropdown.innerHTML = "";
        dropdown.style.display = "block";
        
        if (matches.length > 0) {
            matches.forEach(p => {
                const item = document.createElement("div");
                item.className = "autocomplete-item";
                item.innerHTML = `<strong>${p.name}</strong> <span style="font-size:0.75rem; color:var(--text-secondary);">(${p.id} &mdash; ${p.gender}, Age ${p.age})</span>`;
                item.onclick = () => {
                    registerExistingParticipantForEvent(p.id, evId);
                    nameInput.value = "";
                    closeDropdown();
                };
                dropdown.appendChild(item);
            });
        } else {
            const noMatch = document.createElement("div");
            noMatch.className = "autocomplete-item";
            noMatch.style.color = "var(--text-secondary)";
            noMatch.style.cursor = "default";
            noMatch.textContent = "No matching eligible participants found.";
            dropdown.appendChild(noMatch);
        }
        
        // Always add option to create a new participant
        const addNewItem = document.createElement("div");
        addNewItem.className = "autocomplete-item add-new-item";
        addNewItem.innerHTML = `<strong>+ Register "${nameInput.value}" as New Participant</strong>`;
        addNewItem.onclick = () => {
            const nameToRegister = nameInput.value.trim();
            switchView("add-participant");
            document.getElementById("formDistrict").value = dist;
            document.getElementById("formName").value = nameToRegister;
            nameInput.value = "";
            closeDropdown();
        };
        dropdown.appendChild(addNewItem);
    });
    
    // Close dropdown on click outside
    document.addEventListener("click", (e) => {
        if (!nameInput.contains(e.target) && !dropdown.contains(e.target)) {
            closeDropdown();
        }
    });
}

function registerExistingParticipantForEvent(pId, evId) {
    if (state.currentRole !== "System Admin" && state.currentRole !== "State Coordinator") {
        alert("Permission denied! Your Coordinator role does not have authorization to register participants.");
        return;
    }
    
    const p = state.getParticipant(pId);
    const ev = state.getEvent(evId);
    if (!p || !ev) return;
    
    let litCount = 0;
    let grpCount = 0;
    let indCount = 0;

    const testEventIds = [...p.eventIds, evId];

    testEventIds.forEach(id => {
        const e = state.getEvent(id);
        if (e) {
            if (e.type === "Literary") litCount++;
            else if (e.type === "Group") grpCount++;
            else if (e.type === "Individual") indCount++;
        }
    });

    if (litCount > 3) {
        alert(`Cannot register: Exceeded limits for Literary events (Maximum: 3). Current: ${litCount}`);
        return;
    }
    if (grpCount > 3) {
        alert(`Cannot register: Exceeded limits for Group events (Maximum: 3). Current: ${grpCount}`);
        return;
    }
    if (indCount > 5) {
        alert(`Cannot register: Exceeded limits for Individual events (Maximum: 5). Current: ${indCount}`);
        return;
    }
    
    p.eventIds.push(evId);
    state.saveState();
    alert(`Successfully registered ${p.name} for ${ev.name}!`);
    updateEventRegistrationLists();
    renderParticipantList();
    renderDashboard();
}

function deregisterParticipantFromEvent(pId, evId) {
    if (state.currentRole !== "System Admin" && state.currentRole !== "State Coordinator") {
        alert("Permission denied! Your Coordinator role does not have authorization to deregister participants.");
        return;
    }
    
    const p = state.getParticipant(pId);
    const ev = state.getEvent(evId);
    if (!p || !ev) return;
    
    if (confirm(`Are you sure you want to deregister ${p.name} from the event "${ev.name}"?`)) {
        p.eventIds = p.eventIds.filter(id => id !== evId);
        state.scores = state.scores.filter(s => !(s.eventId === evId && s.participantId === pId));
        state.saveState();
        alert(`Successfully deregistered ${p.name} from "${ev.name}".`);
        updateEventRegistrationLists();
        renderParticipantList();
        renderDashboard();
    }
}
