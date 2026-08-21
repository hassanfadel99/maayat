document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', function() {
        // حفظ المحتوى الأصلي للزر
        const originalContent = this.innerHTML;
        
        // تغيير محتوى الزر ليعرض أيقونة تحميل تدور مؤقتاً
        this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>جاري بدء التحميل...</span>';
        
        // إعادة الزر لشكله الأصلي بعد 3 ثواني (الوقت الكافي لبدء تنزيل التطبيق)
        setTimeout(() => {
            this.innerHTML = originalContent;
        }, 3000);
    });
});