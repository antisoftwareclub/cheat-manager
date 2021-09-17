export class CheatManager {
    static konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
    ];

    codePosition = 0;
    activated = false;
    onActivate: (() => void)[] = [];

    static shared = new CheatManager();

    constructor() {
        document.addEventListener("keydown", (e) => {
            if (this.activated) {
                return;
            }
            const requiredKey = CheatManager.konamiCode[this.codePosition];

            if (e.key === requiredKey) {
                this.codePosition += 1;

                if (this.codePosition === CheatManager.konamiCode.length) {
                    this.activated = true;
                    this.codePosition = 0;
                    this.onActivate.forEach((func) => func());
                }
            }
        });
    }

    addActivator(onActivate: () => void): void {
        this.onActivate.push(onActivate);

        if (this.activated) {
            onActivate();
        }
    }
}
