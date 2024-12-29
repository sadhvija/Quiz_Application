
function startQuiz(language) {
    const audio = document.getElementById('languageSelectAudio');

    if (audio) {
        audio.play()

            .then(() => {

                localStorage.setItem('selectedLanguage', language);
                setTimeout(() => {
                    window.location.href = '../Game_folder/questions.html';
                }, 300);
            })
            .catch((err) => {
                console.error("Audio playback failed:", err);
                localStorage.setItem('selectedLanguage', language);
                window.location.href = '../Game_folder/questions.html';
            });
    } else {
        localStorage.setItem('selectedLanguage', language);
        window.location.href = '../Game_folder/questions.html';
    }
}
function logout() {
    window.location.href = "../Login_folder/login.html"
}