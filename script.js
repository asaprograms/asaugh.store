function changeTheme() {
    const colors = [
        ['#ff9a9e', '#fad0c4', '#fbc2eb'],
        ['#a18cd1', '#fbc2eb', '#fad0c4'],
        ['#f6d365', '#fda085', '#a8edea'],
        ['#84fab0', '#8fd3f4', '#a6c1ee']
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const gradient = colors[randomIndex];

    document.body.style.background = `linear-gradient(120deg, ${gradient.join(', ')})`;
}
