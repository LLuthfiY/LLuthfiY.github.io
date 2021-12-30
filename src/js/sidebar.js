function toggleSide() {
    let sidebar = document.getElementById('sidebar');
    let times= document.getElementById('close');
    let bars = document.getElementById('bars');
    sidebar.classList.toggle('hide-sidebar');
    times.classList.toggle('hidden');
    bars.classList.toggle('hidden');

}

function closeSide() {
    let sidebar = document.getElementById('sidebar');
    let times= document.getElementById('close');
    let bars = document.getElementById('bars');
    sidebar.classList.add('hide-sidebar');
    times.classList.add('hidden');
    bars.classList.remove('hidden');

}