const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

 const characters = {
     'anthony bridgerton': {
        'name': "Anthony Bridgerton",
        'description':  'Eldest of the 12 Bridgerton siblings.  Inherited the role of Viscount Bridgerton at age 17 after his father, Edmund died.',
        'likes':  'hunting',
        'dislikes': 'losing at Pall-mall',
        'image': 'https://static.wikia.nocookie.net/bridgerton/images/8/81/Anthony_2x07-4.png/revision/latest?cb=20220428082749',
        'Quote':  'You are the bane of my existence and the object of all my desires.'
     },

    'daphne bridgerton':{
        'name':  'Daphne Bridgerton',
        'description':   'oldest Bridgerton female, 4th oldest sibling overall.  In season 2, marries the Duke of Hastings, Simon Bassett.', 
        'likes': 'children',
        'dislikes': 'dishonesty',
        'image': 'https://static.wikia.nocookie.net/bridgerton/images/3/36/2x06DaphneBassetIB.png/revision/latest?cb=20220503215035',  
        'quote':  'I love all of you. Even the parts that you believe are too dark and too shameful. Every scar. Every flaw. Every imperfection. I love you.'
    },
    'eloise bridgerton': {
    'name': 'Eloise Bridgerton',
    'description':  'Free spirited, free-thinker .  Forth oldest Bridgerton sibling, 2nd oldest sister.',
    'likes':  'Reading.  Her passion is to become an author.',
    'dislikes':  'Traditional, stereotypical roles for women such as finding a husband, bearing children, focusing on securing a match.',
    'image': 'https://juliaquinn.com/WP/wp-content/uploads/2022/03/WAX_eloise.jpg',
    'quotes':  'If you desire the sun And moon, all you have to do ss go out and shoot at the sky. Some of us cannot.'
    },
    'Duke of Hastings'{
        'name': ['Duke of Hastings', 'Simon Basset'],
        'description': '',
        'likes': ['gooseberry pie', 'boxing'],
        'dislikes': ['being chased around by the Mamas of the "ton" early in Season 1', 'being reminded that his father disowned him for having a stammer'],
        'image': 'https://www.filmsjackets.com/image/cache/catalog/Bridgerton%20S02%20Simon%20Basset%20Grey%20Tailcoat/Bridgerton-Simon-Basset-Grey-Tailcoat-1100x1100h.jpg',
        'quote': 'To meet a beautiful woman is one thing, but to meet your best friend in the most beautiful of women is something entirely apart.'
        
    }
    'unknown': {
        'name': 'unknown',
        'description': 'unknown',
        'likes': 'unknown',
        'dislikes': 'unknown',
        'image': 'unknown',
        'quote': 'uknown'
    }
 }

 app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:name', (request, response) =>{ 
    const characterName =request.params.name.toLowerCase()
    //conditional to check if character is in database
    if (characters[characterName]){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
    
})
app.listen(process.env.PORT || PORT, () => {
    console.log (`The server is now running on port ${PORT}!  Betta go catch it!`)
})