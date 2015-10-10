function fetchData(data){
    return window.dataStore[data.site]
}

function injectMap(){
    document.getElementById('maptarget').innerHTML = layout.partials.map
}

window.dataStore = {}

dataStore.auckland = {
    'location': 'University of Auckland',
    'dates': 'February 1-3, 2016',
    'map': 'sites/auckland.geojson',
    'days': [
        {
            'day': 'February 1',
            'sessions': [
                'Session One',
                'Session Two',
                'Session Three'
            ]
        },
        {
            'day': 'February 2',
            'sessions': [
                'Session One',
                'Session Two',
                'Session Three'
            ]
        },
        {
            'day': 'February 3',
            'sessions': [
                'Session One',
                'Session Two',
                'Session Three'
            ]
        }
    ],
    'speakers': [
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]

}

dataStore.melbourne = {
    'location': 'University of Melbourne',
    'dates': 'February 1-3, 2016',
    'map': 'sites/melbourne.geojson',
    'days': [
        {
            'day': 'February 1',
            'sessions': [
                'Session One',
                'Session Two',
                'Session Three'
            ]
        },
        {
            'day': 'February 2',
            'sessions': [
                'Session One',
                'Session Two',
                'Session Three'
            ]
        },
        {
            'day': 'February 3',
            'sessions': [
                'Session One',
                'Session Two',
                'Session Three'
            ]
        }
    ],
    'speakers': [
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'img': 'img/speaker.jpg',
            'name': 'Dr. Pika',
            'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]

}