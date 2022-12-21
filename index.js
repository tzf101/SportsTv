const Tv = [
    { 'name': 'Toffee',             'type': 'Both',     'lang': 'English',  'link': 'https://toffeelive.com/live-tv/all' },
    { 'name': 'Rabbitholebd',       'type': 'Both',     'lang': 'English',  'link': 'https://www.rabbitholebd.com/live' },
    { 'name': 'Totalsportek',       'type': 'Football', 'lang': 'English',  'link': 'https://totalsportek.pro/soccer/' },
    { 'name': 'Vip Stand',          'type': 'Football', 'lang': 'English',  'link': 'https://www.vipstand.se/live-sports-stream' },
    { 'name': 'Cricstream',         'type': 'Cricket',  'lang': 'English',  'link': 'https://watch.cricstream.me/' },
    { 'name': 'Beinmatch',          'type': 'Football', 'lang': 'Arabic',   'link': 'https://beinmatch.one/' },
    { 'name': 'Yallashoot',         'type': 'Football', 'lang': 'Arabic',   'link': 'https://stad.yalla-shoot.io/6dec/' },
    { 'name': 'Facebook Stream',    'type': 'Football', 'lang': 'Any',      'link': 'https://www.facebook.com/search/videos?q=football%20live&filters=eyJ2aWRlb3NfbGl2ZTowIjoie1wibmFtZVwiOlwidmlkZW9zX2xpdmVcIixcImFyZ3NcIjpcIlwifSIsInJwX2NyZWF0aW9uX3RpbWU6MCI6IntcIm5hbWVcIjpcImNyZWF0aW9uX3RpbWVcIixcImFyZ3NcIjpcIntcXFwic3RhcnRfeWVhclxcXCI6XFxcIjIwMjJcXFwiLFxcXCJzdGFydF9tb250aFxcXCI6XFxcIjIwMjItMTJcXFwiLFxcXCJlbmRfeWVhclxcXCI6XFxcIjIwMjJcXFwiLFxcXCJlbmRfbW9udGhcXFwiOlxcXCIyMDIyLTEyXFxcIixcXFwic3RhcnRfZGF5XFxcIjpcXFwiMjAyMi0xMi0yMFxcXCIsXFxcImVuZF9kYXlcXFwiOlxcXCIyMDIyLTEyLTIwXFxcIn1cIn0ifQ%3D%3D' },
    { 'name': 'Facebook Stream',    'type': 'Cricket',  'lang': 'Any',      'link': 'https://www.facebook.com/search/videos?q=cricket%20live&filters=eyJ2aWRlb3NfbGl2ZTowIjoie1wibmFtZVwiOlwidmlkZW9zX2xpdmVcIixcImFyZ3NcIjpcIlwifSIsInJwX2NyZWF0aW9uX3RpbWU6MCI6IntcIm5hbWVcIjpcImNyZWF0aW9uX3RpbWVcIixcImFyZ3NcIjpcIntcXFwic3RhcnRfeWVhclxcXCI6XFxcIjIwMjJcXFwiLFxcXCJzdGFydF9tb250aFxcXCI6XFxcIjIwMjItMTJcXFwiLFxcXCJlbmRfeWVhclxcXCI6XFxcIjIwMjJcXFwiLFxcXCJlbmRfbW9udGhcXFwiOlxcXCIyMDIyLTEyXFxcIixcXFwic3RhcnRfZGF5XFxcIjpcXFwiMjAyMi0xMi0yMFxcXCIsXFxcImVuZF9kYXlcXFwiOlxcXCIyMDIyLTEyLTIwXFxcIn1cIn0ifQ%3D%3D' }
];
/*
http://tv.bdixsports.com/live-tv/t-sports-live.html
https://crichd.tv/web
https://www.viprow.nu/
http://reddit.thecrackstreams.net/
https://sites.google.com/view/bdixftpserverlist/live-tv-servers?pli=1
https://sportv.ws/
*/
function buildTable(data) {
    var table = document.getElementById('tbd');

    for (var i = 0; i < data.length; i++) {
        var row = `
        <tr>
            <td>${data[i].name}</td>
            <td>${data[i].type}</td>
            <td>${data[i].lang}</td>
            <td><a href=${data[i].link}>Watch</a></td>
        </tr>
        `;
        table.innerHTML += row;
    }

}
buildTable(Tv);
