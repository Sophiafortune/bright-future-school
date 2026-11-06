const tourBtn = document.getElementById('tourBtn');
if (tourBtn) {
    tourBtn.addEventListener('click', () => {
    window.open('http//www.youtube.com/results?search_query=school+virtual+tour','blank');
    });
}
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const step = target/60;
    const update = () => {
        count += step;
        if (count<target) {
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(update);
        } else {
            counter.textContent = target + (target>=98?'%':'+');
        }
    };
    update();
} );
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
} );
if (topBtn) {
    topBtn.addEventListener("click",() => {
        window.scrollTo({
         top: 0,
         behaviour: "smooth"
        });
    });
}
// PORTAL LOGIN SIMULATION (MULTI-USER FAKE DATABASE)
const portalForm = document.querySelector('.portal-form');

// This is our fake database for the whole school
const schoolDatabase = {
  "pupil@brightfuture.edu": {
    password: "123456",
    name: "Sophia Mandera",
    grade: "Primary 7",
    attendance: "98% (Excellent)"
  },
  "john@brightfuture.edu": {
    password: "password123",
    name: "John Doe",
    grade: "Primary 6",
    attendance: "92% (Good)"
  }
};

if (portalForm) {
  portalForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const email = portalForm.querySelector('input[type="email"]').value.toLowerCase();
    const password = portalForm.querySelector('input[type="password"]').value;
    
    const user = schoolDatabase[email]; // Check if the email exists in our database
    
    if (user && user.password === password) {
      // Success! Update the dashboard with THIS student's info
      document.getElementById('pupil-name').innerText = user.name;
      document.getElementById('pupil-grade').innerText = user.grade;
      document.getElementById('pupil-attendance').innerText = user.attendance;
      
      // Hide login, show dashboard
      portalForm.style.display = 'none';
      document.querySelector('.portal-box h2').style.display = 'none';
      document.querySelector('.portal-box > p').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
    } else {
      alert("Access Denied. Incorrect email or password.\n\nHint: Use pupil@brightfuture.edu / 123456\nOR john@brightfuture.edu / password123");
    }
  });
}

function logout() {
  document.querySelector('.portal-form').style.display = 'block';
  document.querySelector('.portal-box h2').style.display = 'block';
  document.querySelector('.portal-box > p').style.display = 'block';
  document.getElementById('dashboard').style.display = 'none';
  document.querySelector('.portal-form input[type="email"]').value = '';
  document.querySelector('.portal-form input[type="password"]').value = '';
}

