[[_TOC_]]

# network-checking-tool



- [ ] 같은 네트워크 상 다른 컴퓨터에서 요청 데이터를 가로채는 것이 가능한가?
  - [ ] http
  - [ ] https
- [ ] http와 https의 패킷의 암호화는 정말로 이루어 지는가?
  - [ ] 어떤 부분에서 암호화가 이루어지는가?
- [ ] https의 경우 비밀 키를 취득했다는 가정하에 복호화가 가능한가?
  


실습을 위한 툴을 만들어 봅시다.

1. 현재 네트워크에 접속해 있는 기기정보를 취득
2. 기기별 요청 정보를 확인 가능한가?
   1. 아래의 내용을 알아보기 쉽게 표현 해볼 것
      1. 핸드세이크
      2. 본문전송
      3. 송신완료
   
캡슐화
IP       L3 - Packet - IP Packet
Ethernet L2 


