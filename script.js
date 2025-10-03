/* ==========================================================================
   Smile Movement 2025 - Sports Leaderboard JavaScript
   ========================================================================== */

// Original data - preserved from the original implementation
const data = [
  {
    "team-name": "ST0 Beaver",
    "members": [
      { "name": "Anil", "smile_contribution": [450, 450, 450, 480, 480, 630, 920, 945, 945] },
      { "name": "Arjun", "smile_contribution": [70, 70, 70, 70, 320, 330, 115, 115, 115] },
      { "name": "Anusha", "smile_contribution": [130, 130, 130, 130, 130, 130, 100, 100, 100] },
      { "name": "Aneesh", "smile_contribution": [110, 110, 135, 170, 170, 195, 145, 145, 145] },
      { "name": "Bala", "smile_contribution": [700, 800, 800, 925, 1015, 1050, 1575, 1680, 1705] },
      { "name": "Kanchan", "smile_contribution": [150, 150, 150, 150, 150, 150, 25, 25, 25] },
      { "name": "Madan", "smile_contribution": [110, 110, 155, 170, 215, 315, 360, 360, 360] },
      { "name": "Madhu", "smile_contribution": [60, 60, 60, 60, 80, 180, 345, 345, 345] },
      { "name": "Mahesh", "smile_contribution": [115, 185, 185, 220, 295, 295, 625, 625, 625] },
      { "name": "Karthik", "smile_contribution": [170, 205, 235, 235, 285, 410, 410, 410, 520] }
    ]
  },
  {
    "team-name": "ST11 Octopus",
     "members": [
      { "name": "Jaipal", "smile_contribution": [0, 0, 0, 20, 20, 20, 30, 65, 65] }
      ]     
  },
  {
    "team-name": "ST3 Dolphin",
    "members": [
      { "name": "Harsha", "smile_contribution": [145, 145, 145, 170, 170, 295, 90, 90, 120] },
      { "name": "Sharmistha", "smile_contribution": [60, 70, 95, 95, 95, 110, 115, 115, 115] },
      { "name": "Sreeram", "smile_contribution": [150, 215, 280, 335, 335, 360, 430, 490, 540] },
      { "name": "Kavya", "smile_contribution": [125, 125, 135, 135, 135, 135, 150, 200, 200] },
      { "name": "Karan", "smile_contribution": [125, 125, 125, 205, 305, 340, 390, 390, 390] },
      { "name": "Kavitha", "smile_contribution": [10, 60, 80, 90, 120, 170, 245, 245, 295] },
      { "name": "Sheel", "smile_contribution": [85, 95, 95, 105, 105, 105, 165, 165, 165] }
    ]
  },
  {
    "team-name": "ST5 Phoenix",
    "members": [
      { "name": "Sunil", "smile_contribution": [30, 30, 50, 55, 65, 100, 100, 150, 150] },
      { "name": "Bhoomi", "smile_contribution": [115, 120, 135, 145, 145, 160, 0, 0, 0] },
      { "name": "Rajyogi", "smile_contribution": [220, 255, 295, 310, 345, 485, 550, 575, 595] },
      { "name": "Pankaj", "smile_contribution": [220, 280, 310, 345, 400, 460, 625, 740, 755] },
      { "name": "Deeksith", "smile_contribution": [20, 20, 55, 55, 55, 80, 10, 10, 10] },
      { "name": "Purush", "smile_contribution": [75, 75, 90, 120, 120, 155, 200, 200, 230] },
      { "name": "Sneha", "smile_contribution": [25, 25, 25, 30, 30, 45, 25, 55, 130] }
    ]
  },
  {
    "team-name": "ST7 Owl",
    "members": [
      { "name": "Anand", "smile_contribution": [165, 165, 165, 225, 320, 445, 760, 870, 920] },
      { "name": "Ankit", "smile_contribution": [655, 755, 775, 825, 925, 975, 1285, 1390, 1390] },
      { "name": "Paras", "smile_contribution": [310, 345, 390, 405, 440, 590, 695, 695, 720] },
      { "name": "Manish", "smile_contribution": [55, 55, 85, 145, 170, 310, 440, 440, 440] },
      { "name": "Amit", "smile_contribution": [285, 340, 375, 390, 410, 600, 800, 825, 825] },
      { "name": "Anupriya", "smile_contribution": [10, 10, 45, 70, 70, 115, 185, 195, 195] }
    ]
  },
  {
    "team-name": "ST8 Eagle",
    "members": [
      { "name": "Natesh", "smile_contribution": [60, 70, 70, 70, 70, 70, 0, 0, 0] },
      { "name": "Rohan", "smile_contribution": [265, 265, 290, 315, 315, 330, 455, 455, 505] },
      { "name": "Kishore", "smile_contribution": [240, 240, 290, 300, 315, 325, 385, 405, 405] },
      { "name": "Chethan", "smile_contribution": [195, 195, 195, 225, 225, 225, 120, 170, 290] },
      { "name": "Sushmitha", "smile_contribution": [120, 130, 165, 200, 260, 295, 230, 230, 250] },
      { "name": "Harsith", "smile_contribution": [280, 280, 280, 280, 285, 360, 460, 655, 990] },
      { "name": "Prakriti", "smile_contribution": [375, 460, 470, 580, 610, 665, 840, 875, 875] },
      { "name": "Sreelaxmi", "smile_contribution": [85, 85, 85, 120, 255, 285, 385, 385, 385] }
    ]
  },
  {
    "team-name": "ST100 Infinity",
    "members": [
      { "name": "Balu", "smile_contribution": [211, 211, 211, 211, 211, 211, 161, 161, 161] },
      { "name": "Pooja", "smile_contribution": [220, 220, 240, 255, 255, 275, 325, 350, 360] },
      { "name": "Manju", "smile_contribution": [145, 145, 145, 145, 160, 160, 75, 100, 235] },
      { "name": "Bala M", "smile_contribution": [245, 245, 245, 285, 410, 420, 210, 210, 210] },
      { "name": "Asha", "smile_contribution": [140, 140, 170, 180, 180, 205, 315, 340, 340] }
    ]
  },
  {
    "team-name": "Inactive Members",
    "members": [
      { "name": "Balaji", "smile_contribution": [35, 35, 35, 35, 35, 35, 35] }
    ]
  }
];

