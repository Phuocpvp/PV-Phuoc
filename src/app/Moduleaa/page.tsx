import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Module() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Module trong JavaScript</CardTitle>
          <CardDescription>Khái niệm về module và cách sử dụng</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl">
            <p className="lead">
              Module trong JavaScript cho phép bạn chia nhỏ code thành các phần có thể tái sử dụng và dễ quản lý.
            </p>
            
            <h2>Lợi ích của việc sử dụng module</h2>
            <ul>
              <li>Tổ chức code tốt hơn</li>
              <li>Tái sử dụng code</li>
              <li>Tránh xung đột tên biến</li>
              <li>Dễ dàng bảo trì và mở rộng</li>
            </ul>

            <h2>Ví dụ</h2>
            <pre><code>{`
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// main.js
import { add, subtract } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
            `}</code></pre>

            <p>
              Trong ví dụ trên, chúng ta đã tạo một module math.js chứa các hàm toán học và import chúng vào file main.js để sử dụng.
            </p>

            <h2>Kết luận</h2>
            <p>
              Module là một công cụ mạnh mẽ trong JavaScript hiện đại, cho phép bạn tổ chức code một cách hiệu quả và tạo ra các ứng dụng có cấu trúc tốt. Việc sử dụng module không chỉ giúp code của bạn dễ đọc và bảo trì hơn, mà còn cải thiện hiệu suất bằng cách cho phép tải các phần của ứng dụng khi cần thiết.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}

