// main Sections capturing with variables
const allSection = document.getElementById('all-section');
const interviewSection = document.getElementById('interview-section');
const rejectSection = document.getElementById('reject-section');

const mainContainer = document.getElementById('main-container');

mainContainer.addEventListener('click', (e) => {
  const mainParent = e.target.closest('.main-card')

  if (e.target.classList.contains('interview-btn')) {

    // status changing 
    mainParent.querySelector('.aplly-btn').classList.remove('rejectCard')
    mainParent.querySelector('.aplly-btn').classList.add('interviewCard')
    mainParent.querySelector('.aplly-btn p').innerText = 'interview'  
    
    // Interview Section Update

    
    totalRender();
  } 
  
  if (e.target.classList.contains('rejected-btn')) {

    mainParent.querySelector('.aplly-btn').classList.remove('interviewCard')
    mainParent.querySelector('.aplly-btn').classList.add('rejectCard')
    mainParent.querySelector('.aplly-btn p').innerText = 'rejected'

    totalRender();
  }
  
})

// Main counters
const totalJob = document.getElementById('total-job');
const interviewJOb = document.getElementById('interview-job');
const rejectJob = document.getElementById('reject-job');

// This function updates data inside Counters
function totalRender() {
  totalJob.innerText = document.getElementById('all-section').children.length;
  interviewJOb.innerText = document.getElementById('interview-section').children.length;
  rejectJob.innerText = document.getElementById('reject-section').children.length;

  // document.getElementById('jobs').innerText = document.getElementById('all-section').children.length;
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

