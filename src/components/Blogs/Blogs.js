import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div>
                <ul>Semantic tag কি?</ul>
                <li>Semantic tag দ্বারা অর্থযুক্ত ট্যাগসমূহকে বোঝায়। যে সব ট্যাগ, তার মধ্যে থাকা উপাদানটিকে অর্থবহ করে তুলে। যেমন : b এবং strong ট্যাগ একই কাজ (Bold করার কাজ) করলে ও b এর বদলে semantic ট্যাগ strong কে ব্যবহার করা বেশি যুক্তিযুক্ত। কারন b ট্যাগ নিজে কোন অর্থ বহন করে না কিন্তু strong ট্যাগ নিজে অর্থ বহন করে।</li>
                <li>কিছু semantic ট্যাগ হল header, nav, main, section, article, aside, footer, table, form, mark, strong ইত্যাদি।</li>
            </div>
            <div>
                <ul>Inline, Block and Inline-Block এলিমেন্টস এর মধ্যে পার্থক্য কি?</ul>
                <li>HTML এর এলিমেন্ট গুলো সাধারণত ২ ধরণের : <br /> &nbsp; &nbsp;
                    ১. Block (ব্লক) লেভেল এলিমেন্ট <br /> &nbsp; &nbsp;
                    ২. Inline (ইনলাইন) লেভেল এলিমেন্ট</li>
                <li>ব্লক এলিমেন্ট গুলো প্যারেন্ট এলিমেন্ট এর সমস্ত জায়গা জুড়ে থাকে। আর ইনলাইন এলিমেন্ট গুলো একটার পর একটা বসতে থাকে : একটা লাইন ধরে। ব্লক এলিমেন্ট গুলো শুরু হয় সব সময় নতুন লাইন থেকে।  সাধারণত ব্লক এলিমেন্ট এর ভেতর ইনলাইন বা ব্লক এলিমেন্ট ২টাই থাকতে পারে।  যেমন div এই এলিমেন্ট এর ভেতর অন্য div, p ব্লক এলিমেন্ট অথবা ইনলাইন এলিমেন্ট span, a এলিমেন্ট থাকতে পারে। ইনলাইন এলিমেন্ট এর ভেতর তথ্য (data) অথবা অন্য কোনো ইনলাইন এলিমেন্ট থাকে।</li>
            </div>
        </div>
    );
};

export default Blogs;