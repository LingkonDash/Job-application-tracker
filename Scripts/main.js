const totalJob = document.getElementById('total-job');
const interviewJOb = document.getElementById('interview-job');
const rejectJob = document.getElementById('reject-job');

const mainContainer = document.getElementById('main-container');

mainContainer.addEventListener('click', (e) => {
  
  if (e.target.innerText === 'INTERVIEW') {
    e.target.closest('.main-card').querySelector('.aplly-btn').classList.remove('rejectCard')
    e.target.closest('.main-card').querySelector('.aplly-btn').classList.add('interviewCard')
    e.target.closest('.main-card').querySelector('.aplly-btn p').innerText = 'interview'
  } 
  
  if (e.target.innerText === 'REJECTED') {
    e.target.closest('.main-card').querySelector('.aplly-btn').classList.remove('interviewCard')
    e.target.closest('.main-card').querySelector('.aplly-btn').classList.add('rejectCard')
    e.target.closest('.main-card').querySelector('.aplly-btn p').innerText = 'rejected'
  }
})

// This function updates data inside total box, interview box and reject box
function totalRender() {
  totalJob.innerText = document.getElementById('all-section').children.length;
  interviewJOb.innerText = document.getElementById('interview-section').children.length;
  rejectJob.innerText = document.getElementById('reject-section').children.length;
}
totalRender();

// This Function toggoles button styles and shows selected section
function showOnly(btnid, sectionId) {
  // buttons
  document.getElementById('all-list').classList.remove('btn-primary')
  document.getElementById('interview-list').classList.remove('btn-primary')
  document.getElementById('reject-list').classList.remove('btn-primary')
  
  document.getElementById(btnid).classList.add('btn-primary')
  
  // Sections
  document.getElementById('all-section').classList.add('hidden')
  document.getElementById('interview-section').classList.add('hidden')
  document.getElementById('reject-section').classList.add('hidden')
  document.getElementById('noJob-section').classList.add('hidden')
  
  const currentSection = document.getElementById(sectionId);
  
  if (currentSection.children.length === 0) {
    document.getElementById('noJob-section').classList.remove('hidden')
    return;
  }
  
  document.getElementById(sectionId).classList.remove('hidden')
  
}

