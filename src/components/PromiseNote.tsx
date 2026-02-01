import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface PromiseNoteProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (note: string) => void;
    questionText: string;
    initialNote?: string;
}

export const PromiseNote = ({ isOpen, onClose, onSubmit, questionText, initialNote = '' }: PromiseNoteProps) => {
    const [note, setNote] = useState(initialNote);

    // Reset note when opening with new initialNote
    if (isOpen && note !== initialNote && note === '') {
        setNote(initialNote);
    }

    const handleSubmit = () => {
        onSubmit(note);
        setNote('');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
                    >
                        <div className="bg-white w-full max-w-md mx-4 p-6 rounded-2xl shadow-2xl pointer-events-auto">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-serif text-lg text-stone-800">우리만의 약속</h3>
                                <button onClick={onClose} className="p-1 rounded-full hover:bg-stone-100">
                                    <X className="w-5 h-5 text-stone-400" />
                                </button>
                            </div>

                            <p className="text-sm text-stone-500 mb-4 line-clamp-2 italic">
                                "{questionText}"
                            </p>

                            <textarea
                                className="w-full text-stone-800 bg-stone-50 p-4 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-stone-200 min-h-[120px]"
                                placeholder="우리는 이렇게 하기로 했어요..."
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                autoFocus
                            />

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={handleSubmit}
                                    disabled={!note.trim()}
                                    className="flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full font-medium text-sm hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Check className="w-4 h-4" />
                                    기록하기
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
