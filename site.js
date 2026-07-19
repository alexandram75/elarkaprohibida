(function () {
    fetch('data/site.json')
        .then(res => res.json())
        .then(site => {
            document.querySelectorAll('[data-discord-href]').forEach(el => {
                el.href = site.discordInvite;
            });
            document.querySelectorAll('[data-discord-qr]').forEach(el => {
                el.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(site.discordInvite);
            });

            const communityText = document.getElementById('discordCommunityText');
            if (communityText) communityText.textContent = site.discordPage.communityText;

            const accessText = document.getElementById('discordAccessText');
            if (accessText) accessText.textContent = site.discordPage.accessText;

            document.dispatchEvent(new CustomEvent('site:ready', { detail: site }));
        });
})();
