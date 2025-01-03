import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function VongLap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Vòng lặp trong JavaScript</CardTitle>
          <CardDescription>Khái niệm về vòng lặp và cách sử dụng</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl">
            <p className="lead">
              Vòng lặp cho phép bạn thực hiện một khối mã nhiều lần dựa trên một điều kiện cụ thể.
            </p>
            
            <h2>Các loại vòng lặp</h2>
            <ul>
              <li><strong>for</strong>: Lặp một số lần xác định</li>
              <li><strong>while</strong>: Lặp khi điều kiện đúng</li>
              <li><strong>do...while</strong>: Lặp ít nhất một lần, sau đó lặp khi điều kiện đúng</li>
              <li><strong>for...of</strong>: Lặp qua các phần tử của một đối tượng có thể lặp (như mảng)</li>
            </ul>

            <h2>Ví dụ</h2>
            <pre><code>{`
// Vòng lặp for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Vòng lặp while
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Vòng lặp do...while
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// Vòng lặp for...of
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}
            `}</code></pre>

            <p>
              Trong các ví dụ trên, chúng ta đã sử dụng các loại vòng lặp khác nhau để in ra các số từ 0 đến 4 và các phần tử của mảng fruits.
            </p>

            <h2>Kết luận</h2>
            <p>
              Vòng lặp là một công cụ quan trọng trong lập trình, cho phép bạn tự động hóa các tác vụ lặp đi lặp lại. Hiểu và sử dụng đúng các loại vòng lặp sẽ giúp bạn viết code hiệu quả và tối ưu hơn.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}