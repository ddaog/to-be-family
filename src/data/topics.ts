export interface Question {
    id: string;
    text: string;
    subText?: string;
    category: string;
}

export interface TopicPack {
    id: string;
    title: string;
    description: string;
    questions: Question[];
    color: string;
}

export const topics: TopicPack[] = [
    {
        id: 'marriage',
        title: '결혼 준비',
        description: '결혼식보다 중요한 결혼 생활 이야기',
        color: 'bg-rose-100',
        questions: [
            { id: 'm1', category: 'Money', text: '우리 집의 경제권은 누가, 어떻게 관리할까?', subText: '공동 관리 vs 각자 관리, 그리고 용돈은?' },
            { id: 'm2', category: 'Conflict', text: '부부싸움 후 화해는 어떤 방식으로 하고 싶어?', subText: '시간이 필요한 타입 vs 그 자리에서 풀어야 하는 타입' },
            { id: 'm3', category: 'Family', text: '양가 부모님 방문 빈도는 어느 정도가 적당할까?', subText: '명절, 생신, 그리고 평소 주말' },
            { id: 'm4', category: 'Habits', text: '절대 포기할 수 없는 나만의 생활 습관이 있다면?', subText: '수면 시간, 식습관, 취미 시간 등' },
            { id: 'm5', category: 'Role', text: '집안일 분담은 어떻게 나누는 게 공평할까?', subText: '잘하는 걸 맡기 vs 시간으로 나누기' },
        ]
    },
    {
        id: 'finance',
        title: '재정 관리',
        description: '투명하고 현명한 돈 관리',
        color: 'bg-emerald-100',
        questions: [
            { id: 'f1', category: 'Goals', text: '1년 안에 달성하고 싶은 저축 목표는?', subText: '구체적인 금액과 목적 생각해보기' },
            { id: 'f2', category: 'Spending', text: '30만 원 이상의 물건을 살 때 상의가 필요할까?', subText: '소비의 자율성과 공유의 기준' },
            { id: 'f3', category: 'Investment', text: '공격적인 투자 vs 안전한 저축, 우리의 성향은?', subText: '주식, 코인, 부동산, 예적금' },
            { id: 'f4', category: 'Debt', text: '대출 상환을 우선할까, 투자를 우선할까?', subText: '현재의 현금 흐름 vs 미래의 자산 가치' },
        ]
    },
    {
        id: 'parenting',
        title: '육아관',
        description: '아이와 함께하는 미래 그리기',
        color: 'bg-orange-100',
        questions: [
            { id: 'p1', category: 'Discipline', text: '아이가 잘못했을 때 훈육은 누가 담당할까?', subText: '엄격한 역할 vs 친구 같은 역할' },
            { id: 'p2', category: 'Education', text: '사교육에 대해 어떻게 생각해?', subText: '최대한 많이 vs 아이가 원할 때만' },
            { id: 'p3', category: 'ScreenTime', text: '아이에게 스마트폰은 언제부터 보여줄까?', subText: '식사 중 영상 시청 허용 여부' },
            { id: 'p4', category: 'Support', text: '육아 스트레스를 받을 때 배우자가 어떻게 해주면 좋겠어?', subText: '혼자만의 시간 주기 vs 같이 있어주기' },
        ]
    },
    {
        id: 'habits',
        title: '생활 습관',
        description: '사소하지만 중요한 일상의 규칙들',
        color: 'bg-blue-100',
        questions: [
            { id: 'h1', category: 'Morning', text: '주말 아침 기상은 몇 시까지?', subText: '늦잠도 쉼이다 vs 패턴 유지하기' },
            { id: 'h2', category: 'Cleanliness', text: '화장실 청소 주기는 어떻게 정할까?', subText: '보일 때마다 vs 정해진 날에 대청소' },
            { id: 'h3', category: 'Dining', text: '집에서 밥 먹을 때 TV나 폰 보는 거 어때?', subText: '대화에 집중 vs 편안하게 시청' },
            { id: 'h4', category: 'Drinking', text: '술자리는 주 몇 회까지 이해할 수 있어?', subText: '귀가 시간과 연락 빈도' },
        ]
    },
    {
        id: 'intimacy',
        title: '부부 관계',
        description: '더 깊은 사랑을 위한 솔직한 대화',
        color: 'bg-purple-100',
        questions: [
            { id: 'i1', category: 'Touch', text: '평소에 어떤 스킨십을 좋아해?', subText: '포옹, 손잡기, 뽀뽀 등 구체적으로' },
            { id: 'i2', category: 'Date', text: '둘만의 데이트는 얼마나 자주 필요할까?', subText: '한 달에 한 번은 근사한 곳에서?' },
            { id: 'i3', category: 'Effort', text: '권태기가 온다면 함께 어떤 노력을 하고 싶어?', subText: '여행 가기, 상담 받기, 취미 공유하기' },
        ]
    },
    {
        id: 'health',
        title: '건강 관리',
        description: '함께 건강하게 늙어가기',
        color: 'bg-teal-100',
        questions: [
            { id: 'he1', category: 'Exercise', text: '일주일에 몇 번 같이 운동할 수 있을까?', subText: '산책, 헬스, 배드민턴 등' },
            { id: 'he2', category: 'Checkup', text: '정기 건강검진은 챙기고 있어?', subText: '서로의 건강 상태 체크해주기' },
            { id: 'he3', category: 'Diet', text: '야식은 일주일에 몇 번만 허용할까?', subText: '배달 음식 줄이기 약속' },
        ]
    },
    {
        id: 'career',
        title: '커리어',
        description: '일과 삶의 균형 맞추기',
        color: 'bg-slate-100',
        questions: [
            { id: 'c1', category: 'WorkLife', text: '야근이 잦아진다면 어떻게 배려해줄 수 있어?', subText: '집안일 면제 vs 주말에 몰아서 쉬게 해주기' },
            { id: 'c2', category: 'Development', text: '자기계발을 위한 시간과 비용은 얼마나 필요해?', subText: '대학원, 자격증, 취미 강습' },
            { id: 'c3', category: 'Retirement', text: '은퇴 후에는 어떤 삶을 살고 싶어?', subText: '귀농, 세계 여행, 소일거리' },
        ]
    },
    {
        id: 'future',
        title: '미래 계획',
        description: '5년 후, 10년 후의 우리',
        color: 'bg-indigo-100',
        questions: [
            { id: 'fu1', category: 'Housing', text: '우리가 꿈꾸는 드림 하우스는 어떤 모습이야?', subText: '아파트, 주택, 도심, 교외' },
            { id: 'fu2', category: 'BucketList', text: '죽기 전에 꼭 함께 해보고 싶은 세 가지는?', subText: '거창하지 않아도 좋아' },
            { id: 'fu3', category: 'Value', text: '우리 가족의 가훈을 정한다면?', subText: '정직, 행복, 도전, 배려' },
        ]
    },
    {
        id: 'communication',
        title: '소통법',
        description: '말하지 않으면 모르는 마음들',
        color: 'bg-cyan-100',
        questions: [
            { id: 'co1', category: 'Listening', text: '내 말을 잘 들어주고 있다고 느낄 때는 언제야?', subText: '눈 맞춤, 맞장구, 질문하기' },
            { id: 'co2', category: 'Expression', text: '사랑한다는 표현은 하루에 몇 번 듣고 싶어?', subText: '말, 문자, 행동' },
            { id: 'co3', category: 'Compliment', text: '최근에 서로에게 고마웠던 점 하나씩 말해주기', subText: '사소한 것도 좋아' },
        ]
    },
    {
        id: 'holiday',
        title: '휴식과 여가',
        description: '제대로 쉬는 법 찾기',
        color: 'bg-lime-100',
        questions: [
            { id: 'ho1', category: 'Travel', text: '휴가는 관광형이 좋아, 휴양형이 좋아?', subText: '빡빡한 일정 vs 호텔에서 뒹굴기' },
            { id: 'ho2', category: 'Weekend', text: '주말 하루는 아무것도 안 하고 쉬어도 될까?', subText: '집콕의 자유' },
            { id: 'ho3', category: 'Hobbies', text: '각자의 취미 시간을 얼마나 존중해줄 수 있어?', subText: '간섭하지 않기' },
        ]
    }
];
