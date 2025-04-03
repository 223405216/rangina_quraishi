// Formun submit olayını dinle
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    const form = event.target; // Formu al
    const formData = new FormData(form); // Form verilerini topla

    // Formspree'ye POST isteği gönder
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Başarılı mesajı göster
            alert('Mesajınız başarıyla gönderildi!');
            form.reset(); // Formu sıfırla
        } else {
            // Hata mesajı göster
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        }
    })
    .catch(error => {
        // Ağ hatası durumunda mesaj göster
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    });
});
