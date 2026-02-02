import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/topics';
import { Deck } from '../components/Deck';

export function DeckPage() {
    const { topicId } = useParams();
    const navigate = useNavigate();

    const topic = topics.find(t => t.id === topicId);

    if (!topic) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
                <p className="text-stone-500">주제를 찾을 수 없습니다.</p>
                <button onClick={() => navigate('/')} className="ml-4 underline">홈으로 가기</button>
            </div>
        );
    }

    return <Deck topic={topic} onBack={() => navigate('/')} />;
}
