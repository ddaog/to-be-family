import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TopicPack } from '../data/topics';
import { Card } from './Card';
import { PromiseNote } from './PromiseNote';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ChevronRight, ChevronLeft, PenLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LZString from 'lz-string';

interface DeckProps {
    topic: TopicPack;
    onBack: () => void;
}

export const Deck = ({ topic, onBack }: DeckProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNoteOpen, setIsNoteOpen] = useState(false);

    // Persist promises using the topic ID as key
    const [promises, setPromises] = useLocalStorage<{ questionId: string, text: string }[]>(
        `kajokey-promises-${topic.id}`,
        []
    );
    const navigate = useNavigate();

    const handleFinish = () => {
        const data = JSON.stringify({
            topicId: topic.id,
            promises
        });
        const compressed = LZString.compressToEncodedURIComponent(data);
        navigate(`/result?data=${compressed}`);
    };

    const nextCard = () => {
        if (currentIndex < topic.questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            handleFinish();
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handlePromiseSubmit = (text: string) => {
        const currentQ = topic.questions[currentIndex];
        setPromises(prev => {
            // Remove existing promise for this question if any, then add new one
            const filtered = prev.filter(p => p.questionId !== currentQ.id);
            return [...filtered, { questionId: currentQ.id, text }];
        });
        setIsNoteOpen(false);
    };

    const currentPromise = promises.find(p => p.questionId === topic.questions[currentIndex]?.id)?.text;

    useEffect(() => {
        // Optional: log for debugging or analytics
    }, [promises]);

    // Redirecting handling handled by nextCard logic triggering handleFinish
    if (currentIndex >= topic.questions.length) {
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col items-center relative overflow-hidden bg-stone-50">
            {/* Header */}
            <div className="w-full max-w-md px-6 py-6 flex justify-between items-center z-20">
                <button onClick={onBack} className="text-stone-400 hover:text-stone-900 transition-colors text-sm font-medium">
                    ← Back
                </button>
                <div className="flex flex-col items-center">
                    <h1 className="text-stone-900 font-serif font-medium">{topic.title}</h1>
                    <span className="text-xs text-stone-400 font-medium tracking-widest mt-0.5">
                        {currentIndex + 1} / {topic.questions.length}
                    </span>
                </div>
                <button
                    onClick={handleFinish}
                    className="text-stone-400 hover:text-stone-900 transition-colors text-xs font-semibold uppercase tracking-wider border border-stone-200 px-3 py-1.5 rounded-full hover:bg-white hover:shadow-sm whitespace-nowrap"
                >
                    중간 점검
                </button>
            </div>

            {/* Progress */}
            <div className="w-full max-w-xs h-1 bg-stone-200 rounded-full mb-8 z-20 overflow-hidden">
                <motion.div
                    className="h-full bg-stone-800"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / topic.questions.length) * 100}%` }}
                />
            </div>

            {/* Card Deck Area */}
            <div className="relative w-full max-w-md h-[60vh] flex justify-center items-center perspective-1000">
                <AnimatePresence>
                    {topic.questions.map((q, index) => (
                        index >= currentIndex && (
                            <Card
                                key={q.id}
                                question={q}
                                active={index === currentIndex}
                                colorString={topic.color}
                                onVote={() => nextCard()}
                                onEdit={() => setIsNoteOpen(true)}
                                promise={promises.find(p => p.questionId === q.id)?.text}
                            />
                        )
                    ))}
                </AnimatePresence>
                {currentIndex >= topic.questions.length && (
                    <div className="text-center p-8">
                        <h2 className="text-2xl font-serif text-stone-800 mb-4">대화 완료!</h2>
                        <p className="text-stone-500 mb-8">오늘 나눈 소중한 이야기를 잊지 마세요.</p>
                        <button onClick={onBack} className="bg-stone-900 text-white px-6 py-3 rounded-full">
                            다른 주제 고르기
                        </button>
                    </div>
                )}
            </div>

            {/* Controls */}
            {currentIndex < topic.questions.length && (
                <div className="mt-8 flex gap-4 z-20">
                    <button
                        onClick={prevCard}
                        disabled={currentIndex === 0}
                        className="p-4 rounded-full bg-white shadow-sm border border-stone-100 text-stone-400 disabled:opacity-30 hover:text-stone-600 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => setIsNoteOpen(true)}
                        className="flex items-center gap-2 px-6 py-4 rounded-full bg-stone-900 text-white shadow-lg hover:bg-stone-800 hover:scale-105 transition-all active:scale-95"
                    >
                        <PenLine className="w-5 h-5" />
                        <span>기록하기</span>
                    </button>

                    <button
                        onClick={nextCard}
                        className="p-4 rounded-full bg-white shadow-sm border border-stone-100 text-stone-400 hover:text-stone-600 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            )}

            {/* Promise Modal */}
            <PromiseNote
                isOpen={isNoteOpen}
                onClose={() => setIsNoteOpen(false)}
                onSubmit={handlePromiseSubmit}
                questionText={topic.questions[currentIndex]?.text}
                initialNote={currentPromise || ''}
            />
        </div>
    );
};
