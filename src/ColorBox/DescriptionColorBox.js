import React from 'react';
import '../StyleDesc.css';

function DescriptionColorBox() {
    return (
        <div className="description-wrapper">
            {/* English Version */}
            <div className="description-container english-version">
                <h2 className="description-title">Color Box Component</h2>
                <h3 className="description-subtitle">Description:</h3>
                <p>
                    The "Color Box" project is an interactive application where users can click on a box to change its background color randomly. This is achieved by generating a random RGB value every time the box is clicked, making the interaction dynamic and fun.
                </p>
                <h3 className="description-subtitle">Features:</h3>
                <ul className="description-list">
                    <li>Interactive box that changes color upon clicking.</li>
                    <li>Random RGB color generation for every click.</li>
                    <li>Smooth transition effect when the color changes.</li>
                </ul>
                <h3 className="description-subtitle">Key Features:</h3>
                <ul className="description-list">
                    <li>React state management to handle color changes.</li>
                    <li>Custom CSS for smooth color transitions and responsive design.</li>
                    <li>Ensures user engagement through visual feedback.</li>
                </ul>
            </div>

            {/* Arabic Version */}
            <div className="description-container arabic-version">
                <h2 className="description-title">مكون "صندوق تغيير اللون"</h2>
                <h3 className="description-subtitle">الوصف:</h3>
                <p>
                    مشروع "صندوق تغيير اللون" هو تطبيق تفاعلي يسمح للمستخدمين بالنقر على صندوق لتغيير لونه تلقائيًا. يتم ذلك عن طريق توليد قيم عشوائية لنظام RGB في كل مرة يتم النقر على الصندوق، مما يجعل التفاعل ديناميكيًا وممتعًا.
                </p>
                <h3 className="description-subtitle">الوظائف:</h3>
                <ul className="description-list">
                    <li>صندوق تفاعلي يتغير لونه عند النقر عليه.</li>
                    <li>توليد لون RGB عشوائي مع كل نقرة.</li>
                    <li>تأثير انتقال سلس عند تغيير اللون.</li>
                </ul>
                <h3 className="description-subtitle">المميزات الرئيسية:</h3>
                <ul className="description-list">
                    <li>إدارة الحالة في React للتحكم في تغييرات اللون.</li>
                    <li>CSS مخصص لتأثيرات الانتقال السلسة والتصميم المتجاوب.</li>
                    <li>يعزز تفاعل المستخدم من خلال ردود فعل بصرية.</li>
                </ul>
            </div>
        </div>
    );
}

export default DescriptionColorBox;
