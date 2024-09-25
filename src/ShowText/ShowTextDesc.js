import React from 'react';
import '../StyleDesc.css';

function ShowTextDesc() {
    return (
        <div className="description-wrapper">
            {/* English Version */}
            <div className="description-container english-version">
                <h2 className="description-title">Toggle Text with Validation</h2>
                <h3 className="description-subtitle">Description:</h3>
                <p>
                    The "Toggle Text with Validation" project is a React application that allows users to enter custom text and validates it before displaying. The interface features an input field and a button to toggle visibility, enhancing user experience through immediate feedback and clear validation messages.
                </p>
                <h3 className="description-subtitle">Features:</h3>
                <ul className="description-list">
                    <li>Input validation to ensure text is not empty.</li>
                    <li>Dynamic toggle functionality to show or hide text.</li>
                    <li>Scroll support for overflowing text content.</li>
                </ul>
                <h3 className="description-subtitle">Key Features:</h3>
                <ul className="description-list">
                    <li>Clear and interactive user interface for better engagement.</li>
                    <li>Utilizes React state management for dynamic updates.</li>
                    <li>Custom styling to enhance visual appeal.</li>
                </ul>
            </div>

            {/* English Version */}
            <div className="description-container arabic-version">
                <h2 className="description-title">عرض النص مع التحقق</h2>
                <h3 className="description-subtitle">الوصف:</h3>
                <p>
                    مشروع "عرض النص مع التحقق" هو تطبيق React يتيح للمستخدمين إدخال نص مخصص والتحقق منه قبل عرضه. يتميز الواجهة بحقل إدخال وزر لتبديل الرؤية، مما يعزز تجربة المستخدم من خلال ردود الفعل الفورية ورسائل التحقق الواضحة.
                </p>
                <h3 className="description-subtitle">الوظائف:</h3>
                <ul className="description-list">
                    <li>التحقق من صحة الإدخال لضمان عدم كون النص فارغًا.</li>
                    <li>وظيفة تبديل ديناميكية لعرض أو إخفاء النص.</li>
                    <li>دعم التمرير لمحتوى النص الذي يتجاوز الحدود.</li>
                </ul>
                <h3 className="description-subtitle">المميزات الرئيسية:</h3>
                <ul className="description-list">
                    <li>واجهة مستخدم واضحة وتفاعلية لتحسين التفاعل.</li>
                    <li>يستخدم إدارة الحالة في React لتحديث ديناميكي.</li>
                    <li>تصميم مخصص لتعزيز الجاذبية البصرية.</li>
                </ul>
            </div>
        </div>
    );
}

export default ShowTextDesc;
