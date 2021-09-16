const commentInput = document.querySelectorAll('.comment_input')

for (let inputs of commentInput) {
    inputs.addEventListener('keydown',(e) => {
        if (e.code === 'Enter') {
            const postsCard = inputs.parentElement
            const comment = inputs.value
            const commentdiv = document.createElement('div')
            commentdiv.classList.toggle('comment_div')
            const commenth2 = document.createElement('h2')
            commenth2.classList.toggle('commenth2')
            commenth2.innerHTML = comment
            postsCard.append(commentdiv)
            commentdiv.append(commenth2)
        }
    })
}