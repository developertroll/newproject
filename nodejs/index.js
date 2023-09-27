const express = require('express')
const compression = require('compression');
const app = express()
const port = 3000
const cors = require('cors');
const {indexRouter} = require('./src/router/indexRouter.js');

// express 미들웨어 설정//  
app.use(cors());

//body json 파싱//
app.use(express.json());

// http 요청 압축 //
app.use(compression());

// app.get("/users", function(req, res){
//     const name = req.body.name;
//     return res.send(name);
//     }
//     );

// 라우터 분리
indexRouter(app);

app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`)
})