import React from 'react';
import '../StyleDesc.css';

function WelcomeDescription() {
    return (
        <div className="description-wrapper">
            {/* English Version */}
            <div className="description-container english-version">
                <h1 className="description-title">Welcome Message Component</h1>
                <section className="description-content welcome-project-description">
                    <h2 className="description-subtitle">Description:</h2>
                    <p>This project is a React component that displays a personalized greeting based on user input and the time of day. The application features an input field where users can enter their name, and the component dynamically shows a message based on that input, providing immediate feedback and engagement.</p>

                    <h3 className="description-subtitle">Features:</h3>
                    <ul className="description-list">
                        <li>User types their name in the input field.</li>
                        <li>If a name is provided, it displays "Welcome, [username]." If empty, it shows a time-based greeting.</li>
                    </ul>

                    <h3 className="description-subtitle">Key Features:</h3>
                    <ul className="description-list">
                        <li>User-friendly interface with clear instructions.</li>
                        <li>Dynamic greetings based on the time of day.</li>
                        <li>Utilizes React state for smooth updates.</li>
                    </ul>
                </section>
            </div>

            {/* English Version */}
            <div className="description-container arabic-version">
                <h1 className="description-title">مكون رسالة الترحيب</h1>
                <section className="description-content welcome-project-description">
                    <h2 className="description-subtitle">الوصف:</h2>
                    <p>يتعلق هذا المشروع بإنشاء مكون React يعرض رسالة ترحيب مخصصة بناءً على إدخال المستخدم والوقت الحالي. يحتوي التطبيق على حقل إدخال حيث يمكن للمستخدمين إدخال اسمهم، ويعرض المكون رسالة بناءً على هذا الإدخال، مما يوفر ردود فعل فورية ويعزز التفاعل.</p>

                    <h3 className="description-subtitle">الوظائف:</h3>
                    <ul className="description-list">
                        <li>يكتب المستخدم اسمه في حقل الإدخال.</li>
                        <li>إذا تم تقديم اسم، تعرض الرسالة "مرحبًا، [اسم المستخدم]." إذا كان فارغًا، تظهر تحية تعتمد على الوقت.</li>
                    </ul>

                    <h3 className="description-subtitle">الميزات الرئيسية:</h3>
                    <ul className="description-list">
                        <li>واجهة مستخدم سهلة مع تعليمات واضحة.</li>
                        <li>تحيات ديناميكية تعتمد على الوقت الحالي.</li>
                        <li>استخدام حالة React لتحديث سلس.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default WelcomeDescription;
