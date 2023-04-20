const Tv = [
    { 'name': 'Toffee',             'type': 'Both',     'lang': 'English',  'link': 'https://toffeelive.com/live-tv/all' },
    { 'name': 'Rabbitholebd',       'type': 'Both',     'lang': 'English',  'link': 'https://yewtu.be/channel/UCNU0Vv6U1xZS82cIQrgDeqw' },
    { 'name': 'Totalsportek',       'type': 'Football', 'lang': 'English',  'link': 'https://totalsportek.pro/soccer/' },
    { 'name': 'Vip Stand',          'type': 'Football', 'lang': 'English',  'link': 'https://www.vipstand.se/live-sports-stream' },
    { 'name': 'Cricstream',         'type': 'Cricket',  'lang': 'English',  'link': 'https://watch.cricstream.me/' },
    { 'name': 'Crichdtv',           'type': 'Cricket',  'lang': 'English',  'link': 'https://crichd.tv/' },
    { 'name': 'Beinmatch',          'type': 'Football', 'lang': 'Arabic',   'link': 'https://beinmatch.one/' },
    { 'name': 'Yallashoot',         'type': 'Football', 'lang': 'Arabic',   'link': 'https://stad.yalla-shoot.io/6dec/' }
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
