import { useNavigate } from 'react-router-dom';
import { topics } from '../data/topics';
import { Sparkles, Heart } from 'lucide-react';
import { Onboarding } from '../components/Onboarding';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function Home() {
    const navigate = useNavigate();
    const [hasSeenOnboarding, setHasSeenOnboarding] = useLocalStorage('kajokey-onboarding-seen', false);

    if (!hasSeenOnboarding) {
        return <Onboarding onComplete={() => setHasSeenOnboarding(true)} />;
    }

    return (
        <div className="min-h-screen bg-stone-50 flex flex-col px-6 py-12">
            <header className="mb-12">
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-stone-900 text-white p-1 rounded">
                        <Heart className="w-4 h-4" fill="currentColor" />
                    </span>
                    <span className="font-bold tracking-tight text-stone-900">TO BE FAMILY</span>
                </div>
                <h1 className="text-4xl font-serif text-stone-900 leading-tight mb-4">
                    오늘은 어떤 이야기를<br />
                    나누고 싶나요?
                </h1>
                <p className="text-stone-500 font-light">
                    서로의 마음을 연결하는 대화 카드
                </p>
            </header>

            <main className="flex flex-col gap-4 max-w-md mx-auto w-full">
                {topics.map((topic) => (
                    <button
                        key={topic.id}
                        onClick={() => navigate(`/deck/${topic.id}`)}
                        className="group relative overflow-hidden rounded-3xl p-8 text-left transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95 bg-white border border-stone-100"
                    >
                        <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${topic.color}`} />

                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-stone-800 mb-1">{topic.title}</h3>
                                <p className="text-sm text-stone-500 font-light mb-6">{topic.description}</p>
                                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                                    {topic.questions.length} Cards
                                </div>
                            </div>
                            <div className="p-3 bg-white rounded-full shadow-sm text-stone-400 group-hover:text-stone-600 transition-colors">
                                <Sparkles className="w-5 h-5" />
                            </div>
                        </div>
                    </button>
                ))}
            </main>

            <footer className="mt-auto pt-12 text-center text-xs text-stone-300">
                © 2026 TO BE FAMILY. For your precious moments.
            </footer>
        </div>
    );
}
