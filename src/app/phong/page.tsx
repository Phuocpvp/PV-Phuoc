import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Bien() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Biến trong JavaScript</CardTitle>
          <CardDescription>Khái niệm cơ bản về biến</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl">
            <p className="lead">
              Biến là một trong những khái niệm cơ bản nhất trong JavaScript, cho phép bạn lưu trữ và thao tác dữ liệu trong chương trình của mình.
            </p>
            
            <h2>Định nghĩa biến</h2>
            <p>
              Trong JavaScript, bạn có thể khai báo biến bằng cách sử dụng từ khóa <code>var</code>, <code>let</code>, hoặc <code>const</code>.
            </p>

            <h2>Các loại biến</h2>
            <ul>
              <li><strong>var</strong>: Phạm vi function hoặc global</li>
              <li><strong>let</strong>: Phạm vi block, có thể thay đổi giá trị</li>
              <li><strong>const</strong>: Phạm vi block, không thể thay đổi giá trị sau khi gán</li>
            </ul>

            <h2>Ví dụ</h2>
            <pre><code>{`
let ten = "Nguyen Van A";
const TUOI = 25;
var diaChi = "Ha Noi";

console.log(ten);  // "Nguyen Van A"
console.log(TUOI);  // 25
console.log(diaChi);  // "Ha Noi"
            `}</code></pre>

            <p>
              Trong ví dụ trên, chúng ta đã khai báo ba biến sử dụng ba từ khóa khác nhau. Mỗi biến có đặc điểm và phạm vi sử dụng riêng.
            </p>

            <h2>Kết luận</h2>
            <p>
              Hiểu về biến là bước đầu tiên để làm chủ JavaScript. Việc sử dụng đúng loại biến sẽ giúp code của bạn rõ ràng, dễ bảo trì và tránh được nhiều lỗi phổ biến.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}