// Sports-themed color palettes
const teamColors = [
  '#FFD700', // Gold
  '#42a5f5', // Blue
  '#66bb6a', // Green  
  '#ffa726', // Orange
  '#ab47bc', // Purple
  '#26a69a', // Teal
  '#ec407a', // Pink
  '#ff7043', // Deep Orange
  '#7e57c2', // Deep Purple
  '#8d6e63'  // Brown
];

const memberColors = [
  '#FFD700', // Gold for #1
  '#C0C0C0', // Silver for #2
  '#CD7F32', // Bronze for #3
  '#42a5f5', '#66bb6a', '#ffa726', '#ab47bc', '#26a69a',
  '#ec407a', '#ff7043', '#7e57c2', '#8d6e63', '#5c6bc0',
  '#26c6da', '#78909c', '#a5d6a7', '#ffcc02', '#f06292'
];

// Utility functions - preserved from original
function getLatest(arr) {
  return arr && arr.length > 0 ? arr[arr.length - 1] : 0;
}

function getPrevious(arr) {
  return arr && arr.length > 1 ? arr[arr.length - 2] : getLatest(arr);
}

function formatNumber(num) {
  return num.toLocaleString();
}

function getMedalEmoji(index) {
  if (index === 0) return '🥇';
  if (index === 1) return '🥈';
  if (index === 2) return '🥉';
  return '';
}

// Data processing - enhanced with sports styling
const sortedTeams = data.map(team => {
  const totalLatest = team.members.reduce((sum, m) => sum + getLatest(m.smile_contribution), 0);
  const totalPrevious = team.members.reduce((sum, m) => sum + getPrevious(m.smile_contribution), 0);
  const totalDelta = totalLatest - totalPrevious;
  const sortedMembers = [...team.members].sort(
    (a, b) => getLatest(b.smile_contribution) - getLatest(a.smile_contribution)
  );
  const count = team.members.length;
  const avg = count > 0 ? Math.round(totalLatest / count) : 0;
  
  return {
    name: team["team-name"],
    total: totalLatest,
    prevTotal: totalPrevious,
    delta: totalDelta,
    avg,
    count,
    members: sortedMembers
  };
}).sort((a, b) => b.avg - a.avg);

const totalPoints = sortedTeams.reduce((sum, t) => sum + t.total, 0);

// Initialize progress tracking
function initializeProgress() {
  const targetPoints = 38900;
  const percent = Math.min(100, (totalPoints / targetPoints * 100).toFixed(1));
  
  // Animate progress bar
  setTimeout(() => {
    const progressBar = document.getElementById('progressBar');
    const currentPointsEl = document.getElementById('currentPoints');
    
    // Animate the number counting up
    animateValue(currentPointsEl, 0, totalPoints, 2000);
    
    // Animate progress bar
    progressBar.style.width = `${percent}%`;
    progressBar.querySelector('.progress-percentage').innerText = `${percent}%`;
  }, 500);
}

