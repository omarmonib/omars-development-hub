import React from 'react';
import '../StyleDesc.css';

function CountdownDescription() {
    return (
        <div className="description-wrapper">
            {/* English Version */}
            <div className="description-container english-version">
                <h2 className="description-title">Countdown Timer Component</h2>
                <h3 className="description-subtitle">Description:</h3>
                <p>
                    The "Countdown Timer" project is a simple application that allows users to set an initial time and countdown to zero. It provides an interactive interface with buttons to start, pause, resume, and reset the timer, enhancing user engagement while maintaining an intuitive design.
                </p>
                <h3 className="description-subtitle">Features:</h3>
                <ul className="description-list">
                    <li>Interactive user interface with buttons for timer control.</li>
                    <li>Dynamic display of countdown values based on user settings.</li>
                    <li>Reset function to set the timer back to the initial value.</li>
                </ul>
                <h3 className="description-subtitle">Key Features:</h3>
                <ul className="description-list">
                    <li>User-friendly design with clear instructions.</li>
                    <li>React state management for real-time updates.</li>
                    <li>Custom CSS for an appealing look.</li>
                    <li>Prevents negative countdown values.</li>
                </ul>
            </div>

            {/* Arabic Version */}
            <div className="description-container arabic-version">
                <h2 className="description-title">مكون "عداد التنازلي"</h2>
                <h3 className="description-subtitle">الوصف:</h3>
                <p>
                    مشروع "عداد التنازلي" هو تطبيق بسيط يمكّن المستخدمين من ضبط وقت مبدئي والعد التنازلي حتى الصفر. يوفر واجهة تفاعلية مع أزرار لبدء وإيقاف واستئناف وإعادة تعيين العداد، مما يعزز تفاعل المستخدم مع الحفاظ على تصميم سهل الاستخدام.
                </p>
                <h3 className="description-subtitle">الوظائف:</h3>
                <ul className="description-list">
                    <li>واجهة مستخدم تفاعلية مع أزرار للتحكم في العداد.</li>
                    <li>عرض ديناميكي لقيم العد التنازلي بناءً على إعدادات المستخدم.</li>
                    <li>وظيفة إعادة تعيين لإعادة العداد إلى القيمة الأولية.</li>
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

export default CountdownDescription;
