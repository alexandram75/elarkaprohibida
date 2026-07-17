(async function () {
    const el = document.getElementById('discordStats');
    if (!el) return;

    try {
        const res = await fetch('https://discord.com/api/v10/invites/K9KZwputpZ?with_counts=true');
        const data = await res.json();

        if (data && typeof data.approximate_member_count === 'number') {
            const members = data.approximate_member_count.toLocaleString('es-ES');
            const online = data.approximate_presence_count.toLocaleString('es-ES');
            el.textContent = `👥 ${members} miembros · 🟢 ${online} en línea`;
        } else {
            el.style.display = 'none';
        }
    } catch (e) {
        el.style.display = 'none';
    }
})();
