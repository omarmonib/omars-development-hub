import React from 'react';
import '../StyleDesc.css';

function Description() {
    return (
        <div className="description-wrapper">
            {/* English Version */}
            <div className="description-container english-version">
                <h2 className="description-title">Click Counter Component</h2>
                <h3 className="description-subtitle">Description:</h3>
                <p>
                    The "Click Counter" project is a simple application that enables users to increase, decrease, and reset a counter displayed on the screen. It provides an interactive interface with buttons for each action, enhancing user engagement while keeping the design intuitive and user-friendly.
                </p>
                <h3 className="description-subtitle">Features:</h3>
                <ul className="description-list">
                    <li>Interactive user interface with buttons for each action.</li>
                    <li>Counter values displayed dynamically based on user interaction.</li>
                    <li>Reset function to set the counter back to zero.</li>
                </ul>
                <h3 className="description-subtitle">Key Features:</h3>
                <ul className="description-list">
                    <li>User-friendly design with clear instructions.</li>
                    <li>React state management for seamless updates.</li>
                    <li>Custom CSS for an appealing look.</li>
                    <li>Prevents negative values for the counter.</li>
                </ul>
            </div>

            {/* Arabic Version */}
            <div className="description-container arabic-version">
                <h2 className="description-title">مكون "عداد النقرات"</h2>
                <h3 className="description-subtitle">الوصف:</h3>
                <p>
                    مشروع "عداد النقرات" هو تطبيق بسيط يمكّن المستخدمين من زيادة أو تقليل العداد وإعادة تعيينه. يوفر واجهة تفاعلية مع أزرار لكل إجراء، مما يعزز تفاعل المستخدم مع الحفاظ على تصميم سهل الاستخدام.
                </p>
                <h3 className="description-subtitle">الوظائف:</h3>
                <ul className="description-list">
                    <li>واجهة مستخدم تفاعلية مع أزرار لكل إجراء.</li>
                    <li>عرض قيم العداد بشكل ديناميكي بناءً على تفاعل المستخدم.</li>
                    <li>وظيفة إعادة تعيين لإعادة العداد إلى الصفر.</li>
                </ul>
                <h3 className="description-subtitle">المميزات الرئيسية:</h3>
                <ul className="description-list">
                    <li>تصميم سهل الاستخدام مع تعليمات واضحة.</li>
                    <li>إدارة الحالة في React لتحديث سلس.</li>
                    <li>تصميم CSS مخصص لجاذبية بصرية.</li>
                    <li>يمنع القيم السلبية للعداد.</li>
                </ul>
            </div>
        </div>
    );
}

export default Description;
