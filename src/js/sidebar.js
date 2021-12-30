function toggleSide() {
    let sidebar = document.getElementById('sidebar');
    let times= document.getElementById('close');
    let bars = document.getElementById('bars');
    sidebar.classList.toggle('hide-sidebar');
    times.classList.toggle('hidden');
    bars.classList.toggle('hidden');

}