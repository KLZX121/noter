const g = document.getElementById.bind(document);

const audioFileBtn = g('audioFileBtn');
const output = g('output');
const openTranscript = g('openTranscription');

audioFileBtn.addEventListener('click', handleOpenAudioFile);

async function handleOpenAudioFile(){
    const filePath = await window.ipc.openFile();

    output.innerHTML += `Opened file: ${filePath}\ <br>`;

    const msgs = [
        ['Processing... <br>', 100], 
        ['Analysing speech pattern... <br>', 1100],
        ['Speech recognised <br>', 3000],
        ['Initiating transcription... <br>', 4000],
        ['Transcribing - 0%<br>', 5500],
        ['Transcribing - 3%<br>', 6000],
        ['Transcribing - 7%<br>', 6500],
        ['Transcribing - 13%<br>', 7000],
        ['Transcribing - 15%<br>', 7500],
        ['Transcribing - 20%<br>', 8000],
        ['Transcribing - 24%<br>', 8500],
        ['Transcribing - 29%<br>', 9000],
        ['Transcribing - 35%<br>', 9500],
        ['Transcribing - 37%<br>', 10000],
        ['Transcribing - 40%<br>', 10500],
        ['Transcribing - 42%<br>', 11000],
        ['Transcribing - 46%<br>', 11500],
        ['Transcribing - 51%<br>', 12000],
        ['Transcribing - 55%<br>', 12500],
        ['Transcribing - 58%<br>', 13000],
        ['Transcribing - 62%<br>', 13500],
        ['Transcribing - 65%<br>', 14000],
        ['Transcribing - 69%<br>', 14500],
        ['Transcribing - 73%<br>', 15000],
        ['Transcribing - 77%<br>', 15500],
        ['Transcribing - 80%<br>', 16000],
        ['Transcribing - 84%<br>', 16500],
        ['Transcribing - 88%<br>', 17000],
        ['Transcribing - 99%<br>', 17500],
        ['Transcribing - 99%<br>', 18000],
        ['Transcribing - 100%<br>', 18500],
        ['Transcription complete!<br>', 19000],
    ];
    
    msgs.forEach(msg => {
        setTimeout(() => {
            output.innerHTML = msg[0];
        }, msg[1]);
    })

    setTimeout(() => {
        openTranscript.style.display = 'block';
    }, 19000);
    
}

openTranscript.onclick = () => {
    alert('\u0D9E');
}