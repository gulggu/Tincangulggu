function generateImage() {
    let text = document.getElementById("textInput").value;
    let bgColor = document.getElementById("bgColor").value;
    
    let outputBox = document.getElementById("imagePreview");
    let outputText = document.getElementById("outputText");
    
    outputBox.style.backgroundColor = bgColor;
    outputText.innerText = text;
    
    document.getElementById("downloadBtn").style.display = "block";
}

function downloadImage() {
    let outputBox = document.getElementById("imagePreview");

    html2canvas(outputBox).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "text-image.png";
        link.click();
    });
}
