// Main counters
const totalJob = document.getElementById('total-job');
const interviewJOb = document.getElementById('interview-job');
const rejectJob = document.getElementById('reject-job');
const jobs = document.getElementById('jobs');

jobs.innerText = document.getElementById('all-section').children.length;

let interviewItems = [];
let rejectItems = [];

// main Sections capturing with variables
const allSection = document.getElementById('all-section');
const interviewSection = document.getElementById('interview-section');
const rejectSection = document.getElementById('reject-section');
const noJobSection = document.getElementById('noJob-section');

const mainContainer = document.getElementById('main-container');

mainContainer.addEventListener('click', (e) => {
  const mainParent = e.target.closest('.main-card');

  if (!mainParent) return;

  // Object items 
  const companyName = mainParent.querySelector('.company-name').innerText;
  const postName = mainParent.querySelector('.post-name').innerText;
  const jobType = mainParent.querySelector('.job-type').innerText;
  const workDetails = mainParent.querySelector('.work-details').innerText;

  const currentDiv = {
    companyName, postName, jobType, workDetails
  }

  // interview button functionalities
  if (e.target.classList.contains('interview-btn')) {

    // status changing 
    mainParent.querySelector('.aplly-btn').classList.remove('rejectCard')
    mainParent.querySelector('.aplly-btn').classList.add('interviewCard')
    mainParent.querySelector('.aplly-btn p').innerText = 'interview'

    currentDiv.currentStatus = mainParent.querySelector('.current-status').innerText;
    // Interview item check 
    let counter = 0;

    interviewItems.forEach(item => {
      if ((item.companyName === currentDiv.companyName)) {
        counter++
      }
    })

    const checkText = mainParent.querySelector('.company-name').innerText

    rejectItems.forEach(item => {
      if (item.companyName === checkText) {

        // Interview Data status update in all section
        allSection.querySelectorAll('.main-card').forEach(mainItem => {
          if (mainItem.querySelector('.company-name').innerText === item.companyName) {
            mainItem.querySelector('.aplly-btn').classList.remove('rejectCard')
            mainItem.querySelector('.aplly-btn').classList.add('interviewCard')
            mainItem.querySelector('.aplly-btn p').innerText = 'interview'
          }

          rejectItems = rejectItems.filter(x => x !== item);
        })

      }
    })


    if (counter === 0) interviewItems.push(currentDiv)

    else counter = 0;

    // Interview Section Update
    if (rejectItems.length === 0 && document.getElementById('reject-list').classList.contains('btn-primary')) {
      document.getElementById('reject-section').classList.add('hidden');
      document.getElementById('noJob-section').classList.remove('hidden');
    }


    sectionRender();
    totalRender();
    jobOfUpdater()
  }

  // Reject button functionalities
  if (e.target.classList.contains('rejected-btn')) {

    // status changing 
    mainParent.querySelector('.aplly-btn').classList.remove('interviewCard')
    mainParent.querySelector('.aplly-btn').classList.add('rejectCard')
    mainParent.querySelector('.aplly-btn p').innerText = 'rejected'

    currentDiv.currentStatus = mainParent.querySelector('.current-status').innerText;
    // Reject item check 
    let rejectCounter = 0;
    rejectItems.forEach(item => {
      if ((item.companyName === currentDiv.companyName)) {
        rejectCounter++
      }
    })

    const checkText = mainParent.querySelector('.company-name').innerText

    interviewItems.forEach(item => {
      if (item.companyName === checkText) {

        // Reject Data status update in all section
        allSection.querySelectorAll('.main-card').forEach(mainItem => {
          if (mainItem.querySelector('.company-name').innerText === item.companyName) {
            mainItem.querySelector('.aplly-btn').classList.remove('interviewCard')
            mainItem.querySelector('.aplly-btn').classList.add('rejectCard')
            mainItem.querySelector('.aplly-btn p').innerText = 'rejected'
          }

          interviewItems = interviewItems.filter(x => x !== item);
        })
      }
    })


    if (rejectCounter === 0) rejectItems.push(currentDiv)
    else rejectCounter = 0;

    // Reject Section Update
    if (interviewItems.length === 0 && document.getElementById('interview-list').classList.contains('btn-primary')) {
      document.getElementById('reject-section').classList.add('hidden');
      document.getElementById('noJob-section').classList.remove('hidden');
    }
    if (interviewItems.length === 0 && document.getElementById('interview-list').classList.contains('btn-primary')) {
      document.getElementById('reject-section').classList.add('hidden');
      document.getElementById('noJob-section').classList.remove('hidden');
    }

    sectionRender();
    totalRender();
    jobOfUpdater();
  }

  // Delet button 
  if (e.target.parentNode.classList.contains('delet-btn')) {

    if (mainParent.parentNode.classList.contains('all-section')) {

      allSection.removeChild(mainParent);
    }

    if (allSection.children.length === 0) {
      rejectSection.innerHTML = ''
      interviewSection.innerHTML = ''
    }

    if (allSection.children.length === 0 && document.getElementById('all-list').classList.contains('btn-primary')) {
      document.getElementById('all-section').classList.add('hidden');
      document.getElementById('noJob-section').classList.remove('hidden');
    }

    totalRender();
    jobOfUpdater();
  }

})

