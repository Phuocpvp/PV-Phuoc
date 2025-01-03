import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Mang() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Mảng trong JavaScript</CardTitle>
          <CardDescription>Khái niệm về mảng và cách sử dụng</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl">
            <p className="lead">
              Mảng là một cấu trúc dữ liệu cho phép bạn lưu trữ nhiều giá trị trong một biến duy nhất.
            </p>
            
            <h2>Định nghĩa mảng</h2>
            <p>
              Trong JavaScript, bạn có thể tạo mảng bằng cách sử dụng dấu ngoặc vuông <code>[]</code> hoặc từ khóa <code>new Array()</code>.
            </p>

            <h2>Các phương thức mảng phổ biến</h2>
            <ul>
              <li><strong>push()</strong>: Thêm phần tử vào cuối mảng</li>
              <li><strong>pop()</strong>: Xóa phần tử cuối cùng của mảng</li>
              <li><strong>map()</strong>: Tạo mảng mới bằng cách áp dụng một hàm cho mỗi phần tử</li>
              <li><strong>filter()</strong>: Tạo mảng mới với các phần tử thỏa mãn điều kiện</li>
            </ul>

            <h2>Ví dụ</h2>
            <pre><code>{`
let fruits = ["apple", "banana", "orange"];

fruits.push("grape");
console.log(fruits);  // ["apple", "banana", "orange", "grape"]

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);  // ["APPLE", "BANANA", "ORANGE", "GRAPE"]

let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);  // ["banana", "orange"]
            `}</code></pre>

            <p>
              Trong ví dụ trên, chúng ta đã tạo một mảng và sử dụng một số phương thức phổ biến của mảng.
            </p>

            <h2>Kết luận</h2>
            <p>
              Mảng là một công cụ mạnh mẽ trong JavaScript, cho phép bạn làm việc với tập hợp dữ liệu một cách hiệu quả. Hiểu và sử dụng thành thạo các phương thức mảng sẽ giúp bạn xử lý dữ liệu dễ dàng hơn trong các ứng dụng của mình.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}

