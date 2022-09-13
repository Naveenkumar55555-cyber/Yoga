if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.remove('dark');
}