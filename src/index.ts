import miku from './87679624_p0.jpg'

(() => {
    const img = new Image();
    img.src = miku;
    console.log(miku)
    img.onload = () => {
        console.log("%c ", `background: no-repeat url("${miku}");padding:${img.height * .5 * .25}px ${img.width * .5 * .25}px;background-size: 100%;`)
    }
})()
