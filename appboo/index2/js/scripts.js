/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

    document.addEventListener("DOMContentLoaded", function() {
        // قم بتحديد العناصر التي تريد تطبيق الأنميشن عليها هنا
        const animatedElements = document.querySelectorAll('.col.mb-5');

        animatedElements.forEach((element, index) => {
            // قم بتأخير كل عنصر بقدر ارتفاعه في الصفحة
            const delay = index * 100; // قد تحتاج إلى ضبط هذا الرقم

            // قم بتعيين التأخير باستخدام خاصية animation-delay
            element.style.animationDelay = `${delay}ms`;
        });
    });

const contentSlider = document.querySelector('.content-slider');
const contentItems = document.querySelectorAll('.content-item');

let currentIndex = 0;

function slideContent() {
    currentIndex = (currentIndex + 1) % contentItems.length;
    const translateValue = -currentIndex * 100 + '%';
    contentSlider.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(slideContent, 50001111); // يتغير المحتوى كل 5 ثواني
