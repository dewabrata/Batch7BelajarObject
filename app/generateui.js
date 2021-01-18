

class GenerateUI {

    constructor(uiPath) {

        this.uiPath = uiPath;

    }
    addComponents(...components) {

        this.textHtml = "";
        components.forEach((component) => {
            this.textHtml += component.draw();

        })

        console.log(this.textHtml);
    }

    generateUI() {
        this.uiPath.innerHTML = this.textHtml;

    }


}

export default GenerateUI;