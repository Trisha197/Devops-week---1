// Update deployment time
function updateDeploymentInfo() {
    const now = new Date();
    const timeString = now.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    document.getElementById('deployTime').textContent = timeString;
    document.getElementById('lastChecked').textContent = 'Just now';
}

// Simulate deployment count
let deployCount = 0;
function incrementDeployCount() {
    deployCount = Math.floor(Math.random() * 20) + 5; // Random number between 5-25
    document.getElementById('deployCount').textContent = deployCount;
}

// Update status periodically
function updateStatus() {
    const statusElement = document.getElementById('deployStatus');
    const statuses = [
        'Deployed Successfully ✅',
        'All Systems Go 🚀',
        'Pipeline Running ⚡',
        'Build Complete 🎉'
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    statusElement.textContent = randomStatus;
}

// Simulate build status
function updateBuildStatus() {
    const buildStatus = document.getElementById('buildStatus');
    const statuses = [
        '✅ Build Passed',
        '✅ Tests Passed',
        '✅ Deployed Successfully'
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    buildStatus.textContent = randomStatus;
}

// Initialize
function init() {
    updateDeploymentInfo();
    incrementDeployCount();
    updateStatus();
    updateBuildStatus();

    // Update every 30 seconds
    setInterval(() => {
        updateDeploymentInfo();
        updateStatus();
        updateBuildStatus();
    }, 30000);
}

// Start when page loads
document.addEventListener('DOMContentLoaded', init);