import { useNavigate, useSearchParams } from 'react-router-dom';
import { topics } from '../data/topics';
import { Summary } from '../components/Summary';
import LZString from 'lz-string';
import { useEffect, useState } from 'react';

export function ResultPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [decodedData, setDecodedData] = useState<{ topicId: string, promises: { questionId: string, text: string }[] } | null>(null);

    useEffect(() => {
        const data = searchParams.get('data');
        if (data) {
            try {
                const decompressed = LZString.decompressFromEncodedURIComponent(data);
                if (decompressed) {
                    setDecodedData(JSON.parse(decompressed));
                }
            } catch (e) {
                console.error("Failed to parse result data", e);
            }
        }
    }, [searchParams]);

    if (!decodedData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
                <p className="text-stone-500">결과를 불러오는 중입니다...</p>
            </div>
        );
    }

    const topic = topics.find(t => t.id === decodedData.topicId);

    if (!topic) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
                <p className="text-stone-500">유효하지 않은 링크입니다.</p>
                <button onClick={() => navigate('/')} className="ml-4 underline">홈으로 가기</button>
            </div>
        );
    }

    return (
        <Summary
            topic={topic}
            promises={decodedData.promises}
            onHome={() => navigate('/')}
        />
    );
}
