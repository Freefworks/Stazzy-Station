var sites = [
'https://stazzy-drawings.pages.dev/', 
'https://stazzy-digital-art.pages.dev/', 
'https://stazzy-music.pages.dev/', 
'https://stazzy-text.pages.dev/', 
'https://stazzy-videos.pages.dev/', 
'https://stazzy-games.pages.dev/'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}