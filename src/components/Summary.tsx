import { motion } from 'framer-motion';
import { Check, Home, Share2 } from 'lucide-react';
import type { TopicPack } from '../data/topics';

interface SummaryProps {
    topic: TopicPack;
    promises: { questionId: string; text: string }[];
    onHome: () => void;
}

export const Summary = ({ topic, promises, onHome }: SummaryProps) => {
    const getPromiseForQuestion = (qId: string) => {
        return promises.find(p => p.questionId === qId)?.text;
    };

    return (
        <div className="min-h-screen bg-stone-50 px-6 py-12 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md text-center mb-8"
            >
                <div className="inline-flex items-center justify-center p-3 bg-stone-900 text-white rounded-full mb-6 shadow-lg">
                    <Check className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-serif text-stone-900 mb-2">대화 완료</h1>
                <p className="text-stone-500">
                    <span className="font-semibold text-stone-800">{topic.title}</span>에 대한<br />
                    우리의 약속들이에요.
                </p>
            </motion.div>

            <div className="w-full max-w-md flex flex-col gap-4 mb-10">
                {topic.questions.map((q, index) => {
                    const promise = getPromiseForQuestion(q.id);
                    if (!promise) return null;

                    return (
                        <motion.div
                            key={q.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100"
                        >
                            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                                {q.category}
                            </p>
                            <p className="text-stone-800 font-medium mb-3">
                                {q.text}
                            </p>
                            <div className="bg-stone-50 p-4 rounded-xl text-stone-600 text-sm border-l-4 border-stone-300 italic">
                                "{promise}"
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="flex gap-4 w-full max-w-md">
                <button
                    onClick={onHome}
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-stone-600 py-4 rounded-xl font-medium shadow-sm border border-stone-200 hover:bg-stone-50 transition-colors"
                >
                    <Home className="w-4 h-4" />
                    처음으로
                </button>
                <button
                    className="flex-[2] flex items-center justify-center gap-2 bg-stone-900 text-white py-4 rounded-xl font-medium shadow-lg hover:bg-stone-800 transition-colors"
                    onClick={() => alert("공유 기능은 준비 중입니다!")}
                >
                    <Share2 className="w-4 h-4" />
                    이미지로 저장하기
                </button>
            </div>
        </div>
    );
};