function sectionRender() {
  // Rendering Interview section 
  interviewSection.innerHTML = '';

  interviewItems.forEach(item => {
    const newElem = document.createElement('div');
    newElem.classList.add('main-card', 'bg-secondary-bg', 'border-2', 'border-bg-border', 'rounded-lg', 'space-y-5', 'p-4', 'md:p-6')
    newElem.innerHTML = `
      <div class="flex justify-between items-center">
            <div>
              <h2 class="company-name text-primary-text text-[18px] font-semibold" >${item.companyName}</h2>
              <p class="post-name text-gray-text">${item.postName}</p>
            </div>
            <button class="hidden rounded-full border cursor-pointer border-gray-text hover:bg-bg-border active:scale-95 transition-all">
              <img width="36px" src="icons/bin-icon.png" alt="Delet icon">
            </button>
          </div>

          <p class="job-type text-gray-text text-[14px]">${item.jobType}</p>

          <div class="space-y-2">
            <div class="aplly-btn interviewCard border-transparent text-primary-text bg-disabled-btn w-max px-3 py-2 rounded">
              <p class="current-status uppercase font-medium text-[14px]">Interview</p>
            </div>
            <p class="work-details text-[14px] text-darkGray-text ">${item.workDetails}</p>
          </div>

          <div class="space-x-2">
            <button class="interview-btn btn border-green-btn text-green-btn bg-secondary-bg hover:bg-green-btn hover:text-secondary-bg active:scale-98 uppercase">interview</button>
            <button class="rejected-btn btn border-red-btn text-red-btn bg-secondary-bg hover:bg-red-btn hover:text-secondary-bg active:scale-98 uppercase">Rejected</button>
          </div>
      `
    interviewSection.appendChild(newElem);
  })

  rejectSection.innerHTML = '';

  rejectItems.forEach(item => {
    const newElem = document.createElement('div');
    newElem.classList.add('main-card', 'bg-secondary-bg', 'border-2', 'border-bg-border', 'rounded-lg', 'space-y-5', 'p-4', 'md:p-6')
    newElem.innerHTML = `
      <div class="flex justify-between items-center">
            <div>
              <h2 class="company-name text-primary-text text-[18px] font-semibold" >${item.companyName}</h2>
              <p class="post-name text-gray-text">${item.postName}</p>
            </div>
            <button class="hidden rounded-full border cursor-pointer border-gray-text hover:bg-bg-border active:scale-95 transition-all">
              <img width="36px" src="icons/bin-icon.png" alt="Delet icon">
            </button>
          </div>

          <p class="job-type text-gray-text text-[14px]">${item.jobType}</p>

          <div class="space-y-2">
            <div class="aplly-btn rejectCard border-transparent text-primary-text bg-disabled-btn w-max px-3 py-2 rounded">
              <p class="current-status uppercase font-medium text-[14px]">rejected</p>
            </div>
            <p class="work-details text-[14px] text-darkGray-text ">${item.workDetails}</p>
          </div>

          <div class="space-x-2">
            <button class="interview-btn btn border-green-btn text-green-btn bg-secondary-bg hover:bg-green-btn hover:text-secondary-bg active:scale-98 uppercase">interview</button>
            <button class="rejected-btn btn border-red-btn text-red-btn bg-secondary-bg hover:bg-red-btn hover:text-secondary-bg active:scale-98 uppercase">Rejected</button>
          </div>
      `
    rejectSection.appendChild(newElem);
  })

}

// This function updates data inside Counters
function totalRender() {
  totalJob.innerText = document.getElementById('all-section').children.length;
  interviewJOb.innerText = document.getElementById('interview-section').children.length;
  rejectJob.innerText = document.getElementById('reject-section').children.length;

  // document.getElementById('jobs').innerText = document.getElementById('all-section').children.length;
}
totalRender();

// this function updates job of counter
function jobOfUpdater() {
  if (document.getElementById('interview-list').classList.contains('btn-primary')) jobs.innerText = `${document.getElementById('interview-section').children.length} of ${document.getElementById('all-section').children.length}`

  if (document.getElementById('reject-list').classList.contains('btn-primary')) jobs.innerText = `${document.getElementById('reject-section').children.length} of ${document.getElementById('all-section').children.length}`

  if (document.getElementById('all-list').classList.contains('btn-primary')) jobs.innerText = document.getElementById('all-section').children.length;
}

// This Function toggoles button styles and shows selected section
function showOnly(btnid, sectionId) {

  if (btnid === 'interview-list') jobs.innerText = `${document.getElementById('interview-section').children.length} of ${document.getElementById('all-section').children.length}`

  if (btnid === 'reject-list') jobs.innerText = `${document.getElementById('reject-section').children.length} of ${document.getElementById('all-section').children.length}`

  if (btnid === 'all-list') jobs.innerText = document.getElementById('all-section').children.length;


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

