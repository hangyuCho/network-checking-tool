import fs from 'fs'
import express from 'express'
import https from 'https'
import cors from 'cors'

const key = fs.readFileSync('../localhost.decrypted.key', 'utf8')
const cert = fs.readFileSync('../localhost.crt', 'utf8')

const app = express()

// 요청 본문 파싱 미들웨어 추가
app.use(express.json()); // JSON 요청 본문 파싱
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

let users: { username: string; password: string }[] = []; // 사용자 정보를 저장할 배열

// 모든 출처에서의 요청을 허용하는 CORS 설정
app.use(cors({
  origin: '*', // 모든 출처 허용
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 허용할 HTTP 메서드
  credentials: true // 자격 증명 허용 (필요 시)
}));

// 회원가입 API
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // 사용자 중복 체크
  if (users.find(user => user.username === username)) {
      return res.status(400).send('Username already exists');
  }

  // 사용자 추가
  users.push({ username, password });
  res.status(201).send('User registered');
});

// 로그인 API
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 사용자 확인
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
      res.cookie('session', username); // 세션 쿠키 설정
      return res.status(200).send('Logged in');
  }

  res.status(401).send('Invalid credentials');
});


const server = https.createServer({ key, cert }, app)

const port = 3000

/*
app.listen(port, () => {
  console.log(`server is listening on https://localhost:${port}`)
})
 */
server.listen(port, () => {
  console.log(`server is listening on https://localhost:${port}`)
})
