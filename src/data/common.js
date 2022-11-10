const main_content = [
    { id: 1, strong: "국내 유일의 테디베어 박물관", title: "제주", des: "마티와 함께 떠나는 세계역사탐방", link: "/place/jeju" },
    { id: 2, strong: "국내 유일의 테디베어 박물관", title: "여수", des: "여수앞바다에 상륙한 하와이 테디베어의 모든 것", link: "/place/yeosu" },
    { id: 3, strong: "국내 유일의 테디베어 박물관", title: "군산", des: "타임요트를 타고 떠나는 시공간 여행", link: "/place/gunsan" },
    { id: 4, strong: "국내 유일의 테디베어 박물관", title: "청두", des: "대륙의 중심, 판다의 고향에서 만나는 테디베어", link: "/place/chengdu" }
];

const company_content = {
    name: "(주)제이에스앤에프",
    number: "사업자등록번호 : 205-81-13977",
    ceo: "대표이사 : 김정수",
    address: "본사주소 : 서울시 강남구 언주로 866 7층",
    copy: "TEDDY BEAR MUSEUM. All Rights Reserved."
};

const page_content = [
    { id: 1, title: "테디베어뮤지엄 소개", des: "다양한 테마와 재미있는 볼거리가 가득한\n국내 유일의 테디베어 박물관에 오신걸 환영 합니다.", link: "/musium" },
    { id: 2, title: "지점안내", des: "테디베어뮤지엄은 일년 내내 여러분을 기다리고 있습니다!", link: "/place/jeju" },
    { id: 3, title: "기프트샵", des: "테디베어뮤지엄 직영 매장 및 공식 인증 매장에서만\n정품을 구매하실 수 있습니다.", link: "/gift" },
    { id: 4, title: "문의하기", des: "상품제작 문의, 상품문의, 프랜차이즈&라이센스,\n기타내용을 문의할 수 있는 공간입니다.", link: "/qna" },
];

const QNA = [
    {
        id: 1,
        cate: "FAQ", board: [
            { id: 1, question: "Q . 테디베어 뮤지엄의 정확한 위치가 어떻게 되나요?", name: "관리자", date: "2022" },
            { id: 2, question: "Q . 소셜입장권사용 시점은 언제부터 인가요?", name: "관리자", date: "2022" },
            { id: 3, question: "Q . 운영시간은 어떻게 되나요?", name: "관리자", date: "2022" },
            { id: 4, question: "Q . 도슨트는 언제하나요?", name: "관리자", date: "2022" },
            { id: 5, question: "Q . 유모차 또는 휠체어 이용가능한가요?", name: "관리자", date: "2022" },
            { id: 6, question: "Q . 식음료 반입이 가능한가요?", name: "관리자", date: "2022" },
            { id: 7, question: "Q . 박물관 주차장은 있나요?", name: "관리자", date: "2022" },
        ]
    },
    {
        id: 2,
        cate: "Q&A", board: [
            { id: 1, question: "문의드립니다 :)", name: "최은진", date: "2022-10-26" },
            { id: 2, question: "문의드립니다 :)", name: "김은진", date: "2022-10-25" },
            { id: 3, question: "문의드립니다 :)", name: "이은진", date: "2022-10-24" },
            { id: 4, question: "문의드립니다 :)", name: "정은진", date: "2022-10-23" },
            { id: 5, question: "문의드립니다 :)", name: "박은진", date: "2022-10-22" },
            { id: 6, question: "문의드립니다 :)", name: "한은진", date: "2022-10-21" },
            { id: 7, question: "문의드립니다 :)", name: "심은진", date: "2022-10-20" },
        ],
    },
]

export { main_content, company_content, page_content, QNA };