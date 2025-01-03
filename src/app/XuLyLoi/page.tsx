import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function XuLyLoi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Xử lý lỗi trong JavaScript</CardTitle>
          <CardDescription>Khái niệm về xử lý lỗi và cách sử dụng</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl">
            <p className="lead">
              Xử lý lỗi là một phần quan trọng trong lập trình, giúp bạn quản lý và phản hồi các tình huống bất thường trong chương trình.
            </p>
            
            <h2>Các phương pháp xử lý lỗi</h2>
            <ul>
              <li><strong>try...catch</strong>: Bắt và xử lý các lỗi trong một khối mã</li>
              <li><strong>throw</strong>: Tạo ra một lỗi tùy chỉnh</li>
              <li><strong>finally</strong>: Thực hiện mã bất kể có lỗi hay không</li>
            </ul>

            <h2>Ví dụ</h2>
            <pre><code>{`
function chia(a, b) {
  if (b === 0) {
    throw new Error("Không thể chia cho 0");
  }
  return a / b;
}

try {
  console.log(chia(10, 2));  // 5
  console.log(chia(10, 0));  // Sẽ ném ra lỗi
} catch (error) {
  console.log("Đã xảy ra lỗi: " + error.message);
} finally {
  console.log("Phép tính đã kết thúc");
}
            `}</code></pre>

            <p>
              Trong ví dụ trên, chúng ta đã sử dụng try...catch để bắt lỗi khi cố gắng chia cho 0, và sử dụng throw để tạo ra một lỗi tùy chỉnh.
            </p>

            <h2>Kết luận</h2>
            <p>
              Xử lý lỗi là một kỹ năng quan trọng trong lập trình JavaScript. Nó giúp bạn tạo ra các ứng dụng mạnh mẽ hơn, có khả năng phục hồi tốt hơn từ các tình huống bất thường. Bằng cách sử dụng các kỹ thuật xử lý lỗi, bạn có thể cải thiện trải nghiệm người dùng và dễ dàng gỡ lỗi cho ứng dụng của mình.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}

