const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// تحليل بيانات الطلبات POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// صفحة تسجيل الدخول
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// صفحة إنشاء الحساب
app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

// معالجة تسجيل الدخول
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // قم بالتحقق من معلومات تسجيل الدخول هنا
  res.send('تم تسجيل الدخول بنجاح!');
});

// معالجة إنشاء الحساب
app.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirm_password;
  // قم بإنشاء حساب جديد هنا
  res.send('تم إنشاء الحساب بنجاح!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`التطبيق يعمل على http://localhost:${PORT}`);
});