// Animate number counting
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.innerText = formatNumber(current);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Initialize countdown
function initializeCountdown() {
  const targetDate = new Date('2025-10-03T00:00:00+05:30');
  const nowUTC = new Date();
  const nowIST = new Date(nowUTC.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}));
  const diffTime = targetDate - nowIST;
  const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  
  document.getElementById('daysRemaining').innerText = `${diffDays} days`;
}

// Create team chart with sports styling
function createTeamChart() {
  const ctx = document.getElementById('teamChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedTeams.map(t => t.name),
      datasets: [{
        label: 'Average Points per Member',
        data: sortedTeams.map(t => t.avg),
        backgroundColor: teamColors.slice(0, sortedTeams.length),
        borderColor: teamColors.slice(0, sortedTeams.length).map(color => color + 'CC'),
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: 'easeOutBounce'
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            color: '#e9ecef',
            lineWidth: 1
          },
          ticks: {
            color: '#495057',
            font: {
              weight: 600
            }
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            color: '#495057',
            font: {
              weight: 600,
              size: 12
            }
          }
        }
      },
      plugins: {
        legend: { 
          display: false 
        },
        tooltip: {
          backgroundColor: '#ffffff',
          titleColor: '#212529',
          bodyColor: '#495057',
          borderColor: '#0066cc',
          borderWidth: 2,
          cornerRadius: 8,
          displayColors: true,
          titleFont: {
            weight: 'bold',
            size: 14
          },
          bodyFont: {
            size: 13
          },
          callbacks: {
            title: function(context) {
              const team = sortedTeams[context[0].dataIndex];
              return `${getMedalEmoji(context[0].dataIndex)} ${team.name}`;
            },
            label: function(context) {
              const team = sortedTeams[context.dataIndex];
              return [
                `Average: ${formatNumber(team.avg)} points`,
                `Total: ${formatNumber(team.total)} points`,
                `Members: ${team.count}`,
                `Recent gain: +${formatNumber(team.delta)}`
              ];
            }
          }
        },
        datalabels: {
          anchor: 'center',
          align: 'center',
          color: '#ffffff',
          font: {
            weight: 'bold',
            size: 11
          },
          formatter: (value, ctx) => {
            const team = sortedTeams[ctx.dataIndex];
            return `${team.count} members`;
          }
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}

// Create individual leaderboard chart
function createMembersChart() {
  const allMembers = sortedTeams.flatMap(t =>
    t.members.map(m => ({
      team: t.name,
      name: m.name,
      contribution: getLatest(m.smile_contribution),
      prevContribution: getPrevious(m.smile_contribution),
      delta: getLatest(m.smile_contribution) - getPrevious(m.smile_contribution)
    }))
  ).sort((a, b) => b.contribution - a.contribution);

  const ctx = document.getElementById('membersChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: allMembers.map((m, i) => {
        const medal = getMedalEmoji(i);
        return `${i + 1}. ${medal} ${m.name}`;
      }),
      datasets: [{
        label: 'Smile Contribution',
        data: allMembers.map(m => m.contribution),
        backgroundColor: allMembers.map((_, i) => i < 3 ? memberColors[i] : memberColors[i % memberColors.length]),
        borderColor: allMembers.map((_, i) => (i < 3 ? memberColors[i] : memberColors[i % memberColors.length]) + 'CC'),
        borderWidth: 2,
        borderRadius: 6,
        barThickness: 12,
        categoryPercentage: 0.8,
        barPercentage: 0.9
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2500,
        easing: 'easeOutElastic'
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            color: '#e9ecef'
          },
          ticks: {
            color: '#495057',
            font: {
              weight: 600
            }
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            color: '#495057',
            font: {
              size: 10,
              weight: 500
            }
          }
        }
      },
      plugins: {
        legend: { 
          display: false 
        },
        tooltip: {
          backgroundColor: '#ffffff',
          titleColor: '#212529',
          bodyColor: '#495057',
          borderColor: '#0066cc',
          borderWidth: 2,
          cornerRadius: 8,
          titleFont: {
            weight: 'bold',
            size: 14
          },
          bodyFont: {
            size: 13
          },
          callbacks: {
            title: function(context) {
              const member = allMembers[context[0].dataIndex];
              const rank = context[0].dataIndex + 1;
              return `#${rank} ${member.name} (${member.team})`;
            },
            label: function(context) {
              const member = allMembers[context.dataIndex];
              return [
                `Current: ${formatNumber(member.contribution)} points`,
                `Recent gain: +${formatNumber(member.delta)} points`
              ];
            }
          }
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: '#495057',
          font: {
            weight: 'bold',
            size: 10
          },
          formatter: (value) => formatNumber(value)
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}

// Create team accordion with enhanced sports styling
function createTeamAccordion() {
  const container = document.getElementById('teamsContainer');
  
  sortedTeams.forEach((team, idx) => {
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    
    const medal = getMedalEmoji(idx);
    const deltaText = team.delta > 0 ? 
      `<span class="delta-positive"> (+${formatNumber(team.delta)})</span>` : '';
    
    teamCard.innerHTML = `
      <div class="team-header" onclick="toggleTeam(${idx})">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="team-name">
            <span class="medal">${medal}</span>
            ${team.name}
          </h4>
          <div class="team-stats text-end">
            <div class="total-badge">
              Total: ${formatNumber(team.total)}${deltaText}
            </div>
            <div class="avg-text mt-1">
              Avg: ${formatNumber(team.avg)} per member
            </div>
          </div>
        </div>
      </div>
      <div id="members-${idx}" class="team-members">
        ${team.members.map(m => {
          const latest = getLatest(m.smile_contribution);
          const prev = getPrevious(m.smile_contribution);
          const memberDelta = latest - prev;
          const deltaSpan = memberDelta > 0 ? 
            ` <span class="delta-positive">(+${formatNumber(memberDelta)})</span>` : '';
          
          return `
            <div class="member-item">
              <span class="member-name">${m.name}</span>
              <span class="member-points">
                ${formatNumber(latest)}${deltaSpan}
              </span>
            </div>
          `;
        }).join('')}
      </div>
    `;
    
    container.appendChild(teamCard);
  });
}

// Toggle team accordion
function toggleTeam(index) {
  const membersDiv = document.getElementById(`members-${index}`);
  const header = membersDiv.previousElementSibling;
  
  if (membersDiv.classList.contains('show')) {
    membersDiv.classList.remove('show');
    header.classList.remove('active');
  } else {
    // Close all other teams
    document.querySelectorAll('.team-members').forEach(div => {
      div.classList.remove('show');
    });
    document.querySelectorAll('.team-header').forEach(header => {
      header.classList.remove('active');
    });
    
    // Open clicked team
    membersDiv.classList.add('show');
    header.classList.add('active');
  }
}

// Add smooth scrolling for better UX
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add loading animation
function showLoadingAnimation() {
  const charts = document.querySelectorAll('.chart-container');
  charts.forEach(chart => {
    chart.classList.add('loading');
  });
  
  setTimeout(() => {
    charts.forEach(chart => {
      chart.classList.remove('loading');
    });
  }, 2000);
}

// Initialize parallax effect for hero section
function initializeParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const hero = document.querySelector('.hero-background');
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Add intersection observer for animations
function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.team-card, .chart-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
}

// Make toggleTeam globally available
window.toggleTeam = toggleTeam;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Show loading animation
  showLoadingAnimation();
  
  // Initialize core functionality
  initializeProgress();
  initializeCountdown();
  
  // Create charts with delay for better UX
  setTimeout(() => {
    createTeamChart();
    createMembersChart();
  }, 500);
  
  // Create team accordion
  setTimeout(() => {
    createTeamAccordion();
  }, 1000);
  
  // Add enhanced features
  addSmoothScrolling();
  initializeParallax();
  
  // Add scroll animations after a delay
  setTimeout(() => {
    addScrollAnimations();
  }, 1500);
  
  console.log('🏃‍♂️ Smile Movement 2025 Leaderboard Initialized!');
  console.log(`📊 Total Points: ${formatNumber(totalPoints)}`);
  console.log(`🏆 Teams: ${sortedTeams.length}`);
  console.log(`👥 Total Participants: ${sortedTeams.reduce((sum, t) => sum + t.count, 0)}`);
});

// Add resize handler for responsive charts
window.addEventListener('resize', () => {
  // Charts will automatically resize thanks to Chart.js responsive option
  // But we can add additional responsive behavior here if needed
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const focused = document.activeElement;
    if (focused.classList.contains('team-header')) {
      focused.click();
      e.preventDefault();
    }
  }
});
