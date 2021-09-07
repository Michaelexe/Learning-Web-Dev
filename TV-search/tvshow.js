const searchInput = document.querySelector('input')
const container = document.querySelector('#container')

searchInput.addEventListener('keydown', async (event) => {
    if (event.code === 'Enter') {
        const Allcards = document.querySelectorAll('.card')
        for (cards of Allcards) {
            cards.remove()
        }
        const search = searchInput.value
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        const data = await res.json()
        console.log(data)
        for (result of data) {
            const card = document.createElement('div')
            card.classList.toggle('card')
            container.append(card)
            if (result.show.image){
                const img = document.createElement('img')
                img.src = result.show.image.medium
                card.append(img)
            }
            
            const header = document.createElement('h1')
            header.innerHTML = result.show.name
            card.append(header)

            const rating = document.createElement('h2')
            rating.innerHTML = `&#11088 ${result.show.rating.average}` 
            card.append(rating)
        }
    }
})