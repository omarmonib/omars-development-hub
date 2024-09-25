import React from 'react';
import '../StyleDesc.css';

function ToDoDescription() {
    return (
        <div className="description-wrapper">
            {/* English Version */}
            <div className="description-container english-version">
                <h2 className="description-title">To-Do List Component</h2>
                <h3 className="description-subtitle">Description:</h3>
                <p>
                    The "To-Do List" project is a task management application that allows users to add, delete, and manage tasks efficiently. It helps users stay organized by providing a simple interface to keep track of their to-do items.
                </p>
                <h3 className="description-subtitle">Features:</h3>
                <ul className="description-list">
                    <li>Add new tasks easily with a clear input field.</li>
                    <li>Delete tasks with a simple click on the delete button.</li>
                    <li>Tasks are displayed in a structured list format for easy management.</li>
                </ul>
                <h3 className="description-subtitle">Key Features:</h3>
                <ul className="description-list">
                    <li>Intuitive and user-friendly design.</li>
                    <li>React state management for smooth task handling.</li>
                    <li>Custom CSS for modern and clean visuals.</li>
                    <li>Responsive design for mobile and desktop compatibility.</li>
                </ul>
            </div>

            {/* Arabic Version */}
            <div className="description-container arabic-version">
                <h2 className="description-title">مكون "قائمة المهام"</h2>
                <h3 className="description-subtitle">الوصف:</h3>
                <p>
                    مشروع "قائمة المهام" هو تطبيق لإدارة المهام يتيح للمستخدمين إضافة المهام وحذفها وإدارتها بكفاءة. يساعد المستخدمين على تنظيم مهامهم من خلال واجهة بسيطة لتتبع العناصر التي يجب القيام بها.
                </p>
                <h3 className="description-subtitle">الوظائف:</h3>
                <ul className="description-list">
                    <li>إضافة المهام الجديدة بسهولة عبر حقل إدخال واضح.</li>
                    <li>حذف المهام بنقرة بسيطة على زر الحذف.</li>
                    <li>عرض المهام في شكل قائمة منظم لسهولة الإدارة.</li>
                </ul>
                <h3 className="description-subtitle">المميزات الرئيسية:</h3>
                <ul className="description-list">
                    <li>تصميم بسيط وسهل الاستخدام.</li>
                    <li>إدارة الحالة في React لتسهيل التعامل مع المهام.</li>
                    <li>تصميم CSS مخصص لمظهر عصري ونظيف.</li>
                    <li>تصميم متجاوب متوافق مع أجهزة الجوال والحواسيب المكتبية.</li>
                </ul>
            </div>
        </div>
    );
}

export default ToDoDescription;
