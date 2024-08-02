"use client";
import React from 'react';

const Form = () => {
    return (
        <div className='max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg'>
            <h1 className='flex justify-center text-3xl font-bold text-gray-900'>Welcome to Resume-Builder</h1>
            <p className='flex justify-center mt-2 text-gray-600 text-center'>
                A simple tool to create a professional resume in minutes. Fill in your details below.
            </p>

            <form className='mt-8'>
                <div className="p-6 border-b border-gray-300">
                    <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="current-position" className="block text-sm font-medium text-gray-700">
                                Current Position
                            </label>
                            <input
                                id="current-position"
                                name="current-position"
                                type="text"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="work-loc" className="block text-sm font-medium text-gray-700">
                                Working At
                            </label>
                            <input
                                id="work-loc"
                                name="work-loc"
                                type="text"
                                placeholder="Company's Name"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder='you@example.com'
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                                Github Profile Link:
                            </label>
                            <input
                                id="github"
                                name="github"
                                type="url"
                                placeholder="https://github.com/username"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                                LinkedIn Profile Link:
                            </label>
                            <input
                                id="linkedin"
                                name="linkedin"
                                type="url"
                                placeholder='https://linkedin.com/in/username'
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                About
                            </label>
                            <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Write a few sentences about yourself."
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Residential Address
                            </label>
                            <input
                                id="street-address"
                                name="street-address"
                                type="text"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-6 border-b border-gray-300">
                    <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                        <div>
                            <label htmlFor="institute-name" className="block text-sm font-medium text-gray-700">
                                Name of Institute
                            </label>
                            <input
                                id="institute-name"
                                name="institute-name"
                                type="text"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="course-name" className="block text-sm font-medium text-gray-700">
                                Course Name / Degree Name
                            </label>
                            <input
                                id="course-name"
                                name="course-name"
                                type="text"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Duration
                            </label>
                            <div className="mt-2 flex space-x-4">
                                <div className="flex-1">
                                    <label htmlFor="start-month" className="block text-sm font-medium text-gray-700">
                                        Start Month
                                    </label>
                                    <select
                                        id="start-month"
                                        name="start-month"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select Start Month</option>
                                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                            <option key={index} value={(index + 1).toString().padStart(2, '0')}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="start-year" className="block text-sm font-medium text-gray-700">
                                        Start Year
                                    </label>
                                    <select
                                        id="start-year"
                                        name="start-year"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select Start Year</option>
                                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="end-month" className="block text-sm font-medium text-gray-700">
                                        End Month
                                    </label>
                                    <select
                                        id="end-month"
                                        name="end-month"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select End Month</option>
                                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                            <option key={index} value={(index + 1).toString().padStart(2, '0')}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="end-year" className="block text-sm font-medium text-gray-700">
                                        End Year
                                    </label>
                                    <select
                                        id="end-year"
                                        name="end-year"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select End Year</option>
                                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 border-b border-gray-300">
                    <h2 className="text-2xl font-semibold text-gray-800">Junior College Education</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                        <div>
                            <label htmlFor="junior-college-name" className="block text-sm font-medium text-gray-700">
                                Junior College Name
                            </label>
                            <input
                                id="junior-college-name"
                                name="junior-college-name"
                                type="text"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Duration
                            </label>
                            <div className="mt-2 flex space-x-4">
                                <div className="flex-1">
                                    <label htmlFor="start-month" className="block text-sm font-medium text-gray-700">
                                        Start Month
                                    </label>
                                    <select
                                        id="start-month"
                                        name="start-month"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select Start Month</option>
                                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                            <option key={index} value={(index + 1).toString().padStart(2, '0')}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="start-year" className="block text-sm font-medium text-gray-700">
                                        Start Year
                                    </label>
                                    <select
                                        id="start-year"
                                        name="start-year"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select Start Year</option>
                                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="end-month" className="block text-sm font-medium text-gray-700">
                                        End Month
                                    </label>
                                    <select
                                        id="end-month"
                                        name="end-month"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select End Month</option>
                                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                            <option key={index} value={(index + 1).toString().padStart(2, '0')}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex-1 border-b border-gray-300">
                                    <label htmlFor="end-year" className="block text-sm font-medium text-gray-700">
                                        End Year
                                    </label>
                                    <select
                                        id="end-year"
                                        name="end-year"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select End Year</option>
                                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-b border-gray-300">
                    <h2 className="text-2xl font-semibold text-gray-800">School Education</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                        <div>
                            <label htmlFor="school-name" className="block text-sm font-medium text-gray-700">
                                School Name
                            </label>
                            <input
                                id="school-name"
                                name="school-name"
                                type="text"
                                className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Duration
                            </label>
                            <div className="mt-2 flex space-x-4">
                                <div className="flex-1">
                                    <label htmlFor="start-month" className="block text-sm font-medium text-gray-700">
                                        Start Month
                                    </label>
                                    <select
                                        id="start-month"
                                        name="start-month"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select Start Month</option>
                                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                            <option key={index} value={(index + 1).toString().padStart(2, '0')}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="start-year" className="block text-sm font-medium text-gray-700">
                                        Start Year
                                    </label>
                                    <select
                                        id="start-year"
                                        name="start-year"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select Start Year</option>
                                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="end-month" className="block text-sm font-medium text-gray-700">
                                        End Month
                                    </label>
                                    <select
                                        id="end-month"
                                        name="end-month"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select End Month</option>
                                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                            <option key={index} value={(index + 1).toString().padStart(2, '0')}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="end-year" className="block text-sm font-medium text-gray-700">
                                        End Year
                                    </label>
                                    <select
                                        id="end-year"
                                        name="end-year"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select End Year</option>
                                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' border-b border-gray-300'>
                    <div className="p-6 border-b border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                            <div>
                                <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                    Project Name
                                </label>
                                <input
                                    id="project-name"
                                    name="project-name"
                                    type="text"
                                    className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="project-intro" className="block text-sm font-medium text-gray-700">
                                    Introduction
                                </label>
                                <input
                                    id="project-intro"
                                    name="project-intro"
                                    type="text"
                                    className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Project Details
                                </label>
                                <div className="mt-2 space-y-4">
                                    {/* Project Details Inputs */}
                                    {[1, 2, 3, 4].map(index => (
                                        <textarea
                                            key={index}
                                            id={`project-detail-${index}`}
                                            name={`project-detail-${index}`}
                                            rows={4}
                                            placeholder={`Detail ${index}`}
                                            className="p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="project-tags" className="block text-sm font-medium text-gray-700">
                                    Tags (Tech Stack)
                                </label>
                                <input
                                    id="project-tags"
                                    name="project-tags"
                                    type="text"
                                    placeholder="e.g., React, Node.js, TailwindCSS"
                                    className="mt-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-6'>
                    <button
                        type="submit"
                        className='w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                        Save and Next
                    </button>
                </div>
            </form >
        </div>
    );
};

export default Form;
