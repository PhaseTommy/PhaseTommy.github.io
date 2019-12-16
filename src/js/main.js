const videos = document.querySelectorAll("video")

videos.forEach(video => {
    video.addEventListener("mouseover", function () {
        // phaseText.style.display = 'block';
        this.play()
    })

    video.addEventListener("mouseout", function () {
        // phaseText.style.display = 'none';
        this.pause()
    })


})

const phaseText = document.getElementById('phaseText') pha