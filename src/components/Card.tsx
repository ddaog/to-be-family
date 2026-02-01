import { motion } from 'framer-motion';
import type { Question } from '../data/topics';
import { cn } from '../lib/utils';
import { MessageCircleHeart, Sparkles } from 'lucide-react';

interface CardProps {
    question: Question;
    active: boolean;
    onVote: (direction: 'left' | 'right') => void; // For future Tinder-like mechanics if needed, currently just next/prev
    colorString: string; // Tailwinc class string e.g. "bg-rose-100"
}

export const Card = ({ question, active, colorString }: CardProps) => {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{
                scale: active ? 1 : 0.95,
                opacity: active ? 1 : 0.4,
                y: active ? 0 : -20,
                rotate: active ? 0 : -2
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
            <div className="relative z-10 flex flex-col h-full items-center text-center justify-center">
                <div className="mb-6 animate-fade-in">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-4">
                        <Sparkles className="w-6 h-6 text-stone-400" />
                    </span>
                    <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase">{question.category}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif font-medium text-stone-800 leading-tight mb-4">
                    {question.text}
                </h2>

                {question.subText && (
                    <p className="text-stone-500 font-light leading-relaxed max-w-[260px]">
                        {question.subText}
                    </p>
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
