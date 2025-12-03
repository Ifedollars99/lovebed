<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <!-- Announcement Banner -->
            <div data-aos="fade-down" class="mb-12 lg:mb-16">
                <div class="bg-black rounded-2xl p-6 lg:p-8 shadow-2xl border border-gray-200">
                    <div class="flex flex-col lg:flex-row items-center justify-between gap-4">
                        <div class="flex items-center gap-4">
                            <span class="bg-white text-black px-6 py-2 rounded-xl font-bold text-sm lg:text-base whitespace-nowrap">
                                Study Social
                            </span>
                            <div class="h-8 w-px bg-gray-600 hidden lg:block"></div>
                        </div>
                        <p class="text-white text-center lg:text-left text-sm lg:text-base font-medium flex-1">
                            A Twitter-like platform where students share notes, ask questions, and study together efficiently
                        </p>
                        <i class="bi bi-arrow-right text-white text-2xl hidden lg:block"></i>
                    </div>
                </div>
            </div>

            <!-- Main Headline -->
            <div class="text-center mb-12 lg:mb-16 space-y-6">
                <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                    Social learning made
                    <span class="block mt-4">
                        <span class="bg-gradient-to-r from-gray-900 to-black text-transparent bg-clip-text hover:from-gray-600 hover:to-gray-400 transition-all duration-300 inline-block hover:scale-105">
                            Simple & Effective
                        </span>
                    </span>
                </h1>
                
                <p class="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                    Share study notes, connect with classmates, and access lecturer content all in one social platform.
                    <span class="block mt-2">Study together, learn better.</span>
                </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                <router-link to="/signup">
                    <button class="group relative bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-gray-700 hover:to-black w-full sm:w-auto">
                        Get Started
                        <i class="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform inline-block"></i>
                    </button>
                </router-link>

                <router-link to="/signup">
                    <button class="bg-white border-2 border-black text-black px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white w-full sm:w-auto">
                        Learn More
                    </button>
                </router-link>
            </div>
        </div>

        <!-- How It Works Section -->
        <div id="how" class="bg-white py-20 lg:py-32">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
                    How It Works
                </h2>
                <p class="text-center text-gray-600 text-lg mb-16">Everything built for social learning</p>
                
                <div class="carousel-container overflow-hidden w-full rounded-3xl">
                    <div class="carousel-track flex">
                        <!-- Feature 1 -->
                        <div class="flex-shrink-0 px-4">
                            <div class="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-[350px] lg:w-[450px] h-[280px] lg:h-[320px] overflow-hidden">
                                <i class="bi bi-file-earmark-text text-5xl text-black mb-4 absolute top-8 left-8"></i>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3 absolute top-24 left-8 right-8">Share Study Notes</h3>
                                <p class="text-gray-600 absolute bottom-8 left-8 right-8">Post and share your notes with the entire community instantly.</p>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        <!-- Feature 2 -->
                        <div class="flex-shrink-0 px-4">
                            <div class="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-[350px] lg:w-[450px] h-[280px] lg:h-[320px] overflow-hidden">
                                <i class="bi bi-chat-left-text text-5xl text-black mb-4 absolute top-8 left-8"></i>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3 absolute top-24 left-8 right-8">Ask & Answer</h3>
                                <p class="text-gray-600 absolute bottom-8 left-8 right-8">Post questions and get answers from peers and lecturers in real-time.</p>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        <!-- Feature 3 -->
                        <div class="flex-shrink-0 px-4">
                            <div class="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-[350px] lg:w-[450px] h-[280px] lg:h-[320px] overflow-hidden">
                                <i class="bi bi-book text-5xl text-black mb-4 absolute top-8 left-8"></i>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3 absolute top-24 left-8 right-8">Lecturer Content</h3>
                                <p class="text-gray-600 absolute bottom-8 left-8 right-8">Access lectures, notes, and course materials directly from instructors.</p>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        <!-- Feature 4 -->
                        <div class="flex-shrink-0 px-4">
                            <div class="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-[350px] lg:w-[450px] h-[280px] lg:h-[320px] overflow-hidden">
                                <i class="bi bi-heart text-5xl text-black mb-4 absolute top-8 left-8"></i>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3 absolute top-24 left-8 right-8">Like & Engage</h3>
                                <p class="text-gray-600 absolute bottom-8 left-8 right-8">Like, comment, and share helpful content with your study community.</p>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                        
                        <!-- Duplicate items for seamless loop -->
                        <div class="flex-shrink-0 px-4">
                            <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 w-[350px] lg:w-[450px] h-[280px] lg:h-[320px] overflow-hidden">
                                <i class="bi bi-file-earmark-text text-5xl text-black mb-4 absolute top-8 left-8"></i>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3 absolute top-24 left-8 right-8">Share Study Notes</h3>
                                <p class="text-gray-600 absolute bottom-8 left-8 right-8">Post and share your notes with the entire community instantly.</p>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        <div class="flex-shrink-0 px-4">
                            <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 w-[350px] lg:w-[450px] h-[280px] lg:h-[320px] overflow-hidden">
                                <i class="bi bi-chat-left-text text-5xl text-black mb-4 absolute top-8 left-8"></i>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3 absolute top-24 left-8 right-8">Ask & Answer</h3>
                                <p class="text-gray-600 absolute bottom-8 left-8 right-8">Post questions and get answers from peers and lecturers in real-time.</p>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        <div class="flex-shrink-0 px-4">
                            <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 w-[350px] lg:w-[450px] h-[280px] lg:h-[320px] overflow-hidden">
                                <i class="bi bi-book text-5xl text-black mb-4 absolute top-8 left-8"></i>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3 absolute top-24 left-8 right-8">Lecturer Content</h3>
                                <p class="text-gray-600 absolute bottom-8 left-8 right-8">Access lectures, notes, and course materials directly from instructors.</p>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        <div class="flex-shrink-0 px-4">
                            <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 w-[350px] lg:w-[450px] h-[280px] lg:h-[320px] overflow-hidden">
                                <i class="bi bi-heart text-5xl text-black mb-4 absolute top-8 left-8"></i>
                                <h3 class="text-2xl font-bold text-gray-900 mb-3 absolute top-24 left-8 right-8">Like & Engage</h3>
                                <p class="text-gray-600 absolute bottom-8 left-8 right-8">Like, comment, and share helpful content with your study community.</p>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- For Students & Lecturers Section -->
        <div id="users" class="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
                    Built For Everyone
                </h2>
                <p class="text-center text-gray-600 text-lg mb-20">Whether you're a student or lecturer</p>

                <!-- For Students -->
                <div class="mb-20 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div class="grid lg:grid-cols-2 gap-0">
                        <div class="relative h-80 lg:h-auto overflow-hidden bg-black flex items-center justify-center">
                            <div class="text-center">
                                <i class="bi bi-people text-8xl text-white mb-4"></i>
                                <p class="text-white font-semibold text-lg">Students</p>
                            </div>
                        </div>
                        <div class="p-8 lg:p-12 flex flex-col justify-center">
                            <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">For Students</h3>
                            <div class="w-20 h-1 bg-black mb-6"></div>
                            <p class="text-gray-700 leading-relaxed text-base lg:text-lg">
                                Share your study notes with peers, ask questions and get instant answers, access all lecturer content in one place, collaborate with classmates on assignments, and build a supportive study community.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- For Lecturers -->
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div class="grid lg:grid-cols-2 gap-0">
                        <div class="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                            <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">For Lecturers</h3>
                            <div class="w-20 h-1 bg-black mb-6"></div>
                            <p class="text-gray-700 leading-relaxed text-base lg:text-lg">
                                Upload lectures, notes, and course materials easily. Communicate with students in real-time. Answer student questions directly. Monitor student engagement and progress. Build a strong relationship with your class through an interactive social platform.
                            </p>
                        </div>
                        <div class="order-1 lg:order-2 relative h-80 lg:h-auto overflow-hidden bg-black flex items-center justify-center">
                            <div class="text-center">
                                <i class="bi bi-mortarboard text-8xl text-white mb-4"></i>
                                <p class="text-white font-semibold text-lg">Lecturers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Section -->
        <div id="contact" class="bg-white py-20 lg:py-32">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                    Get In Touch
                </h2>
                <p class="text-gray-600 text-lg mb-12">Have questions? We'd love to hear from you</p>
                
                <a href="https://wa.me/2348137628419?text=Hello%20%F0%9F%91%8B%20I%20have%20questions%20about%20Study%20Social"
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="inline-block">
                    <div class="group bg-black hover:bg-gradient-to-r hover:from-gray-800 hover:to-black text-white px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <i class="bi bi-whatsapp text-5xl mb-2 group-hover:scale-110 transition-transform inline-block"></i>
                        <p class="font-semibold text-lg">Message on WhatsApp</p>
                    </div>
                </a>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <!-- Contact Info -->
                    <div>
                        <h3 class="text-2xl font-bold mb-6 text-white">Study Social</h3>
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <i class="bi bi-geo-alt-fill text-black text-xl mt-1 flex-shrink-0"></i>
                                <p class="text-gray-300 leading-relaxed">
                                    Social learning platform connecting students and lecturers worldwide.
                                </p>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="bi bi-envelope-fill text-black text-xl flex-shrink-0"></i>
                                <p class="text-gray-300">support@studysocial.com</p>
                            </div>
                        </div>
                    </div>

                    <!-- Calendar -->
                    <div class="lg:col-span-1">
                        <h3 class="text-2xl font-bold mb-6 text-white">Calendar</h3>
                        <div class="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                            <!-- Calendar Header -->
                            <div class="bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-4 flex justify-between items-center">
                                <button @click="previousMonth" class="text-white hover:text-black transition-colors p-2 hover:bg-gray-600 rounded-lg">
                                    <i class="bi bi-chevron-left text-xl"></i>
                                </button>
                                <h4 class="text-white font-bold text-lg">{{ monthName }} {{ currentYear }}</h4>
                                <button @click="nextMonth" class="text-white hover:text-black transition-colors p-2 hover:bg-gray-600 rounded-lg">
                                    <i class="bi bi-chevron-right text-xl"></i>
                                </button>
                            </div>

                            <!-- Calendar Body -->
                            <div class="bg-white text-gray-800">
                                <!-- Day Headers -->
                                <div class="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                                    <div v-for="day in dayHeaders" :key="day" class="p-2 text-center text-xs font-bold text-gray-600">
                                        {{ day }}
                                    </div>
                                </div>

                                <!-- Calendar Days -->
                                <div class="grid grid-cols-7">
                                    <div v-for="(day, index) in calendarDays" :key="index" 
                                         @click="selectDate(day)"
                                         :class="getDayClasses(day)"
                                         class="p-2 text-center text-sm cursor-pointer hover:bg-gray-50 border-r border-b border-gray-100 last:border-r-0 transition-colors">
                                        {{ day.date }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Selected Date Display -->
                        <div v-if="selectedDate" class="mt-4 p-4 bg-gradient-to-r from-black to-gray-800 rounded-xl text-center shadow-lg">
                            <p class="text-white font-semibold">{{ formatSelectedDate }}</p>
                        </div>
                    </div>

                    <!-- Copyright -->
                    <div>
                        <h3 class="text-2xl font-bold mb-6 text-white">About</h3>
                        <p class="text-gray-300 leading-relaxed">
                            Copyright © 2025. All Rights Reserved.
                            <span class="block mt-2 text-gray-400 font-semibold">Made by Ifedollars.</span>
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Footer Bottom -->
            <div class="border-t border-gray-700">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p class="text-center text-gray-400 text-sm">
                        Study Social - Social Learning Platform
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const selectedDate = ref(null)
const today = ref(new Date())

const dayHeaders = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

const monthName = computed(() => {
    return monthNames[currentMonth.value]
})

const calendarDays = computed(() => {
    const firstDay = new Date(currentYear.value, currentMonth.value, 1)
    const startDate = new Date(firstDay)

    const dayOfWeek = firstDay.getDay()
    const mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1
    startDate.setDate(firstDay.getDate() - mondayOffset)

    const days = []
    for (let i = 0; i < 35; i++) {
        const date = new Date(startDate)
        date.setDate(startDate.getDate() + i)

        days.push({
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            fullDate: new Date(date),
            isCurrentMonth: date.getMonth() === currentMonth.value,
            isToday: isSameDay(date, today.value),
            isSelected: selectedDate.value && isSameDay(date, selectedDate.value)
        })
    }

    return days
})

const formatSelectedDate = computed(() => {
    if (!selectedDate.value) return ''
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return selectedDate.value.toLocaleDateString('en-US', options)
})

const previousMonth = () => {
    if (currentMonth.value === 0) {
        currentMonth.value = 11
        currentYear.value--
    } else {
        currentMonth.value--
    }
}

const nextMonth = () => {
    if (currentMonth.value === 11) {
        currentMonth.value = 0
        currentYear.value++
    } else {
        currentMonth.value++
    }
}

const selectDate = (day) => {
    if (day.isCurrentMonth) {
        selectedDate.value = new Date(day.fullDate)
    }
}

const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
}

const getDayClasses = (day) => {
    const classes = []

    if (!day.isCurrentMonth) {
        classes.push('text-gray-300')
    }

    if (day.isToday) {
        classes.push('bg-gradient-to-br from-black to-gray-900 text-white font-bold shadow-lg')
    }

    if (day.isSelected && !day.isToday) {
        classes.push('bg-gray-100 text-gray-900 font-semibold ring-2 ring-black')
    }

    return classes.join(' ')
}
</script>

<style scoped>
.carousel-track {
    animation: scroll 20s linear infinite;
    width: calc((350px + 2rem) * 6);
}

@media (min-width: 1024px) {
    .carousel-track {
        width: calc((450px + 2rem) * 6);
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-100% / 2));
    }
}

.carousel-track:hover {
    animation-play-state: paused;
}
</style>