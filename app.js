
document.querySelectorAll('input[name="uploadType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        document.getElementById('fileUploadArea').style.display = e.target.value === 'device' ? 'block' : 'none';
        document.getElementById('linkUploadArea').style.display = e.target.value === 'link' ? 'block' : 'none';
    });
});

document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const type = document.querySelector('input[name="uploadType"]:checked').value;
    const name = document.getElementById('clientName').value;
    const link = document.getElementById('externalLink').value;
    
    const phoneNumber = "972549268465";
    let message = `🚀 *פרויקט חדש ב-EditValue!*%0A%0A👤 *צלם:* ${name}%0A📂 *סוג:* ${type === 'device' ? 'מכשיר' : 'לינק'}%0A`;
    if(link) message += `🔗 *לינק:* ${link}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    alert('מעביר אותך לוואטסאפ לאישור סופי... 💜');
});
