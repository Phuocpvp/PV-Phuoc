import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HamSo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Hàm trong JavaScript</CardTitle>
          <CardDescription>Khái niệm về hàm và cách sử dụng</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl">
            <p className="lead">
              Hàm là một khối mã có thể tái sử dụng, thực hiện một nhiệm vụ cụ thể hoặc tính toán một giá trị.
            </p>
            
            <h2>Định nghĩa hàm</h2>
            <p>
              Trong JavaScript, bạn có thể định nghĩa hàm bằng cách sử dụng từ khóa <code>function</code> hoặc sử dụng arrow function.
            </p>

            <h2>Các loại hàm</h2>
            <ul>
              <li><strong>Hàm thông thường</strong>: Sử dụng từ khóa <code>function</code></li>
              <li><strong>Arrow function</strong>: Cú pháp ngắn gọn hơn, được giới thiệu trong ES6</li>
              <li><strong>Hàm ẩn danh</strong>: Hàm không có tên, thường được sử dụng như callback</li>
            </ul>

            <h2>Ví dụ</h2>
            <pre><code>{`
// Hàm thông thường
function xinChao(ten) {
  return "Xin chào " + ten;
}

// Arrow function
const tinhTong = (a, b) => a + b;

// Hàm ẩn danh
setTimeout(function() {
  console.log("Đã trôi qua 1 giây");
}, 1000);

console.log(xinChao("Phong"));  // "Xin chào Phong"
console.log(tinhTong(5, 3));  // 8
            `}</code></pre>

            <p>
              Trong ví dụ trên, chúng ta đã định nghĩa và sử dụng ba loại hàm khác nhau trong JavaScript.
            </p>

            <h2>Kết luận</h2>
            <p>
              Hàm là một công cụ mạnh mẽ trong JavaScript, cho phép bạn tổ chức code thành các khối logic, tái sử dụng và dễ bảo trì.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}
