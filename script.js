document.addEventListener("DOMContentLoaded", function() {
    // تحديد أزرار التحميل فقط (الأندرويد والآيفون) لتطبيق تأثير التحميل
    const downloadBtns = document.querySelectorAll('.android-btn, .ios-btn');

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // استهداف عنصر النص والأيقونة داخل الزر
            const textSpan = this.querySelector('.btn-text');
            const icon = this.querySelector('i');
            
            // حفظ المحتوى الأصلي للزر
            const originalText = textSpan.innerText;
            const originalIconClass = icon.className;
            
            // تغيير محتوى الزر ليعرض أيقونة تحميل تدور مؤقتاً
            icon.className = 'fa-solid fa-spinner fa-spin';
            textSpan.innerText = 'جاري التحويل...';
            
            // إعادة الزر لشكله الأصلي بعد 3 ثواني
            setTimeout(() => {
                icon.className = originalIconClass;
                textSpan.innerText = originalText;
            }, 3000);
        });
    });
});