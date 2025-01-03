import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DieuKien() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Câu lệnh điều kiện trong JavaScript</CardTitle>
          <CardDescription>Khái niệm về câu lệnh điều kiện và cách sử dụng</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl">
            <p className="lead">
              Câu lệnh điều kiện cho phép bạn thực hiện các hành động khác nhau dựa trên các điều kiện khác nhau.
            </p>
            
            <h2>Các loại câu lệnh điều kiện</h2>
            <ul>
              <li><strong>if...else</strong>: Thực hiện một khối mã nếu một điều kiện đúng, và một khối khác nếu điều kiện sai</li>
              <li><strong>switch</strong>: Thực hiện một khối mã khác nhau dựa trên các giá trị khác nhau của một biểu thức</li>
              <li><strong>toán tử ba ngôi</strong>: Một cách ngắn gọn để viết câu lệnh if...else đơn giản</li>
            </ul>

            <h2>Ví dụ</h2>
            <pre><code>{`
// if...else
let age = 18;
if (age >= 18) {
  console.log("Bạn đã đủ tuổi bầu cử");
} else {
  console.log("Bạn chưa đủ tuổi bầu cử");
}

// switch
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Đầu tuần");
    break;
  case "Friday":
    console.log("Cuối tuần");
    break;
  default:
    console.log("Ngày trong tuần");
}

// Toán tử ba ngôi
let isRaining = true;
let action = isRaining ? "Mang ô" : "Không cần mang ô";
console.log(action);
            `}</code></pre>

            <p>
              Trong các ví dụ trên, chúng ta đã sử dụng các loại câu lệnh điều kiện khác nhau để thực hiện các hành động dựa trên các điều kiện cụ thể.
            </p>

            <h2>Kết luận</h2>
            <p>
              Câu lệnh điều kiện là một phần quan trọng của lập trình, cho phép bạn tạo ra các chương trình linh hoạt và thông minh. Hiểu và sử dụng đúng các câu lệnh điều kiện sẽ giúp bạn xử lý các tình huống khác nhau trong chương trình của mình một cách hiệu quả.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}

