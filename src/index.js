import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
 
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'Gm3wTg.lAum2A',
    wsHost: 'realtime-pusher.ably.io',
    wsPort: 443,
    disableStats: true,
    encrypted: true,
    cluster: 'eu'
});

window.Echo.channel('property')
            .listen('.property.created', (e) => {
            let ul = document.createElement('ul')

            for (const key in e.payload) {
                let li = document.createElement('li')
                li.innerHTML = `${key} : ${e.payload[key]}`
                ul.appendChild(li)

                console.log(key, e.payload[key])
            }
            document.getElementById("property").appendChild(ul)

            console.log("new event", e)
});