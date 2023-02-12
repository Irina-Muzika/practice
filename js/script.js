const links = document.querySelectorAll('.navLink')
const sections = document.querySelectorAll('.section')

window.addEventListener('scroll', scrollList)

function scrollList() {
    const scrollY = window.scrollY
    sections.forEach(section => {
        if (section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
            links.forEach(link => {
                link.classList.remove('active')
                if (section.getAttribute('id') === link.getAttribute('href').slice(1)) {
                    link.classList.add('active')
                }
            })
        }
    })
}