export type TopicId = 'marriage' | 'parenting' | 'values';

export interface Question {
    id: string;
    text: string;
    subText?: string;
    category: string;
}

export interface TopicPack {
    id: TopicId;
    title: string;
    description: string;
    color: string;
    questions: Question[];
}

export const topics: TopicPack[] = [
    {
        id: 'marriage',
        title: '결혼 준비 (Wedding Prep)',
        description: '현실적인 준비부터 서로의 로망까지',
        color: 'bg-rose-100',
        questions: [
            {
                id: 'm1',
                text: '결혼 준비 비용, 어떻게 분담하고 관리하고 싶어?',
                subText: '각출? 통장 합치기? 솔직한 재정 상태 공유?',
                category: 'Finance'
            },
            {
                id: 'm2',
                text: '양가 부모님 용돈과 방문 빈도, 기준을 정해볼까?',
                subText: '명절, 생신, 그리고 평소 주말.',
                category: 'Family'
            },
            {
                id: 'm3',
                text: '결혼식에서 가장 포기할 수 없는 한 가지는?',
                subText: '스드메? 식사? 하객 수? 신혼여행?',
                category: 'Wedding'
            },
            {
                id: 'm4',
                text: '우리가 꿈꾸는 신혼집의 절대 조건 3가지는?',
                subText: '위치, 크기, 예산 중 우선순위를 정해보자.',
                category: 'Living'
            },
            {
                id: 'm5',
                text: '결혼 후 가사 분담은 어떤 방식이 공평할까?',
                subText: '시간 되는 사람이? 아니면 철저하게 분업?',
                category: 'Lifestyle'
            },
            {
                id: 'm6',
                text: '자녀 계획에 대해 구체적으로 이야기해본 적 있어?',
                subText: '몇 명? 언제? 난임일 경우엔?',
                category: 'Future'
            },
            {
                id: 'm7',
                text: '서로의 종교나 제사 문제는 어떻게 조율하면 좋을까?',
                subText: '참석 여부, 강요하지 않기 등.',
                category: 'Values'
            },
            {
                id: 'm8',
                text: '결혼 후 이성 친구와의 만남, 어디까지 허용 가능해?',
                subText: '단둘이 식사? 술? 연락 빈도는?',
                category: 'Boundaries'
            },
            {
                id: 'm9',
                text: '우리 부부의 재테크 목표는 무엇으로 할까?',
                subText: '내 집 마련? 노후 준비? 파이어족?',
                category: 'Finance'
            },
            {
                id: 'm10',
                text: '가장 두려운 결혼 생활의 모습은 뭐야?',
                subText: '대화 단절? 각방? 경제적 어려움?',
                category: 'Deep'
            }
        ]
    },
    {
        id: 'parenting',
        title: '예비 부모 (Parenting)',
        description: '좋은 엄마 아빠가 되기 위한 준비',
        color: 'bg-sky-100',
        questions: [
            {
                id: 'p1',
                text: '아이의 수면 교육, 어떻게 생각해요?',
                subText: '따로 재우기 vs 같이 자기 (패밀리 침대)',
                category: 'Lifestyle'
            },
            {
                id: 'p2',
                text: '산후 조리 기간 동안 가사는 어떻게 분담할까?',
                subText: '남편의 역할, 정부 지원 도우미 사용 여부 등.',
                category: 'Care'
            },
            {
                id: 'p3',
                text: '우리 아이가 어떤 성향의 사람으로 자랐으면 해?',
                subText: '자유로움? 성실함? 배려심? 리더십?',
                category: 'Values'
            },
            {
                id: 'p4',
                text: '훈육에 있어서 절대 하지 말아야 할 행동은?',
                subText: '체벌? 소리 지르기? 비교하기?',
                category: 'Discipline'
            },
            {
                id: 'p5',
                text: '양가 부모님의 육아 개입, 어디까지 허용할까?',
                subText: '방문 빈도, 먹거리 조언 등.',
                category: 'Family'
            },
            {
                id: 'p6',
                text: '자녀 교육비 지출에 대한 상한선이 있을까?',
                subText: '사교육 올인? 아니면 경험 위주?',
                category: 'Finance'
            },
            {
                id: 'p7',
                text: '육아로 지칠 때 서로에게 바라는 위로는?',
                subText: '혼자만의 시간? 맛있는 음식? 따뜻한 말?',
                category: 'Support'
            },
            {
                id: 'p8',
                text: '아이에게 스마트폰/미디어 노출은 언제부터?',
                subText: '식당에서 보여주기? 절대 금지?',
                category: 'Lifestyle'
            },
            {
                id: 'p9',
                text: '둘째 계획은 어떻게 생각하고 있어?',
                subText: '형제/자매는 필수? 하나만 잘 키우기?',
                category: 'Future'
            },
            {
                id: 'p10',
                text: '내가 "이것만은 꼭 지키는 부모"가 되겠다고 다짐한다면?',
                subText: '약속 지키기, 경청하기 등.',
                category: 'Deep'
            }
        ]
    },
    {
        id: 'values',
        title: '가치관 (Values)',
        description: '서로를 더 깊이 이해하는 질문들',
        color: 'bg-amber-100',
        questions: [
            {
                id: 'v1',
                text: '일주일에 나만의 시간은 얼마나 필요해?',
                subText: '완벽한 휴식을 위한 물리적 시간과 공간.',
                category: 'Self'
            },
            {
                id: 'v2',
                text: '부부 싸움 후 화해는 어떤 방식이 좋아?',
                subText: '시간 갖기 vs 그날 바로 풀기',
                category: 'Conflict'
            },
            {
                id: 'v3',
                text: '우리의 인생에서 "일(Work)"은 어떤 의미일까?',
                subText: '자아실현? 단순히 돈 버는 수단?',
                category: 'Career'
            },
            {
                id: 'v4',
                text: '솔직하게 말해서, 나의 매력 포인트는 뭐라고 생각해?',
                subText: '외모, 성격, 능력 중 구체적으로.',
                category: 'Love'
            },
            {
                id: 'v5',
                text: '10년 뒤 우리는 어떤 모습으로 살고 있을까?',
                subText: '거주지, 직업, 가족 구성원 등.',
                category: 'Future'
            },
            {
                id: 'v6',
                text: '배우자가 술/담배/게임을 한다면 어디까지 이해해?',
                subText: '빈도, 비용, 시간 제한.',
                category: 'Boundaries'
            },
            {
                id: 'v7',
                text: '가장 행복했던 우리의 추억 장면 하나를 꼽자면?',
                subText: '여행? 프러포즈? 소소한 데이트?',
                category: 'Memory'
            },
            {
                id: 'v8',
                text: '살면서 가장 중요하게 생각하는 도덕적 가치는?',
                subText: '정직? 의리? 성실? 배려?',
                category: 'Values'
            },
            {
                id: 'v9',
                text: '서로에게 절대 하지 말아야 할 말이나 행동은?',
                subText: '자존심 건드리기, 과거 들추기 등.',
                category: 'Conflict'
            },
            {
                id: 'v10',
                text: '만약 1년의 자유시간과 1억이 생긴다면 뭐 할래?',
                subText: '세계여행? 창업? 공부? 그냥 눕기?',
                category: 'Fun'
            }
        ]
    }
];
