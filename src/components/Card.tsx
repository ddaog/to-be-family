import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../data/topics';
import { cn } from '../lib/utils';
import { MessageCircleHeart } from 'lucide-react';

interface CardProps {
    question: Question;
    active: boolean;
    onVote: (direction: 'left' | 'right') => void; // For future Tinder-like mechanics if needed, currently just next/prev
    colorString: string; // Tailwinc class string e.g. "bg-rose-100"
    promise?: string;
}

export const Card = ({ question, active, colorString, promise, onVote }: CardProps) => {
    const [exitX, setExitX] = useState<number | null>(null);

    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{
                scale: active ? 1 : 0.95,
                opacity: active ? 1 : 0.4,
                y: active ? 0 : -20,
                rotate: active ? 0 : -2
            }}
            exit={exitX ? { x: exitX, opacity: 0, rotate: exitX > 0 ? 20 : -20 } : { opacity: 0, scale: 0.95 }}
            drag={active ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(_, info) => {
                if (info.offset.x > 100) {
                    setExitX(500);
                    onVote('right');
                } else if (info.offset.x < -100) {
                    setExitX(-500);
                    onVote('left');
                }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
                "absolute top-0 w-full max-w-sm h-[60vh] max-h-[600px] rounded-3xl p-8 shadow-xl flex flex-col justify-between select-none",
                "bg-white border border-white/40",
                active ? "z-10" : "z-0 pointer-events-none"
            )}
            style={{
                boxShadow: active
                    ? "0 20px 40px -10px rgba(0,0,0,0.1), 0 0 15px rgba(0,0,0,0.05)"
                    : "none"
            }}
        >
            {/* Background Gradient/Pattern */}
            <div className={cn("absolute inset-0 opacity-30 rounded-3xl bg-gradient-to-br from-transparent to-white/50", colorString)} />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full items-center text-center justify-center p-4">
                <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/60 text-stone-600 text-xs font-semibold tracking-wider backdrop-blur-sm border border-stone-100/50 uppercase">
                        {question.category}
                    </span>
                </div>

                <h3 className="text-2xl font-serif text-stone-800 leading-relaxed mb-4 font-medium break-keep">
                    {question.text}
                </h3>

                {question.subText && (
                    <p className="text-stone-500 text-sm font-light leading-relaxed max-w-xs break-keep">
                        {question.subText}
                    </p>
                )}

                {/* Promise Note Display */}
                {promise && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 relative w-full"
                    >
                        <div className="absolute inset-0 bg-yellow-100/50 blur transform -rotate-1 rounded-lg"></div>
                        <div className="relative bg-white/90 p-4 rounded-xl shadow-sm border border-yellow-100/50 backdrop-blur-sm text-left">
                            <div className="flex items-center gap-1.5 mb-1.5 text-amber-500">
                                <MessageCircleHeart className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">My Promise</span>
                            </div>
                            <p className="text-stone-700 text-sm font-medium line-clamp-3 italic">
                                "{promise}"
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="relative z-10 w-full flex justify-center pb-4">
                <div className="flex items-center gap-2 text-stone-400 text-sm opacity-60">
                    <MessageCircleHeart className="w-4 h-4" />
                    <span>Swipe for next</span>
                </div>
            </div>
        </motion.div>
    );
};
