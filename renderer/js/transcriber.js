const g = document.getElementById.bind(document);

const audioFileBtn = g('audioFileBtn');

audioFileBtn.addEventListener('click', handleOpenAudioFile);

async function handleOpenAudioFile(){
    const filePath = await window.ipc.openFile();
    console.log(filePath);
}