const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(cors()); // 모든 도메인에서 요청을 허용합니다.

// proxy 설정 확인을 위한 test api 구성
app.get("/api/list", (req, res) => {
  res.json([
    { id: "test1", name: "테스트1" },
    { id: "test2", name: "테스트2" },
    { id: "test3", name: "테스트3" },
    { id: "test4", name: "테스트4" },
  ]);
});

app.get("/api/item", (req, res) => {
  res.json({
    id: "test1",
    name: "테스트1",
  });
});

app.listen(8080, (err) => {
  if (err) {
    console.log("err 발생");
  }

  console.log("정상구동");
});
