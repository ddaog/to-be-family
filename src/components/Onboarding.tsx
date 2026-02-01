import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircleHeart, HeartHandshake } from 'lucide-react';

interface OnboardingProps {
    onComplete: () => void;
}

const slides = [
    {
        id: 1,
        title: "가족이 되어가는 시간",
        description: "서로 다른 우리가 만나 하나의 가족이 되는 과정은 대화에서 시작됩니다.",
        icon: <HeartHandshake className="w-12 h-12 text-rose-400" />,
        bg: "bg-rose-50"
    },
    {
        id: 2,
        title: "조금은 낯선 질문들",
        description: "평소엔 하기 어려웠던 속깊은 이야기들을 질문 카드를 통해 자연스럽게 꺼내보세요.",
        icon: <Sparkles className="w-12 h-12 text-amber-400" />,
        bg: "bg-amber-50"
    },
    {
        id: 3,
        title: "우리만의 약속",
        description: "대화 끝엔 작은 약속을 남겨보세요. \n우리의 소중한 다짐들이 쌓여갑니다.",
        icon: <MessageCircleHeart className="w-12 h-12 text-sky-400" />,
        bg: "bg-sky-50"
    }
];

export const Onboarding = ({ onComplete }: OnboardingProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${slides[currentIndex].bg}`}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 p-6 bg-white rounded-full shadow-xl"
                    >
                        {slides[currentIndex].icon}
                    </motion.div>

                    <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4 word-keep-all">
                        {slides[currentIndex].title}
                    </h2>
                    <p className="text-stone-500 leading-relaxed max-w-xs whitespace-pre-line word-keep-all">
                        {slides[currentIndex].description}
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* Bottom Controls */}
            <div className="absolute bottom-12 w-full px-8 flex justify-between items-center z-10">
                {/* Pagination Dots */}
                <div className="flex gap-2">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-stone-800 w-6" : "bg-stone-300"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-stone-800 active:scale-95 transition-all"
                >
                    {currentIndex === slides.length - 1 ? "시작하기" : "다음"}
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
