document.addEventListener('DOMContentLoaded', () => {

    // const button = document.getElementById('testplay')

    let audioCtx = new AudioContext()

    let buttons = {
        repeat: document.getElementsByClassName('controller-controls-icon-replay')[0]
    }


    
    // small functions
    let smallfunctions = {
        repeat: () => {

            buttons.repeat.addEventListener('click', () => {

                buttons.repeat.classList.toggle('active')

            })

        }
    }

    for (let [i, v] of Object.entries(smallfunctions)) {
        v()
    }




    // button.addEventListener('click', async () => {

    //     fetch(`/stest`).then((res) => {
    //         return res.arrayBuffer()
    //     }).then((buffer) => {

    //         console.log(buffer)

    //         audioCtx.decodeAudioData(buffer, (decodedData) => {

    //             console.log(decodedData)

    //             let source = audioCtx.createBufferSource()

    //             source.buffer = decodedData
    //             source.connect(audioCtx.destination)

    //             source.start(0)

    //         })

    //     })

    // })




})